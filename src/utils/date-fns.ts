export function getDayName(date = new Date()) {
  return date.toLocaleDateString("en-US", { weekday: "long" });
}

export function getISOWeekStartEnd(date = new Date()) {
  let currentDay = date.getDay();
  // Adjust Sunday (0) to be the 7th day for ISO calculation
  if (currentDay === 0) currentDay = 7;

  // Calculate the difference to the first day of the week (Monday, which is 1)
  const diffToStart = currentDay - 1;

  const firstDay = new Date(date);
  firstDay.setDate(date.getDate() - diffToStart);
  firstDay.setHours(0, 0, 0, 0);

  const lastDay = new Date(firstDay);
  lastDay.setDate(firstDay.getDate() + 6); // Add 6 days to get to Sunday
  lastDay.setHours(23, 59, 59, 999);

  return { firstDay, lastDay };
}
