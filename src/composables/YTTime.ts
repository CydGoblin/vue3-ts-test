export function YTTimeParse(duration: string) {
  // P0D Son video en vivo
  if (duration !== "P0D") {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/)!;

    const time = match.slice(1).map((x) => {
      if (x != null) {
        return x.replace(/\D/, "");
      }
    });

    const hours = parseInt(time[0]!) || 0;
    const minutes = parseInt(time[1]!) || 0;
    const seconds = parseInt(time[2]!) || 0;

    return { hours, minutes, seconds };
  }
  return { hours: 0, minutes: 0, seconds: 0 };
}

export function YTTimeToSeconds(duration: string) {
  const time = YTTimeParse(duration);

  const hoursToSeconds = time.hours * 60 * 60;
  const minutesToSeconds = time.minutes * 60;

  return hoursToSeconds + minutesToSeconds + time.seconds;
}

export function YTDurationFormat(duration: string) {
  const time = YTTimeParse(duration);

  const hoursFormat = time.hours > 0 ? time.hours + ":" : "";
  const secondsFormat = time.seconds < 10 ? `${time.seconds}0` : time.seconds;

  return `${hoursFormat}${time.minutes}:${secondsFormat}`;
}
