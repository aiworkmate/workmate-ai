import { Link, useRouterState } from "@tanstack/react-router";
import {
  MessageSquare, Brain, FileText, BarChart3,
  Shield, Settings, LayoutDashboard, Plus, ScrollText,
  FolderKanban, Bot, Globe, Plug, Activity, ShieldCheck, Stethoscope,
} from "lucide-react";

const groups = [
  {
    label: "Workspace",
    items: [
      { to: "/app", label: "Home", icon: LayoutDashboard, exact: true },
      { to: "/app/chat", label: "Chats", icon: MessageSquare },
      { to: "/app/projects", label: "Projects", icon: FolderKanban },
      { to: "/app/agents", label: "Agents", icon: Bot },
      { to: "/app/memory", label: "Memory", icon: Brain },
      { to: "/app/uploads", label: "Files", icon: FileText },
    ],
  },
  {
    label: "System",
    items: [
      { to: "/app/sources", label: "Sources", icon: Globe },
      { to: "/app/verification", label: "Verification", icon: ShieldCheck },
      { to: "/app/tools", label: "Tools", icon: Plug },
      { to: "/app/health", label: "Health", icon: Activity },
      { to: "/app/analytics", label: "Analytics", icon: BarChart3 },
    ],
  },
  {
    label: "Admin",
    items: [
      { to: "/app/medical", label: "Medical", icon: Stethoscope },
      { to: "/app/admin", label: "Admin", icon: Shield },
      { to: "/app/audit", label: "Audit logs", icon: ScrollText },
      { to: "/app/settings", label: "Settings", icon: Settings },
    ],
  },
];

export function AppSidebar({ mobile = false }: { mobile?: boolean }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = (to: string, exact?: boolean) => exact ? pathname === to : pathname === to || pathname.startsWith(to + "/");

  return (
    <aside
      className={[
        mobile ? "flex w-full" : "hidden w-[272px] md:flex",
        "shrink-0 flex-col border-r border-sidebar-border bg-sidebar",
      ].join(" ")}
    >
      <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-5">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-sm font-semibold text-primary-foreground shadow-sm">
          WM
        </div>
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold tracking-tight text-foreground">WorkMate X</div>
          <div className="mt-0.5 truncate text-xs text-muted-foreground">AI operator workspace</div>
        </div>
      </div>

      <div className="px-4 pt-4">
        <Link
          to="/app/chat"
          className="flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-3 text-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-95"
        >
          <Plus className="h-4 w-4" /> New chat
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {groups.map((g) => (
          <div key={g.label} className="mb-5">
            <div className="mb-2 px-3 text-[11px] font-medium tracking-wide text-muted-foreground">{g.label}</div>
            <ul className="space-y-1">
              {g.items.map((item) => {
                const active = isActive(item.to, item.exact);
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className={[
                        "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition",
                        active
                          ? "bg-accent text-foreground"
                          : "text-muted-foreground hover:bg-accent/70 hover:text-foreground",
                      ].join(" ")}
                    >
                      <item.icon className={["h-4 w-4", active ? "text-primary" : "text-muted-foreground group-hover:text-foreground"].join(" ")} />
                      <span className="truncate">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="border-t border-sidebar-border p-4">
        <div className="rounded-2xl border border-border bg-card p-3">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <span className="h-2 w-2 rounded-full bg-success" />
            System ready
          </div>
          <p className="mt-1 text-xs text-muted-foreground">Memory, routing, and verification are online.</p>
        </div>
      </div>
    </aside>
  );
}
