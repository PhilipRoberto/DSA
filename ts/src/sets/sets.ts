// SETS
// sets is like an array, except that there are no duplicate items, and in no particular order.
// typically used to check the presence of an item
//  -> the built in set object does not contain all the implementations common to a set object

export class MySet {
  constructor () {}

  // the var collection will hold the set
  private collection: Array<any> = []

  // this method will check for the presence of an element and return true or false
  public has (el: any): any {
    return (this.collection.indexOf(el) !== -1);
  }

  // this method returns the values in the set
  public values () {
    return this.collection;
  }

  // this method adds an element to the set
  public add (el: any) {
    if (!this.has(el)) {
      this.collection.push(el);
      return true;
    }
    return false;
  }

  // this method removes an element from a set
  public remove (el: any) {
    if (this.has(el)) {
      var index: number = this.collection.indexOf(el);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  }

  // this method returns the size of the collection
  public size () {
    return this.collection.length;
  }

  // this method returns the union of two sets - or prehaps the union of more than two sets
  public union (otherSet: typeof this.collection) {
    // the 'otherSet' parameter has to be an array like 'this.collection'
    var unionSet = new Set();
    var firstSet = this.values();
    var secondSet: typeof this.collection = otherSet
    firstSet.forEach((e: any) => {
      unionSet.add(e);
    })
    secondSet.forEach((e: any) => {
      unionSet.add(e);
    })

    return unionSet.values();
  }
  
}
