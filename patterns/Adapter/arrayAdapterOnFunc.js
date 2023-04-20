// array adapter example on function
const arrayToQueueAdapter = () => {
    const arr = [];

    arr.enqueue = (data) => arr.push(data);
    arr.dequeue = () => arr.pop();
    arr.count = () => arr.length;

    return arr;
}

const queue = arrayToQueueAdapter();
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
while (queue.count()) {
    console.log(queue.dequeue())
}
