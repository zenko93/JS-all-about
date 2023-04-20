const logger = (str, formatter) => {
  const result = formatter ? formatter(str) : str;

  return console.log(result);
}

logger('hello', (str) => str.toUpperCase());
