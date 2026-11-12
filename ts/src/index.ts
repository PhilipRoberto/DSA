import { MySet } from "./sets/sets";

function main () {
  const mySet = new MySet();

  const otherSetCollection = ["John", "Jane", 1, "Sammy"];

  mySet.add("John");
  mySet.add("Sam");
  console.log(mySet.values());
  mySet.add("John");
  console.log(mySet.values());
  mySet.has("Summer");
  mySet.remove("John");
  console.log(mySet.values());
  console.log(mySet.size());

  console.log(mySet.union(otherSetCollection))
  
}


void main();
