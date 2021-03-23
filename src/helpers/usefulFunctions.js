export const surroundWith = (
  string,
  leadingSymbol,
  trailingSymbol = leadingSymbol
) => {
  return `${leadingSymbol}${string}${trailingSymbol}`;
};
