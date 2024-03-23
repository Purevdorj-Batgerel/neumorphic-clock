import CE from "../utils/createElement";

export default function Pulse() {
  return CE(
    ["http://www.w3.org/2000/svg", "svg"],
    { width: "24", height: "24", viewBox: "0 0 24 24" },
    CE(["http://www.w3.org/2000/svg", "path"], {
      d: "M22 12h-4l-3 9L9 3l-3 9H2",
    })
  );
}
