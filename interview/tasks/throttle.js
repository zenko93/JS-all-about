const fetchData = (url) => {
    console.log(`fetching ${url}`)
}

function throttle(callback, delay) {
  let isThrottled = false;

  return (url) => {
    if (isThrottled) {
      return;
    }

    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      callback(url)
    }, delay)
  }
}

const fetching = throttle(fetchData, 300);

fetching(1);
fetching(2);
fetching(3);
fetching(4);

setTimeout(() => {
  fetching(5);
}, 500)
