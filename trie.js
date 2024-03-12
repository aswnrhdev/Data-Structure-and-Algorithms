class Node {
    constructor() {
        this.children = {};
        this.isWordEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let curr = this.root;
        for (const char of word) {
            if (!curr.children[char]) {
                curr.children[char] = new Node();
            }
            curr = curr.children[char];
        }
        curr.isWordEnd = true;
    }

    search(word) {
        let curr = this.root;
        for (const char of word) {
            if (!curr.children[char]) {
                return false;
            }
            curr = curr.children[char]
        }
        return curr.isWordEnd;
    }

    startWith(prefix) {
        let curr = this.root
        for (const char of prefix) {
            if (!curr.children[char]) {
                return false
            }
            curr = curr.children[char]
        }
        return true;
    }

    autoComplete(prefix) {
        let curr = this.root;
        for (const char of prefix) {
            if (!curr.children[char]) {
                return [];
            }
            curr = curr.children[char];
        }

        return this.collectWords(curr, prefix);
    }

    collectWords(curr, prefix) {
        let words = [];

        if (curr.isWordEnd) {
            words.push(prefix);
        }

        for (const char in curr.children) {
            words = words.concat(this.collectWords(curr.children[char], prefix + char));
        }

        return words;
    }

}

const trie = new Trie();

trie.insert("apple");
trie.insert("appetizer");
trie.insert("app");
trie.insert("bat");
trie.insert("batman");
// console.log(trie.startWith("a"));

console.log(trie.autoComplete("app"));
// Output: ['app', 'apple', 'appetizer']