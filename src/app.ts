
import "./app.css";
import BottomNav from "./BottomNav";
import SleepScreen from "./screens/sleepScreen";
import JournalScreen from "./screens/journalScreen";
import StatisticsScreen from "./screens/statisticsScreen";
import CE from "./utils/createElement";
import { Router } from "./router/router";

const App = () => {
  const screens = CE("div", { class: "screens" });
  const router = new Router(screens);

  router.addRoute("/", SleepScreen());
  router.addRoute("/journal", JournalScreen());
  router.addRoute("/statistics", StatisticsScreen());
  router.addRoute("/profile", CE("div", { class: "profile" }, "Profile"));

  // Handle initial route
  setTimeout(() => {
    router.render(window.location.pathname === "/index.html" ? "/" : window.location.pathname || "/");
  }, 0);

  return CE(
    "main",
    {},
    CE(
      "div",
      { class: "phone" },
      screens,
      BottomNav({
        onNavigate: (path) => router.navigate(path),
        currentPath: router.currentPath,
      })
    )
  );
};

export default App;
