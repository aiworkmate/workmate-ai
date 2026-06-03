import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search, Bell, ChevronDown, LogOut, User as UserIcon, Menu } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { TenantSwitcher } from "@/components/tenant-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { AppSidebar } from "@/components/app-sidebar";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function AppTopbar() {
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const initials = (profile?.display_name || user?.email || "U")
    .split(" ").map((s) => s[0]).slice(0, 2).join("").toUpperCase();

  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-3 border-b border-border bg-background/95 px-4 backdrop-blur md:px-6">
      <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
        <SheetTrigger asChild>
          <button
            className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card text-muted-foreground hover:text-foreground md:hidden"
            aria-label="Open navigation"
          >
            <Menu className="h-5 w-5" />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[290px] border-r border-sidebar-border bg-sidebar p-0">
          <AppSidebar mobile />
        </SheetContent>
      </Sheet>

      <TenantSwitcher />

      <div className="relative ml-1 hidden max-w-xl flex-1 md:block">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          placeholder="Search chats, projects, memories..."
          className="h-11 w-full rounded-xl border border-border bg-card pl-10 pr-16 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/40 focus:ring-2 focus:ring-ring/20"
        />
        <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-border bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">⌘K</kbd>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <ThemeToggle />
        <button className="relative grid h-10 w-10 place-items-center rounded-xl border border-border bg-card text-muted-foreground hover:text-foreground" aria-label="Notifications">
          <Bell className="h-4 w-4" />
          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-primary" />
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 rounded-xl border border-border bg-card px-2 py-1.5 transition hover:bg-accent">
            <div className="grid h-8 w-8 place-items-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
              {initials}
            </div>
            <span className="hidden max-w-[180px] truncate text-sm font-medium md:inline">{profile?.display_name || user?.email}</span>
            <ChevronDown className="hidden h-4 w-4 text-muted-foreground md:block" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-60">
            <DropdownMenuLabel className="font-normal">
              <div className="text-sm font-medium">{profile?.display_name || "Operator"}</div>
              <div className="text-xs text-muted-foreground">{user?.email}</div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate({ to: "/app/settings" })}>
              <UserIcon className="mr-2 h-4 w-4" /> Profile & settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={async () => { await signOut(); navigate({ to: "/" }); }} className="text-destructive focus:text-destructive">
              <LogOut className="mr-2 h-4 w-4" /> Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
