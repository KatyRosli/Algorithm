export default class SinglyLinkedList<T> {
    public length: number;
    private head: ListNode<T> | null;

    constructor() {
        this.length = 0;
        this.head = null;
    }

    prepend(item: T): void {
        const newNode = new ListNode(item);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) {
            throw new Error('Index out of bounds');
        }

        if (idx === 0) {
            this.prepend(item);
            return;
        }

        let current = this.head;
        let prev: ListNode<T> | null = null;
        for (let i = 0; i < idx; i++) {
            if (!current) {
                throw new Error('Index out of bounds');
            }
            prev = current;
            current = current.next;
        }

        const newNode = new ListNode(item);
        newNode.next = current;
        if (prev) {
            prev.next = newNode;
        } else {
            this.head = newNode;
        }
        this.length++;
    }

    append(item: T): void {
        this.insertAt(item, this.length);
    }

    remove(item: T): T | undefined {
        let current = this.head;
        let prev: ListNode<T> | null = null;

        while (current) {
            if (current.value === item) {
                if (prev) {
                    prev.next = current.next;
                } else {
                    this.head = current.next;
                }
                this.length--;
                return current.value;
            }
            prev = current;
            current = current.next;
        }

        return undefined;
    }

    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }

        let current = this.head;
        for (let i = 0; i < idx; i++) {
            if (!current) {
                return undefined;
            }
            current = current.next;
        }

        return current?.value;
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }

        if (idx === 0) {
            return this.removeHead();
        }

        let current = this.head;
        let prev: ListNode<T> | null = null;

        for (let i = 0; i < idx; i++) {
            if (!current) {
                return undefined;
            }
            prev = current;
            current = current.next;
        }

        if (prev && current) {
            prev.next = current.next;
            this.length--;
            return current.value;
        }

        return undefined;
    }

    private removeHead(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        const value = this.head.value;
        this.head = this.head.next;
        this.length--;
        return value;
    }
}

class ListNode<T> {
    value: T;
    next: ListNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

