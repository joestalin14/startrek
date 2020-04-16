export class Counter {
    constructor(counterField) {
        this.counterField = counterField;
        this.timerId = null;
        this.totalCount = 0;
    }
    startCounter() {
        this.timerId = setInterval(() => {
            this.totalCount += 1;
            this.counterField.innerHTML = this.totalCount;
        }, 500);
    }
    pauseCounter() {
        clearInterval(this.timerId);
    }
    stopCounter() {
        clearInterval(this.timerId);
        this.totalCount = 0;
        this.counterField.innerHTML = this.totalCount;
    }
}
