module.exports.convert = (v, from, to) => {
  v = parse10(v); from = parse10(from); to = parse10(to);
}
const from2 = (from, to, v) => {
  return parseInt(v, from).toString(to);
}
const parse10 = (v) => {
  return parseInt(v.toString(10));
}
