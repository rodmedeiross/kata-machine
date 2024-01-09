export default function dfs(head: BinaryNode<number> | null, needle: number): boolean {

  if(!head){ return false}

  if(head.value == needle){
    return true
  }

  if(dfs(head?.left, needle)){
    return true
  }

  if(dfs(head?.right, needle)){
    return true
  }

  return  false
}
