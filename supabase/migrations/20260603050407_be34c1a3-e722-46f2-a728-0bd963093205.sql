
-- =========================================
-- WorkMate X — Phase 1: new entities
-- =========================================

-- Enums
DO $$ BEGIN
  CREATE TYPE public.project_status AS ENUM ('active','planning','paused','completed','archived');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE public.task_status AS ENUM ('todo','planned','in_progress','blocked','review','done','cancelled');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE public.task_priority AS ENUM ('low','medium','high','urgent');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE public.verification_status AS ENUM ('unverified','pending','verified','rejected');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE public.memory_layer AS ENUM ('working','session','project','user','knowledge','archive');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE public.tool_status AS ENUM ('connected','disconnected','error','pending');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE public.health_status AS ENUM ('healthy','warning','critical','unknown');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- =========================================
-- PROJECTS
-- =========================================
CREATE TABLE public.projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  name text NOT NULL,
  description text,
  color text NOT NULL DEFAULT 'violet',
  status public.project_status NOT NULL DEFAULT 'active',
  is_pinned boolean NOT NULL DEFAULT false,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.projects TO authenticated;
GRANT ALL ON public.projects TO service_role;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "projects_own" ON public.projects FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER trg_projects_updated BEFORE UPDATE ON public.projects FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Child tables for projects
CREATE TABLE public.project_goals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  project_id uuid NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  status text NOT NULL DEFAULT 'open',
  target_date date,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.project_goals TO authenticated;
GRANT ALL ON public.project_goals TO service_role;
ALTER TABLE public.project_goals ENABLE ROW LEVEL SECURITY;
CREATE POLICY "project_goals_own" ON public.project_goals FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE TABLE public.project_milestones (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  project_id uuid NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  status text NOT NULL DEFAULT 'upcoming',
  due_date date,
  completed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.project_milestones TO authenticated;
GRANT ALL ON public.project_milestones TO service_role;
ALTER TABLE public.project_milestones ENABLE ROW LEVEL SECURITY;
CREATE POLICY "project_milestones_own" ON public.project_milestones FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE TABLE public.project_notes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  project_id uuid NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  title text,
  content text NOT NULL,
  tags text[] NOT NULL DEFAULT '{}',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.project_notes TO authenticated;
GRANT ALL ON public.project_notes TO service_role;
ALTER TABLE public.project_notes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "project_notes_own" ON public.project_notes FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE TABLE public.project_decisions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  project_id uuid NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  title text NOT NULL,
  content text,
  rationale text,
  decided_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.project_decisions TO authenticated;
GRANT ALL ON public.project_decisions TO service_role;
ALTER TABLE public.project_decisions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "project_decisions_own" ON public.project_decisions FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- =========================================
-- TASKS
-- =========================================
CREATE TABLE public.tasks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  project_id uuid REFERENCES public.projects(id) ON DELETE CASCADE,
  goal_id uuid REFERENCES public.project_goals(id) ON DELETE SET NULL,
  title text NOT NULL,
  description text,
  status public.task_status NOT NULL DEFAULT 'todo',
  priority public.task_priority NOT NULL DEFAULT 'medium',
  due_date timestamptz,
  assigned_agent text,
  plan jsonb NOT NULL DEFAULT '[]'::jsonb,
  blockers text,
  result_summary text,
  verification_status public.verification_status NOT NULL DEFAULT 'unverified',
  retry_count integer NOT NULL DEFAULT 0,
  requires_approval boolean NOT NULL DEFAULT false,
  approved boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.tasks TO authenticated;
GRANT ALL ON public.tasks TO service_role;
ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "tasks_own" ON public.tasks FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER trg_tasks_updated BEFORE UPDATE ON public.tasks FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- =========================================
-- DOCUMENTS
-- =========================================
CREATE TABLE public.documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  project_id uuid REFERENCES public.projects(id) ON DELETE SET NULL,
  title text NOT NULL,
  type text NOT NULL DEFAULT 'note',
  content text,
  file_url text,
  tags text[] NOT NULL DEFAULT '{}',
  is_pinned boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.documents TO authenticated;
GRANT ALL ON public.documents TO service_role;
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;
CREATE POLICY "documents_own" ON public.documents FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- =========================================
-- SOURCES
-- =========================================
CREATE TABLE public.sources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  project_id uuid REFERENCES public.projects(id) ON DELETE SET NULL,
  conversation_id uuid,
  title text NOT NULL,
  url text,
  type text NOT NULL DEFAULT 'web',
  snippet text,
  fetched_at timestamptz NOT NULL DEFAULT now(),
  freshness_score real NOT NULL DEFAULT 1.0,
  is_verified boolean NOT NULL DEFAULT false,
  tags text[] NOT NULL DEFAULT '{}',
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.sources TO authenticated;
GRANT ALL ON public.sources TO service_role;
ALTER TABLE public.sources ENABLE ROW LEVEL SECURITY;
CREATE POLICY "sources_own" ON public.sources FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- =========================================
-- AGENT DEFINITIONS (workspace-wide, readable by all authenticated)
-- =========================================
CREATE TABLE public.agent_definitions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  agent_id text NOT NULL UNIQUE,
  label text NOT NULL,
  description text,
  status text NOT NULL DEFAULT 'active',
  routing_keywords text[] NOT NULL DEFAULT '{}',
  total_invocations integer NOT NULL DEFAULT 0,
  avg_latency_ms integer NOT NULL DEFAULT 0,
  success_rate real NOT NULL DEFAULT 1.0,
  last_used timestamptz,
  icon text,
  accent text NOT NULL DEFAULT 'violet',
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.agent_definitions TO authenticated;
GRANT ALL ON public.agent_definitions TO service_role;
ALTER TABLE public.agent_definitions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "agent_definitions_read" ON public.agent_definitions FOR SELECT TO authenticated USING (true);

-- =========================================
-- OPERATIONAL KNOWLEDGE
-- =========================================
CREATE TABLE public.operational_knowledge (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  project_id uuid REFERENCES public.projects(id) ON DELETE SET NULL,
  title text NOT NULL,
  content text NOT NULL,
  category text NOT NULL DEFAULT 'general',
  source text,
  agent_type text,
  confidence real NOT NULL DEFAULT 0.8,
  applied_count integer NOT NULL DEFAULT 0,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.operational_knowledge TO authenticated;
GRANT ALL ON public.operational_knowledge TO service_role;
ALTER TABLE public.operational_knowledge ENABLE ROW LEVEL SECURITY;
CREATE POLICY "operational_knowledge_own" ON public.operational_knowledge FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- =========================================
-- VERIFICATION LOGS
-- =========================================
CREATE TABLE public.verification_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  project_id uuid REFERENCES public.projects(id) ON DELETE SET NULL,
  conversation_id uuid,
  claim text NOT NULL,
  verdict public.verification_status NOT NULL DEFAULT 'pending',
  confidence real NOT NULL DEFAULT 0.5,
  source text,
  evidence text,
  agent_type text,
  verified_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.verification_logs TO authenticated;
GRANT ALL ON public.verification_logs TO service_role;
ALTER TABLE public.verification_logs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "verification_logs_own" ON public.verification_logs FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- =========================================
-- TOOL CONNECTIONS
-- =========================================
CREATE TABLE public.tool_connections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  name text NOT NULL,
  tool_type text NOT NULL,
  status public.tool_status NOT NULL DEFAULT 'disconnected',
  description text,
  last_used timestamptz,
  invocation_count integer NOT NULL DEFAULT 0,
  config jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.tool_connections TO authenticated;
GRANT ALL ON public.tool_connections TO service_role;
ALTER TABLE public.tool_connections ENABLE ROW LEVEL SECURITY;
CREATE POLICY "tool_connections_own" ON public.tool_connections FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- =========================================
-- HEALTH METRICS
-- =========================================
CREATE TABLE public.health_metrics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  metric_name text NOT NULL,
  category text NOT NULL DEFAULT 'system',
  value real NOT NULL,
  unit text,
  status public.health_status NOT NULL DEFAULT 'healthy',
  notes text,
  recorded_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.health_metrics TO authenticated;
GRANT ALL ON public.health_metrics TO service_role;
ALTER TABLE public.health_metrics ENABLE ROW LEVEL SECURITY;
CREATE POLICY "health_metrics_own" ON public.health_metrics FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- =========================================
-- Augment existing memories table
-- =========================================
ALTER TABLE public.memories
  ADD COLUMN IF NOT EXISTS layer public.memory_layer NOT NULL DEFAULT 'user',
  ADD COLUMN IF NOT EXISTS project_id uuid REFERENCES public.projects(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS importance real NOT NULL DEFAULT 0.5,
  ADD COLUMN IF NOT EXISTS verified boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS source text,
  ADD COLUMN IF NOT EXISTS tags text[] NOT NULL DEFAULT '{}';

-- =========================================
-- Seed agent definitions (workspace-wide)
-- =========================================
INSERT INTO public.agent_definitions (agent_id, label, description, routing_keywords, icon, accent) VALUES
  ('ceo', 'CEO Agent', 'Strategic decisions, prioritization, executive synthesis.', ARRAY['strategy','priority','decision','okr'], 'Crown', 'amber'),
  ('research', 'Research Agent', 'Deep research with citations and freshness checks.', ARRAY['research','find','sources','citation'], 'Search', 'sky'),
  ('coding', 'Coding Agent', 'Software engineering, code review, refactors.', ARRAY['code','bug','refactor','typescript'], 'Code2', 'emerald'),
  ('business', 'Business Agent', 'Operations, process design, ops analysis.', ARRAY['ops','process','workflow','business'], 'Briefcase', 'violet'),
  ('marketing', 'Marketing Agent', 'Positioning, copy, campaigns, analytics.', ARRAY['marketing','copy','campaign','seo'], 'Megaphone', 'rose'),
  ('finance', 'Finance Agent', 'Budgets, forecasts, financial analysis.', ARRAY['finance','budget','forecast','revenue'], 'LineChart', 'lime'),
  ('legal', 'Legal Assistant', 'Contract review, clause analysis (non-advice).', ARRAY['legal','contract','clause','nda'], 'Scale', 'slate'),
  ('medical', 'Medical Research', 'Clinical literature synthesis (non-advice).', ARRAY['medical','clinical','pubmed','study'], 'Stethoscope', 'teal'),
  ('pm', 'Project Manager', 'Plans, milestones, status, blockers.', ARRAY['plan','milestone','status','blocker'], 'KanbanSquare', 'indigo'),
  ('travel', 'Travel Assistant', 'Itineraries, bookings, logistics.', ARRAY['travel','flight','hotel','itinerary'], 'Plane', 'cyan')
ON CONFLICT (agent_id) DO NOTHING;

-- Indexes
CREATE INDEX IF NOT EXISTS idx_projects_user ON public.projects(user_id);
CREATE INDEX IF NOT EXISTS idx_tasks_user_project ON public.tasks(user_id, project_id);
CREATE INDEX IF NOT EXISTS idx_documents_user_project ON public.documents(user_id, project_id);
CREATE INDEX IF NOT EXISTS idx_sources_user_project ON public.sources(user_id, project_id);
CREATE INDEX IF NOT EXISTS idx_verification_user ON public.verification_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_tool_user ON public.tool_connections(user_id);
CREATE INDEX IF NOT EXISTS idx_health_user ON public.health_metrics(user_id, recorded_at DESC);
CREATE INDEX IF NOT EXISTS idx_memories_layer ON public.memories(user_id, layer);
