export const makePathName = (str: string): string => {
  return str.toLowerCase().replace(/\s/g, '-').replace(/[\.,\/#!$%\^&\*;:{}=_`~()@\+\?><\[\]\+]/g, '')
}
