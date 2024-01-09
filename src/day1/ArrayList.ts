export default class ArrayList<T> {
  public length: number;
  public buffer: Array<T>;
  public capacity: number; 

  constructor(capacity: number) {
    this.capacity = capacity
    this.buffer = Array(this.capacity)
    this.length = 0
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
