import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WorkMate X" },
      { name: "description", content: "Log in to your WorkMate workspace." },
    ],
  }),
  component: Landing,
});

function Landing() {
  const { session, loading } = useAuth();
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && session) navigate({ to: "/app", replace: true });
  }, [session, loading, navigate]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Welcome back");
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/app`,
            data: { display_name: name },
          },
        });
        if (error) throw error;
        toast.success("Account created");
      }
      navigate({ to: "/app", replace: true });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Authentication failed");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-background px-4 py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.08),transparent_32%),linear-gradient(to_bottom,transparent,rgba(15,23,42,0.02))]" />
      <div className="relative z-10 w-full max-w-[420px]">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-primary text-base font-semibold text-primary-foreground shadow-sm">
            WM
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground">
            {mode === "signin" ? "Welcome back" : "Create your workspace"}
          </h1>
          <p className="mt-2 text-base text-muted-foreground">
            {mode === "signin" ? "Log in to your account" : "Set up your WorkMate account"}
          </p>
        </div>

        <div className="rounded-[24px] border border-border bg-card p-4 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.22)] sm:p-7">
          <div className="grid grid-cols-2 rounded-2xl bg-muted p-1 text-sm">
            <button
              type="button"
              onClick={() => setMode("signin")}
              className={[
                "rounded-xl px-3 py-2 font-medium transition",
                mode === "signin" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground",
              ].join(" ")}
            >
              Log in
            </button>
            <button
              type="button"
              onClick={() => setMode("signup")}
              className={[
                "rounded-xl px-3 py-2 font-medium transition",
                mode === "signup" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground",
              ].join(" ")}
            >
              Create account
            </button>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {mode === "signup" && (
              <Field id="name" label="Name">
                <Input id="name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="BIM Explorer" className="h-11 rounded-xl" />
              </Field>
            )}

            <Field id="email" label="Email">
              <Input id="email" type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="h-11 rounded-xl" />
            </Field>

            <Field id="password" label="Password">
              <Input
                id="password"
                type="password"
                required
                minLength={mode === "signup" ? 8 : undefined}
                autoComplete={mode === "signin" ? "current-password" : "new-password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="h-11 rounded-xl"
              />
            </Field>

            <Button type="submit" disabled={submitting} className="h-11 w-full rounded-xl bg-primary text-primary-foreground shadow-sm">
              {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : mode === "signin" ? "Log in" : "Create account"}
            </Button>
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          {mode === "signin" ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            className="font-medium text-primary hover:underline"
          >
            {mode === "signin" ? "Create one" : "Log in"}
          </button>
        </p>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Base44-style shell · Cloudflare runtime
          <ArrowRight className="h-3.5 w-3.5" />
        </div>
      </div>
    </div>
  );
}

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </Label>
      {children}
    </div>
  );
}
