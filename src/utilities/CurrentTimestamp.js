// eslint-disable-next-line import/prefer-default-export
export function getFormattedTimestamp() {
  const now = new Date();
  const formattedTimestamp = `${now.toISOString()
    .slice(0, -5)}Z`;
  return formattedTimestamp;
}
