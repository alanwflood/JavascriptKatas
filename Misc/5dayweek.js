// So and So has a week full of meetings and needs to find the best interval to sleep. Calculate the best interval in a 7 day week.
function Solution(S) {
  // Examples show that that the meetings string is not sorted,
  // so split it by new line,
  // convert the days/times into minutes,
  // sort them by start time, 
  // subtract each meetings end time from the next meetings start,
  // largest interval wins.
  let array = S.split("\n")
    .map((meeting) => convertMeetingToMinutes(meeting))
    .sort((a, b) => a[0] - b[0]);

  array = [[0, 0], ...array, [7 * 24 * 60]];

  let maxInterval = 0;
  for (let i = 1; i < array.length; i++) {
    const interval = array[i][0] - array[i - 1][1];
    if (interval > maxInterval) maxInterval = interval;
  }
  return maxInterval;
}

function convertMeetingToMinutes(meeting) {
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let [day, times] = meeting.split(" ");
  const dayMinutes = daysOfWeek.indexOf(day) * (24 * 60);
  const interval = times.split("-").map((t) => {
    const [hours, minutes] = t.split(":").map((t) => Number(t));
    const hoursMinutes = hours * 60;
    return hoursMinutes + minutes;
  });
  return [dayMinutes + interval[0], dayMinutes + interval[1]];
}

console.log(
  Solution(
    "Mon 01:00-23:00\nTue 01:00-23:00\nWed 01:00-23:00\nThu 01:00-23:00\nSat 01:00-23:00\nFri 01:00-23:00\nSun 01:00-21:00"
  )
);
