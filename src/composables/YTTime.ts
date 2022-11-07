export function YTTime(duration: string) {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/)!;

  const time = match.slice(1).map((x) => {
    if (x != null) {
      return x.replace(/\D/, "");
    }
  });

  const hours = parseInt(time[0]!) || 0;
  const minutes = parseInt(time[1]!) || 0;
  const seconds = parseInt(time[2]!) || 0;

  const hoursToSeconds = hours * 60 * 60;
  const minutesToSeconds = minutes * 60;

  return hoursToSeconds + minutesToSeconds + seconds;
}
