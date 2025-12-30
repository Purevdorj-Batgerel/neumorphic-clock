import "./app.css";
import BottomNav from "./BottomNav";
import SleepScreen from "./screens/sleepScreen";
import JournalScreen from "./screens/journalScreen";
import StatisticsScreen from "./screens/statisticsScreen";
import { addRoute, createRouterOutlet, initRouter } from "./router/router";

const App = () => {
  // Initialize router
  initRouter();

  // Register routes
  addRoute("/", () => SleepScreen());
  addRoute("/journal", () => JournalScreen());
  addRoute("/statistics", () => StatisticsScreen());
  addRoute("/profile", () => <div className="profile">Profile</div>);

  // Create reactive router outlet
  const screens = createRouterOutlet();

  return (
    <main>
      <div class="phone">
        {screens}
        <BottomNav />
      </div>
    </main>
  );
};

export default App;
