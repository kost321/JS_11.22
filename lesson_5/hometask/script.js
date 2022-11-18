//---------------------------task_1---------------------------

class Node {
  constructor(val) {
      this.val = val;
      this.next = null; 
  }
}

class Stack {
  constructor(maxNum) {
    if(typeof maxNum === 'undefined') {
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

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
        this.first = newNode;
        this.last = newNode;
    } else if(this.length === this.maxNum) {
      throw new Error('Limit exceeded');
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next= temp;
    }
    this.length++;     
    return this.length;
  }

  pop() {
      if (this.length === 0) {
        throw new Error('Empty stack');
      };
      let temp = this.first;

      if (this.length === 1) {
          this.last = null;
      }        
      this.first = this.first.next;        
      this.length--;
      return temp.val;
  }

  peek() {
    if(this.length === 0) {
      return null;
    }
    return this.first.val;
  }

  isEmpty() {
    return this.length === 0 ? false : true;
  }

  toArray(){
    let newArr = [];
    if(this.length === 0) {
      return newArr;
    }
    let currentNode =  this.first;
    while(currentNode) {
      newArr.push(currentNode.val);
      currentNode = currentNode.next;
    }
    return newArr;
  }

  static fromIterable(iterable) {
    if(!(Symbol.iterator in Object(iterable))) {
      throw new Error('Not iterable');
    }
    let newObj = new Stack(iterable.length);
   
    for(const [value, key] in iterable) {
      newObj.push(iterable[value]);    
    }
    return newObj;
  }  
}


//---------------------------task_2---------------------------


class ListNode {
  constructor(val) {
      this.val = val;
      this.next = null; 
  }
}

class LinkedList {
  constructor() {
      this.first = null;
      this.last = null;
      this.length = 0;
  }

  append(elem) {
    let newNode = new ListNode(elem);
    if (this.length === 0) {
        this.first = newNode;
        this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;     
    return this.length;
  }

  prepend(elem) {
    let newNode = new ListNode(elem); 
    if (this.length === 0) {
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

  find(elem) {
    let currentNode = this.first;
    while(currentNode) {
      if(currentNode.val === elem) {
        return currentNode.val;
      }

      currentNode = currentNode.next;
    }
    return null;
  }

  toArray(){
    let newArr = [];
    if(this.length === 0) {
      return newArr;
    }
    let currentNode =  this.first;
    while(currentNode) {
      newArr.push(currentNode.val);
      currentNode = currentNode.next;
    }
    return newArr;
  }

  static fromIterable(iterable) {
    if(!(Symbol.iterator in Object(iterable))) {
      throw new Error('Not iterable');
    }
    let newObj = new LinkedList();

    for(const [value, key] in iterable) {
      newObj.prepend(iterable[value]);    
    }
    return newObj;
  }  
}


//---------------------------task_3---------------------------


class Car {
  #brand = '';
  #model = '';
  #yearOfManufacturing = 1950;
  #maxSpeed = 100;
  #maxFuelVolume = 20;
  #fuelConsumption = 1;
  #damage = 1;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;
  #health = 100;

  constructor () {}

  set brand(value) {
    if (typeof value !== 'string') {
      throw new Error('Invalid limit value');
    }
    if(value.length < 1 || value.length > 50) {
      throw new Error('Invalid brand name');
    }
    this.#brand = value;
  }
  get brand() {
    return this.#brand;
  }

  set model(value) {
    if (typeof value !== 'string') {
      throw new Error('Invalid limit value');
    }
    if(value.length < 1 || value.length > 50) {
      throw new Error('Invalid model name');
    }
    this.#model = value;
  }
  get model() {
    return this.#model;
  }

  set yearOfManufacturing(value) {
    let today = new Date();
    let year = today.getFullYear();
    if (!Number.isFinite(value)) {
      throw new Error('Invalid limit value');
    }
    if(value < this.#yearOfManufacturing || value > year) {
      throw new Error('Invalid year of manufacturing');
    }
    this.#yearOfManufacturing = value;
  }
  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set maxSpeed(value) {
    if (!Number.isFinite(value)) {
      throw new Error('Invalid limit value');
    }
    if(value < this.#maxSpeed || value > 330) {
      throw new Error('Invalid max speed');
    }
    this.#maxSpeed = value;
  }
  get maxSpeed() {
    return this.#maxSpeed;
  }
 
  set maxFuelVolume(value) {
    if (!Number.isFinite(value)) {
      throw new Error('Invalid limit value');
    }
    if(value < this.#maxFuelVolume || value > 100) {
      throw new Error('Invalid max fuel volume');
    }
    this.#maxFuelVolume = value;
  }
  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  set fuelConsumption(value) {
    if (!Number.isFinite(value)) {
      throw new Error('Invalid limit value');
    }
    if(value < 0) {
      throw new Error('Invalid fuel consumption');
    }
    this.#fuelConsumption = value;
  }
  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  set damage(value) {
    if (!Number.isFinite(value)) {
      throw new Error('Invalid limit value');
    }
    if(value < this.#damage || value > 5) {
      throw new Error('Invalid damage');
    }
    this.#damage = value;
  }
  get damage() {
    return this.#damage;
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return this.#mileage;
  }

  get health() {
    return this.#health;
  }


  start() {
    if(this.#isStarted === true) {
      throw new Error('Car has already started');
    } else {
      this.#isStarted = true;
    }
  }

  shutDownEngine() {
    if(this.#isStarted === false) {
      throw new Error(`Car hasn't started yet`);
    } else {
      this.#isStarted = false;
    }
  }
 
  fillUpGasTank(value) {
    if(!Number.isFinite(value) || value <= 0) {
      throw new Error('Invalid fuel amount');
    }
    if(this.#isStarted === true) {
      throw new Error('You have to shut down your car first');
    }
    this.#currentFuelVolume += value;
    if(value > this.#maxFuelVolume || this.#currentFuelVolume > this.#maxFuelVolume) {
      throw new Error('Too much fuel');
    }

  }

  drive(speedValue, hoursValue) {
    let distance = speedValue * hoursValue;
    let estimatedTravelDistance = (this.#currentFuelVolume / this.fuelConsumption) * 100;
    let restKilometersWithHealth = (this.#health / this.#damage) * 100;
    if((!Number.isFinite(speedValue) || speedValue <= 0) || speedValue > this.#maxSpeed) {
      throw new Error('Invalid speed');
    }
    if((!Number.isFinite(hoursValue) || hoursValue <= 0)) {
      throw new Error('Invalid duration');
    }
    if(this.#isStarted === false) {
      throw new Error('You have to start your car first');
    }
    if(estimatedTravelDistance < distance) {
      throw new Error(`You don't have enough fuel`);
    }
    if(restKilometersWithHealth < distance) {
      throw new Error('Your car won’t make it');
    }
    let fuelSpent = (distance * this.#fuelConsumption) / 100;
    this.#currentFuelVolume = this.#currentFuelVolume - fuelSpent;
    let healthSpent = (this.#damage * distance) / 100;
    this.#health = this.#health - healthSpent;
    this.#mileage += distance;
  }  

  repair() {
    if(this.#isStarted === true) {
      throw new Error('You have to shut down your car first');
    } 
    if(this.#maxFuelVolume !== this.#currentFuelVolume) {
      throw new Error('You have to fill up your gas tank first');
    }
    this.#health = 100;
  }

  getFullAmount() {
    if(this.#currentFuelVolume === this.#maxFuelVolume) {
      return 0;
    } else {
      let getFullAmount = this.#maxFuelVolume - this.#currentFuelVolume;
      return getFullAmount;
    }
  }
}
