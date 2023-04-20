// array adapter example on class
class ArrayToQueueAdapter extends Array {
    enqueue(data) {
        this.push(data);
    }

    dequeue(data) {
        return this.pop();
    }

    get count() {
        return this.length;
    }

    logger() {
        console.log(this)
    }
}

const queue = new ArrayToQueueAdapter();
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.logger()





