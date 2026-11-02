class MinStack {
    
    private data:Array<number | string>;
    
    constructor() {
        this.data = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number | string): void {
        this.data.push(val);
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.data.pop();
    }

    /**
     * @return {number}
     */
    top(): number|string {
        return this.data.at(-1);
    }

    /**
     * @return {number}
     */
    getMin(): number | string {
        const numbers = this.data.filter((val) => typeof val === "number")

        return Math.min(...numbers);
    }
}
