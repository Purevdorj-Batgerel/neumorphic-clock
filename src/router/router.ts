
import { createSignal } from "../utils/reactivity";

export class Router {
  routes: Record<string, Element> = {};
  outlet: Element | null = null;
  currentPath: () => string;
  private setCurrentPath: (path: string) => void;

  constructor(outlet: Element) {
    this.outlet = outlet;
    const [path, setPath] = createSignal(window.location.pathname);
    this.currentPath = path;
    this.setCurrentPath = setPath;
    window.addEventListener("popstate", () => this.handlePopState());
  }

  addRoute(path: string, component: Element) {
    this.routes[path] = component;
  }

  navigate(path: string) {
    history.pushState({}, "", path);
    this.setCurrentPath(path);
    this.render(path);
  }

  handlePopState() {
    this.setCurrentPath(window.location.pathname);
    this.render(window.location.pathname);
  }

  render(path: string) {
    if (this.outlet && this.routes[path]) {
      this.outlet.innerHTML = "";
      this.outlet.appendChild(this.routes[path]);
    }
  }
}
