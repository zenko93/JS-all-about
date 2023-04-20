

// abstract engine example
class Car {
    constructor(engine) {
        this.engine = engine;
    }

    startEngine() {
        this.engine.simpleInterface();
    }
}

class Engine20 {
    simpleInterface() {
        console.log('simple set up')
    }
}

class EngineV8 {
    complicatedInterface() {
        console.log('complicated set up')
    }
}

class EngineV8Adapter {
    constructor(engine) {
        this.engine = engine;
    }

    simpleInterface() {
        return this.engine.complicatedInterface()
    }
}

let car = new Car(new EngineV8Adapter(new EngineV8));

car.startEngine()
