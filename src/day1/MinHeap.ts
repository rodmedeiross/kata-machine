export default class MinHeap {
  public length: number;

  private data: number[]; 

  constructor() {
    this.data = []
    this.length = 0
  }

  insert(value: number): void {
    this.data[this.length] = value
    this.heapifyUp(this.length)
    this.length++;
  }

  delete(): number {
    if(this.length === 0){
      return -1
    }

    const head = this.data[0] 
    this.length--;

    if(this.length === 0){
      this.data = []
      return head
    }

    this.data[0] = this.data[this.length] 
    this.hepifyDown(0)
    return head
  }

  private hepifyDown(idx: number): void {
    const leftIndex = this.getLeftChild(idx)
    const rightIndex = this.getRightChild(idx)

    if(idx >= this.length || leftIndex >= this.length){
      return
    }

    const rightValue = this.data[rightIndex]
    const leftValue = this.data[leftIndex]
    const value = this.data[idx]

    if(leftValue > rightValue && value > rightValue){
      this.data[idx] = rightValue
      this.data[rightIndex] = value
      this.hepifyDown(rightIndex)
    } else if (rightValue > leftValue && value > leftValue){
      this.data[idx] = leftValue
      this.data[leftIndex] = value
      this.hepifyDown(leftIndex)
    }

  }

  private heapifyUp(idx: number): void{
    if(idx === 0){
      return
    }

    const parent = this.getParent(idx)
    const valueParent = this.data[parent]
    const value = this.data[idx]

    if(valueParent > value){
      this.data[idx] = valueParent
      this.data[parent] = value
      this.heapifyUp(parent)
    }
  }

  private getParent(idx: number): number{
    return Math.floor((idx -1)/2)
  }

  private getLeftChild(idx: number): number{
    return idx * 2+1 
  }

  private getRightChild(idx: number): number{
    return idx * 2  +2  
  }
}
