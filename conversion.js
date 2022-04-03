module.exports.convert = (v, from, to) => {
  v = parse10(v); from = parse10(from); to = parse10(to);
  if ( ( ( from == 2 || (from == 8) || (from == 10) || (from == 16) ) && ( (to == 2) || (to == 8) || (to == 10) || (to == 16) ) ) && (from != to) )
    return { res: from2(from, to, v), v, from, to };
  else {
    let error = `The template should be : http://domain.extension/?value=[NUMBER]&from=[2/8/10/16]&to=[2/8/10/16]\nPlease enter: 10 for decimal, 16 for hexadecimal, 8 for octal and 2 for binary.\nPlease enter a different value for "from" and "to".`
    console.error( error );
    return { error };
  }
}
const from2 = (from, to, v) => {
  return parseInt(v, from).toString(to);
}
const parse10 = (v) => {
  return parseInt(v.toString(10));
}
