function useStrEvaluator(string, substring) {
  // const strEval = string.slice(0, substring.length);
  const length = substring.length;
  let count = 0;
  for (let i = 0; i < length; i++) {
    if (string[i] === substring[i]) {
      count++;
    } else {
      return count;
    }
  }
  return count;
}
export default useStrEvaluator;
