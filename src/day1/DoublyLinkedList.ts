type Node<T> = {
  value: T 
  next?: Node<T> 
  prev?: Node<T>
}
export default class DoublyLinkedList<T> {
  public length: number;
  public head?: Node<T>;
  public tail?: Node<T>;


  constructor() {
    this.length = 0;
    this.head = this.tail = undefined;
  }

  prepend(item: T): void {
  }

  insertAt(item: T, idx: number): void {

  }
  append(item: T): void {

  }
  remove(item: T): T | undefined {

  }
  get(idx: number): T | undefined {

  }
  removeAt(idx: number): T | undefined {

  }
}
