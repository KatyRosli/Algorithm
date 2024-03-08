export default class Map<T extends string | number, V> {
    private data: { [key: string]: V } = {};

    constructor() {}

    get(key: T): V | undefined {
        return this.data[key.toString()];
    }

    set(key: T, value: V): void {
        this.data[key.toString()] = value;
    }

    delete(key: T): void {
        delete this.data[key.toString()];
    }

    size(): number {
        return Object.keys(this.data).length;
    }
}
