module.exports.convert = (req, v, from, to) => {
  v = parse10(v);
  // from = parse10(from);
  // to = parse10(to);
  try {
    if (
      (from != "2" || from != "8" || from != "10" || from != "16") &&
      (to != "2" || to != "8" || to != "10" || to != "16")
    )
      return { res: from2(from, to, v), v, from, to };
  } catch (error) {
    console.error(error);
    return `The template should be : http://domain.extension/[2/8/10/16]/[2/8/10/16]/[NUMBER_TO_CONVERT]\nPlease enter: 10 for decimal, 16 for hexadecimal, 8 for octal and 2 for binary.\nPlease enter a different value for "from" and "to".`;
  }
};
const from2 = (from, to, v) => {
  return parseInt(v, from).toString(to);
};
const parse10 = (v) => {
  return parseInt(v.toString(10));
};
