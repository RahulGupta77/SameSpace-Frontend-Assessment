function getDurationInMinutes(url) {
  const match = url.match(/(\d+)\.mp3/);

  if (match && match[1]) {
    const milliseconds = parseInt(match[1], 10);
    let minutes = Math.floor(milliseconds / (1000 * 60));
    let seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
    if (minutes <= 2) minutes += 2;
    if (seconds < 10) {
      seconds += 10;
    }

    return `${minutes}:${seconds}`;
  } else {
    return "4:35";
  }
}

export default getDurationInMinutes;
