export default class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(item: string): void {
        let node = this.root;
        for (const char of item) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char)!;
        }
        node.isEndOfWord = true;
    }

    delete(item: string): void {
        const stack: [TrieNode, number][] = [[this.root, 0]];
        let index = 0;

        while (stack.length > 0) {
            const [node, depth] = stack.pop()!;
            if (depth === item.length) {
                node.isEndOfWord = false;
                return;
            }

            const char = item[depth];
            const childNode = node.children.get(char);
            if (childNode) {
                stack.push([childNode, depth + 1]);
            }

            // Clean up nodes with no children
            if (stack.length === index) {
                if (node.isEndOfWord && node.children.size === 0) {
                    stack.pop();
                    if (stack.length > 0) {
                        stack[stack.length - 1][0].children.delete(item[depth - 1]);
                    }
                }
                index = stack.length;
            }
        }
    }

    find(partial: string): string[] {
        let node = this.root;
        for (const char of partial) {
            if (!node.children.has(char)) {
                return [];
            }
            node = node.children.get(char)!;
        }
        return this.collectWords(node, partial);
    }

    private collectWords(node: TrieNode, prefix: string): string[] {
        const words: string[] = [];
        if (node.isEndOfWord) {
            words.push(prefix);
        }
        for (const [char, childNode] of node.children) {
            words.push(...this.collectWords(childNode, prefix + char));
        }
        return words;
    }
}

class TrieNode {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;

    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}
