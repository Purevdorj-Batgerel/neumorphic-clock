import CE from "../utils/createElement";

export default function Profile() {
  return CE(
    ["http://www.w3.org/2000/svg", "svg"],
    { width: "24", height: "24", viewBox: "0 0 24 24" },
    CE(["http://www.w3.org/2000/svg", "path"], {
      d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
    }),
    CE(["http://www.w3.org/2000/svg", "circle"], {
      cx: "12",
      cy: "7",
      r: "4",
    })
  );
}