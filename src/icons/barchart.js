import CE from "../utils/createElement";

export default function BarChart() {
  return CE(
    ["http://www.w3.org/2000/svg", "svg"],
    { width: "24", height: "24", viewBox: "0 0 24 24" },
    CE(["http://www.w3.org/2000/svg", "path"], { d: "M3 3v18h18" }),
    CE(["http://www.w3.org/2000/svg", "path"], { d: "M18 17V9" }),
    CE(["http://www.w3.org/2000/svg", "path"], { d: "M13 17V5" }),
    CE(["http://www.w3.org/2000/svg", "path"], { d: "M8 17v-3" })
  );
}
