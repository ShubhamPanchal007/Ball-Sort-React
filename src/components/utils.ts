// AutoComplete functionality

let words = [
  "Aditya urban casa",
  "Ajnara 121",
  "Ajnara daffodils",
  "Amrapali platinum",
  "Amrapali sapphire",
  "Amrapali village",
  "Ansal esencia",
  "Ansal heights",
  "Ashiana anmol",
  "Bptp park grandeura",
  "Bptp park resort",
  "Chintel paradiso",
  "Civitech sampriti",
  "Devaan heights",
  "DLF ultima",
  "Emaar palm gurgaon",
  "Emaar palm heights",
  "Engineer park society",
  "Emerald heights",
  "Fortune residency",
  "Gaur grandeur",
  "Gardenia glory",
  "Gpl eden heights",
  "Grand heritage",
  "Gurgaon one",
  "Happy homes",
  "JM aroma",
  "JM Florence",
  "JM orchid",
  "Maxblis white House",
  "Nirala estate",
  "Omaxe green Valley",
  "Omaxe new height",
  "Park Avenue",
  "Pan oasis",
  "Paramount Floraville",
  "Paras seasons",
  "Platinum heights",
  "RPS green valley",
  "Shri radha apra garden",
  "Shri radha sky",
  "Supertech ecociti",
  "Vipul lavanya",
];

class TrieNode {
  letter: string;
  children: { [key: string]: TrieNode };
  endOfWord: boolean;

  constructor(letter: string) {
    this.letter = letter;
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode("");
  }
  insert(word: string) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      let letter = word[i].toLowerCase();
      if (!current.children[letter]) {
        current.children[letter] = new TrieNode(letter);
      }
      current = current.children[letter];
    }
    current.endOfWord = true;
  }

  search(prefix: string): string[] {
    let current = this.root;
    for (let i = 0; i < prefix.length; i++) {
      let letter = prefix[i].toLowerCase();
      if (!current.children[letter]) {
        return [];
      }
      current = current.children[letter];
    }

    let words: any = [];
    this._searchWords(current, prefix, words);
    return words;
  }

  _searchWords(node: TrieNode, prefix: string, words: string[]) {
    if (node.endOfWord) {
      words.push(prefix);
      return;
    }
    for (let child in node.children) {
      console.log(child);
      this._searchWords(node.children[child], prefix + child, words);
    }
  }
}

export let trie = new Trie();

// Insert Words
for (let word of words) {
  trie.insert(word);
}


