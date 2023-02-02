// AutoComplete functionality
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
    }
    for (let child in node.children) {
      this._searchWords(node.children[child], prefix + child, words);
    }
  }
}

export let trie = new Trie();

let words = [
  "Omaxe green Valley",
  "Pan oasis",
  "Gardenia glory",
  "DLF ultima",
  "Grand heritage",
  "Ajnara 121",
  "Fortune residency",
  "Omaxe new height",
  "Gaur grandeur",
  "Bptp park resort",
  "Nirala estate",
  "Bptp park grandeura",
  "Ansal heights",
  "Platinum heights",
  "Park Avenue",
  "Amrapali platinum",
  "Paramount Floraville",
  "Paras seasons",
  "Ajnara daffodils",
  "Supertech ecociti",
  "Happy homes",
  "Aditya urban casa",
  "Maxblis white House",
  "Devaan heights",
  "Engineer park society",
  "Ansal esencia",
  "Ashiana anmol",
  "Vipul lavanya",
  "Civitech sampriti",
  "Jm aroma",
  "Emaar palm heights",
  "Emaar palm gurgaon",
  "Gurgaon one",
  "Ats pristin",
  "JM Florence",
  "JM orchid",
  "Shri radha sky",
  "Shri radha apra garden",
  "Emerald heights",
  "Gpl eden heights",
  "Amrapali sapphire",
  "Amrapali village",
  "Chintel paradiso",
  "rps green valley",
];

for (let word of words) {
  trie.insert(word);
}

