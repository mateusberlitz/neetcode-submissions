class MinStack {
    
    private data:number[];
    private mins:number[];
    
    constructor() {
        this.data = [];
        this.mins = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.data.push(val);
        this.mins.push(this.mins.length === 0 ? val : Math.min(val, this.mins[this.mins.length - 1]))
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.data.pop();
        this.mins.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.data[this.data.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number{
        return this.mins[this.mins.length - 1];
    }
}
