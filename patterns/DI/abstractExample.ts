class Engine {
    fireCylinders() {
        console.log('vroom vroom')
    }
}

class Car {
    private engine: Engine;

    public constructor (engine: Engine) {
        this.engine = engine;
    }

    public startEngine(): void {
        this.engine.fireCylinders();
    }
}

const newCar = new Car(new Engine());

newCar.startEngine()
