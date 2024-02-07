export default class ArrayList<T> {
    private array: T[];
    public length: number;

    

    constructor(initialCapacity?: number) {
        this.array = initialCapacity ? new Array<T>(initialCapacity) : [];
        this.length = 0;
    }

    prepend(item: T): void {
        this.array.unshift(item);
        this.length++;
    }
    
    insertAt(item: T, idx: number): void {
        if(idx < 0 || idx > this.length) {
            throw new Error("Index out of bounds");
        }
        if(idx === this.length) {
            //if inserting at the end of the list, simply apppend
            this.array.push(item);
        } else {
            //otherwise splice the item the array at the specified index
            this.array.splice(idx, 0, item);
        }
        this.length++;
    }

    append(item: T): void {
        this.array[this.length] = item; //assign the item to the next available index
        this.length++; //update the length property
    }

    remove(item: T): T | undefined {
        const index = this.array.indexOf(item);
        if(index === -1) {
            return undefined;
        }
        const removedItem = this.array.splice(index, 1)[0];
        this.length--;
        return removedItem;
    }

    get(idx: number): T | undefined {
        if(idx <0 || idx >= this.length) {
            return undefined;
        }
        return this.array[idx];
    }

    removeAt(idx: number): T | undefined {
        if(idx <0 || idx >= this.length) {
            return undefined;
        }
        const removedItem = this.array.splice(idx, 1)[0];
        this.length--;
        return removedItem;
    }
}