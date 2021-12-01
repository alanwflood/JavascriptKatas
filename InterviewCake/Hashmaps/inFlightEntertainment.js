function inFlightEntertainment(flightLength, movieLengths) {
  let movieSeen = new Set();
  for (let i = 0; i < movieLengths.length; i++) {
    let matchingSecondMovie = flightLength - movieLengths[i];
    if (movieSeen.has(matchingSecondMovie)) return true;
    movieSeen.add(movieLengths[i]);
  }
  return false;
}

console.log(inFlightEntertainment(1000, [560, 250, 1200, 750]));
