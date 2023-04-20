const fetchData = (url) => {
    console.log(`fetching ${url}`)
}

function debounce(callback, delay) {
  let timer = null;

  return (url) => {
    if (timer) {
      clearTimeout(timer); // этот вариант для того что бы фетчить только последний вызов
    }

    timer = setTimeout(() => {
      callback(url)
    }, delay)
  }
}

const fetching = debounce(fetchData, 300);

fetching(1);
fetching(2);
fetching(3);
fetching(4);

setTimeout(() => {
  fetching(5);
}, 500)
