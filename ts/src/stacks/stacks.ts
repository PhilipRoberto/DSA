// STACK
//  Last in First out (LIFO) data structure

// functions
// push - add data to a stack
// pop - remove data from the stack
// peek - display the top el of a stack
// length - the length of the stack

// arrays have the functions of a stack.

export const checkWordIsPalindrome = (word: string) => {
  var letters: any[] = [];
  console.log("Initial empty letters array stack: ", letters);
  console.log("Primary word: ", word);

  var reverse_word: string = "";
  console.log("Reverse word: ", reverse_word);

  // put letters of 'word' into the 'letters' stack;
  for (var i = 0; i < word.length; i++) {
    letters.push(word[i]);
    // console.log("Letters in loop: ", letters);
  }
  console.log("Letters array now stacked with chars from 'word' var: ", letters);

  // pop off the stack 'letters' in reverse order
  for (var i = 0; i < word.length; i++) {
    reverse_word += letters.pop();
    // console.log("reverse_word in loop: ", reverse_word);
  }
  console.log("Letters array has been popped to fill the 'reverse_word' var: ", reverse_word);


  if (reverse_word === word) {
    console.log(word + " is a palindrome");
  } else {
    console.log(word + " is not a palindrome");
  }
};


// STACK class
export class Stack<T> {
  constructor () {}

  private count: number = 0;
  private storage: Record<number, T> = {};

  // Push - adds a value onto the end of the stack...
  public push (value: any): void {
    this.storage[this.count] = value;
    this.count++;
  }

  // Pop - removes and returns the value at the end of the stack...
  public pop (): any {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    var result: any = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  // Size - displays the size of our stack <equiv length arr method>
  public size (): number {
    return this.count;
  }

  // Peek - displays the last value of our stack
  public peek (): any {
    return this.storage[this.count -1];
  }

  // View - displays a view of all the items in our stack
  public view (): any {
    return this.storage;
  }
}
