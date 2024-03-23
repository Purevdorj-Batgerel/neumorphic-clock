import CE from "../utils/createElement";

export default function Moon() {
  return CE(
    ["http://www.w3.org/2000/svg", "svg"],
    { width: "24", height: "24", viewBox: "0 0 24 24" },
    CE(["http://www.w3.org/2000/svg", "path"], {
      d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",
    })
  );
}
