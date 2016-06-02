//function testable(target) {
//  target.isTestable = true;
//}
//
//@testable
//class MyTestableClass {}
//
//console.log(MyTestableClass.isTestable) // true


function addMemory(target) {
  target.cost += 75;
}

function addBlurayDrive(target) {
  target.cost += 300;
}

function addInsurance(target) {
  target.cost += 250;
}


@addMemory
class Macbook {
  constructor() {
    this.cost = 1000;
  }
}


var totalCost = new Macbook();

console.log('totalCost.cost::', totalCost.cost);



