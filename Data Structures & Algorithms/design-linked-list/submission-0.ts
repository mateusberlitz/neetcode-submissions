type LinkedList = {
    previous: LinkedList | null;
    val: number;
    next: LinkedList | null;
}

class MyLinkedList {
    private head: LinkedList | null;
    private size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        if (index < 0 || index >= this.size) {
            return -1;
        }

        let current = this.head!;

        for (let i = 0; i < index; i++) {
            current = current.next!;
        }

        return current.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val: number): void {
        this.addAtIndex(0, val);
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val: number): void {
        this.addAtIndex(this.size, val);
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index: number, val: number): void {
        if (index < 0 || index > this.size) {
            return;
        }

        if (this.size === 0) {
            this.head = {
                previous: null,
                val,
                next: null
            };
        } else if (index === this.size) {
            let current = this.head!;
            while (current.next !== null) {
                current = current.next;
            }
            const newNode: LinkedList = {
                previous: current,
                val,
                next: null
            };
            current.next = newNode;
        } else {
            let current = this.head!;
            for (let i = 0; i < index; i++) {
                current = current.next!;
            }

            let newNode: LinkedList = {
                previous: current.previous,
                val,
                next: current
            };

            if (current.previous !== null) {
                current.previous.next = newNode;
            }
            current.previous = newNode;

            if (index === 0) {
                this.head = newNode;
            }
        }

        this.size++;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.size) {
            return;
        }

        let current = this.head!;
        for (let i = 0; i < index; i++) {
            current = current.next!;
        }

        if (current.previous !== null) {
            current.previous.next = current.next;
        } else {
            this.head = current.next;
        }

        if (current.next !== null) {
            current.next.previous = current.previous;
        }

        this.size--;
    }
}
