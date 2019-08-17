// TODO: think of a better name for this
export function strip(value: string) {
  return value
    .replace('.', '')
    .replace(',', '')
    .trim()
    .toLowerCase();
}
