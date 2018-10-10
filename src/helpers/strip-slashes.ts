export const stripSlashes = (str: string): string => {
  return str.replace(/\\\\/g, '').replace(/\r?\n|\r/g, '')
}
