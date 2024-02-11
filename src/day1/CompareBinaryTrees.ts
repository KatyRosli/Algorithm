export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
  //base case, structural check
  if(a === null && b === null){
    return true;
  }
  //next base case, structural check
  if(a === null || b === null){
    return false;
  }
  //last base case, value check
  if(a.value !== b.value){
    return false;
  }
  //for entire tree now
  return compare(a.left, b.left) && compare(a.right, b.right);
}