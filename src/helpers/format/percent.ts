const percent = (value: number): string => {
  return `${value.toFixed(2).replace(".", ",")}%`;
};

export default percent;
