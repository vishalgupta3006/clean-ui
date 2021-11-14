export const elapsedDaysCalculator = (pastDate: Date) => {
  const elapsedMilSec = new Date().getTime() - pastDate.getTime();
  const elapsedDays = elapsedMilSec / (1000 * 60 * 60 * 24);
  return Math.floor(elapsedDays);
}