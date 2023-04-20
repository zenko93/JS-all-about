class AutoNews {
    constructor() {
        this.news = '';
        this.actions = [];
    }

    setNews(text) {
        this.news = text;
        this.notifyAll();
    }

    notifyAll() {
        return this.actions.forEach(subs => this.inform(subs, this.news))
    }

    inform(subs, news) {
        console.log(`${subs.name} has been informed about: ${news}`)
    }

    register(observer) {
        this.actions.push(observer);
    }

    unregister(observer) {
        this.actions = this.actions.filter(el => !(el instanceof observer))
    }
}

class User {
    constructor(name) {
        this.name = name;
    }
}

const news = new AutoNews();
news.register(new User('Max'))
news.register(new User('Jack'))
news.setNews('Uraa')
