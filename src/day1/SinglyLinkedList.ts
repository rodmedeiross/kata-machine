type Node<T> = {
  value: T
  next?: Node<T>
}

export default class SinglyLinkedList<T> {
    public length: number;
    public head?: Node<T>;
    public tail?: Node<T>;    

    constructor() {
      this.length = 0
      this.head = undefined
      this.tail = undefined
    }

    prepend(item: T): void {
      this.length++
      const node = {value: item} as Node<T>
      if(!this.head){
        this.head = node;
        this.tail = node;
      }

      node.next = this.head
      this.head = node
    }

    insertAt(item: T, idx: number): void {
      if(!this.head){
        this.head = {} as Node<T>
        let node = this.head
        for(let i = 0; i <= idx; i++){
          node.next = {} as Node<T>
          node = node.next
        }

        node.value = item
        this.tail = node
      }  
      
      let node = this.head.next

      while(node && idx > 1){
        idx --
        node = node.next
      }

      if(node == this.tail){
        node!.next = {value:item} as Node<T>
        this.tail = node!.next
      }
      let newNode = {value: item, next: node?.next}
      node!.next = newNode
    }

    append(item: T): void {
      this.length++
      const node = {value: item} as Node<T>
      if(!this.tail){
        this.head = node;
        this.tail = node;
      }

      this.tail.next = node
      this.tail = node
 
    }

    remove(item: T): T | undefined {
      if(!this.head){
        return undefined
      }
      
      let node = this.head
      if(node.value === item){
        this.head = node.next
        this.length--
        return node?.value
      }

      while(node.next){
        if(node.next.value === item){
          break
        }

        node = node.next
      }

      if(!node.next){
        return undefined
      }

      let nodeToRemove = node.next
      if(nodeToRemove === this.tail){
        this.tail = node
      }

      node.next = nodeToRemove?.next
      this.length--
      return nodeToRemove?.value
    }

    get(idx: number): T | undefined {
      if(this.length <= idx || !this.head || idx < 0){
        return undefined
      }

      let node = this.head  
      while(node.next && idx > 0){
        idx--
        node = node?.next
      }
   
      return node?.value
    }

    removeAt(idx: number): T | undefined {
     if(!this.head|| idx >= this.length || idx < 0){
       return undefined
     } 
      
      if(idx === 0){
        let swap = this.head
        this.head = this.head.next
        this.length--
        return swap?.value
      }

     let node = this.head

     while(node.next && idx > 1){
       node = node.next
        idx -- 
     }

      let nodeToRemove = node.next
      if(nodeToRemove === this.tail){
        this.tail = node
      }

      node.next = nodeToRemove?.next
      this.length--
      return nodeToRemove?.value
    }
}
