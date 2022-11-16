class Node {
  constructor(val){
      this.val = val;
      this.next = null; 
  }
}

class Stack {
  constructor(maxNum){
    if(typeof maxNum === 'undefined' ) {
      this.maxNum = 10;
    } else if (!isFinite(maxNum) || isNaN(maxNum) || typeof maxNum !== 'number' || maxNum < 0) {
      throw new Error('Invalid limit value');
    } else {
      this.maxNum = maxNum;
    }
      this.first = null;
      this.last = null;
      this.length = 0;
  }

  push(val){
    let newNode = new Node(val)
    if (this.length === 0){
        this.first = newNode;
        this.last = newNode;
    } else if(this.length === this.maxNum){
      throw new Error('Limit exceeded');
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next= temp;
    }
    this.length++;     
    return this.length;
  }

  pop(){
      if (this.length === 0) {
        throw new Error('Empty stack');
      };
      let temp = this.first;

      if (this.length === 1){
          this.last = null;
      }        
      this.first = this.first.next;        
      this.length--;
      console.log(this)
      console.log(temp.val)
      return temp.val;
  }

  peek(){
    if(this.length === 0) {
      return null;
    }
    console.log(this.first)
    return this.first.val;
  }

  isEmpty(){
    return this.length === 0 ? false : true;
  }

  toArray(){
    let newArr = [];
    if(this.length === 0){
      return newArr;
    }
    
    const iterate = (obj) => {
      Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
          iterate(obj[key])
        } else if(obj[key] !== null){
          newArr.push(obj[key]);
        }
      })
    }
    iterate(this.first);
    return newArr;
  }

  static fromIterable(iterable) {
    let newObj = new Stack();
    let checkIterable = false;
    try {
      for(let i in iterable) {
        break;
      }
      checkIterable = true; 
    } catch(e) {
      checkIterable = false;
    }
    if(checkIterable === false) {
      throw new Error('Not iterable')
    }
    for(const [value, key] in iterable) {
      newObj.push(iterable[value]);    
    }
    return newObj;
  }  
}

let stack = new Stack(2);

// console.log(result.push(2));
// console.log(result.push(3));
// console.log(result.push(5));
// console.log(result.pop());
// console.log(result.pop());
// console.log(result.pop());
// let obj = '12';
// let e = Stack.fromIterable(obj);
// console.log(e.push(3))
// console.log(e.peek())
// console.log(e.isEmpty());
// console.log(e.pop())
// console.log(e.toArray())
// console.log(result.toArray())



//-----------------------task_2---------------------------


class ListNode {
  constructor(val){
      this.val = val;
      this.next = null; 
  }
}

class LinkedList {
  constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
  }

  append(elem){
    let newNode = new ListNode(elem)
    if (this.length === 0){
        this.first = newNode;
        this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;     
    return this.length;
  }

  prepend(elem){
    let newNode = new ListNode(elem)
    if (this.length === 0){
        this.first = newNode;
        this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next= temp;
    }
    this.length++;     
    return this.length;
  }

  find(elem){
    let currentNode = this.first;
    while(currentNode) {
      if(currentNode.val === elem){
        return currentNode.val;
      }

      currentNode = currentNode.next;
    }
    return null
  }

  toArray(){
    let newArr = [];
    if(this.length === 0){
      return newArr;
    }
    const iterate = (obj) => {
      Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
          iterate(obj[key])
        } else if(obj[key] !== null){
          newArr.push(obj[key]);
        }
      })
    }
    iterate(this.first);
    return newArr;
  }

  static fromIterable(iterable) {
    debugger
    let newObj = new LinkedList();
    let checkIterable = false;
    try {
      for(let i in iterable) {
        break;
      }
      checkIterable = true; 
    } catch(e) {
      checkIterable = false;
    }
    if(checkIterable === false) {
      throw new Error('Not iterable')
    }
    for(const [value, key] in iterable) {
      newObj.prepend(iterable[value]);    
    }
    return newObj;
  }  
}

let linkedList = new LinkedList();
// linkedList.append(2);
// linkedList.append(3);
// linkedList.prepend(5);
// linkedList.prepend(7);
// obj = '23'
// LinkedList.fromIterable(obj)
// console.log(linkedList.find(5));
// console.log(linkedList.toArray());