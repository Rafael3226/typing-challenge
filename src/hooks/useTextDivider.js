function useTextDivider(input, index) {
  const notChecked = input.slice(index);
  const checked = input.slice(0, index);
  return { checked, notChecked };
}

export default useTextDivider;
