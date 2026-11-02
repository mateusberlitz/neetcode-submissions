class MinStack {
    
    private data:Array<number>;
    
    constructor() {
        this.data = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
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
    top(): number {
        return this.data.at(-1);
    }

    /**
     * @return {number}
     */
    getMin(): number{
        return Math.min(...this.data);
    }
}
