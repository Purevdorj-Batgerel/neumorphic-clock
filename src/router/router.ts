import { createSignal, createEffect } from "../utils/reactivity";

// Create reactive path signal
const getInitialPath = () => {
  const path = window.location.pathname;
  return path === "/index.html" || path === "" ? "/" : path;
};

export const [currentPath, setCurrentPath] = createSignal(getInitialPath());

// Route configuration type
type RouteConfig = {
  path: string;
  component: () => Element;
};

// Route registry
const routes: RouteConfig[] = [];

// Register a route
export function addRoute(path: string, component: () => Element) {
  routes.push({ path, component });
}

// Navigate to a new path
export function navigate(path: string) {
  if (currentPath() !== path) {
    history.pushState({}, "", path);
    setCurrentPath(path);
  }
}

// Get the component for the current path
export function getCurrentComponent(): Element | null {
  const path = currentPath();
  const route = routes.find((r) => r.path === path);
  return route ? route.component() : null;
}

// Initialize router - handle browser back/forward
export function initRouter() {
  window.addEventListener("popstate", () => {
    setCurrentPath(getInitialPath());
  });
}

// Create a reactive router outlet that automatically updates when path changes
export function createRouterOutlet(): Element {
  const outlet = document.createElement("div");
  outlet.className = "screens";

  // Reactively update the outlet when path changes
  createEffect(() => {
    const component = getCurrentComponent();
    if (component) {
      outlet.innerHTML = "";
      outlet.appendChild(component);
    }
  });

  return outlet;
}
