import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { e as endpoints, A as ApiNotConfiguredError, s as setTenantHeaders } from "./endpoints-CCL68eY6.mjs";
import { a as useAuth } from "./router-klMIKaP_.mjs";
const Ctx = reactExports.createContext(null);
const ORG_KEY = "workmate.org_id";
const WS_KEY = "workmate.workspace_id";
function TenantProvider({ children }) {
  const { session } = useAuth();
  const orgsQ = useQuery({
    queryKey: ["organizations"],
    queryFn: () => endpoints.organizations.list(),
    enabled: Boolean(session),
    retry: false,
    staleTime: 6e4
  });
  const organizations = orgsQ.data ?? [];
  const [orgId, setOrgId] = reactExports.useState(() => typeof window !== "undefined" ? localStorage.getItem(ORG_KEY) : null);
  const [wsId, setWsId] = reactExports.useState(() => typeof window !== "undefined" ? localStorage.getItem(WS_KEY) : null);
  reactExports.useEffect(() => {
    if (!orgId && organizations[0]) setOrgId(organizations[0].id);
  }, [orgId, organizations]);
  const wsQ = useQuery({
    queryKey: ["workspaces", orgId],
    queryFn: () => endpoints.workspaces.list(orgId),
    enabled: Boolean(session && orgId),
    retry: false,
    staleTime: 6e4
  });
  const workspaces = wsQ.data ?? [];
  reactExports.useEffect(() => {
    if (orgId && (!wsId || !workspaces.some((w) => w.id === wsId)) && workspaces[0]) {
      setWsId(workspaces[0].id);
    }
  }, [orgId, wsId, workspaces]);
  reactExports.useEffect(() => {
    if (orgId) localStorage.setItem(ORG_KEY, orgId);
    else localStorage.removeItem(ORG_KEY);
    if (wsId) localStorage.setItem(WS_KEY, wsId);
    else localStorage.removeItem(WS_KEY);
    setTenantHeaders({ organizationId: orgId, workspaceId: wsId });
  }, [orgId, wsId]);
  const organization = reactExports.useMemo(() => organizations.find((o) => o.id === orgId) ?? null, [organizations, orgId]);
  const workspace = reactExports.useMemo(() => workspaces.find((w) => w.id === wsId) ?? null, [workspaces, wsId]);
  const setOrganization = reactExports.useCallback((org) => {
    setOrgId(org.id);
    setWsId(null);
  }, []);
  const setWorkspace = reactExports.useCallback((ws) => setWsId(ws.id), []);
  const apiError = orgsQ.error;
  const notConfigured = apiError instanceof ApiNotConfiguredError;
  const error = apiError ? notConfigured ? "Backend API not configured" : apiError.message : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Ctx.Provider,
    {
      value: {
        organizations,
        workspaces,
        organization,
        workspace,
        setOrganization,
        setWorkspace,
        loading: orgsQ.isLoading || wsQ.isLoading,
        error,
        ready: Boolean(organization && workspace)
      },
      children
    }
  );
}
function useTenant() {
  const v = reactExports.useContext(Ctx);
  if (!v) throw new Error("useTenant outside TenantProvider");
  return v;
}
export {
  TenantProvider as T,
  useTenant as u
};
