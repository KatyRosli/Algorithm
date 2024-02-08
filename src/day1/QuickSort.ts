//this is divide and conquer strategy

function quickSort(array: number[], low: number, high: number): void{
  if(low >= high) {
    return;
  }
  const pivotIdx = partition(array, low, high);
  quickSort(array, low, pivotIdx -1);
  quickSort(array, pivotIdx + 1, high);
}

function partition(array: number[], low: number, high: number): number {
  const pivot = array[high];
  let idx = low - 1;

  for(let i = low; i < high; i++) {
    if(array[i] <= pivot) {
      idx++;
      const tmp = array[i];
      array[i] = array[idx];
      array[idx] = tmp;
    }
  }
  idx++;
  array[high] = array[idx];
  array[idx] = pivot;
  return idx;
}

export default function quick_sort(array: number[]): void {
  quickSort(array, 0, array.length -1);
}