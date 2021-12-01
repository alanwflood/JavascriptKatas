function mergeMeetings(meetings) {
  meetings = meetings.sort((a, b) => a[0] - b[0]);
  let merged = [meetings[0]];

  for (let i = 1; i < meetings.length; i++) {
    let [lastMergedStart, lastMergedEnd] = merged[merged.length - 1];
    let [currStart, currEnd] = meetings[i];
    if (currStart <= lastMergedEnd) {
      merged[merged.length - 1] = [
        lastMergedStart,
        Math.max(currEnd, lastMergedEnd),
      ];
    } else {
      merged.push([currStart, currEnd]);
    }
  }
  return merged;
}
