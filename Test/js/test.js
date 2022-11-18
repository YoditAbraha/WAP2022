const makeAdder = function (inc) {
	let counter = 0;
	return function () {
	  counter = counter += inc;
	  return counter;
	};
  };

  const adder5 = makeAdder(5);
  adder5();
  adder5();
  console.log(adder5());

var add = (function () {
  var counter = 0;
  return function () {
    return (counter += 1);
  };
})();

{
  let count = 0;
  function s() {
    console.log("test");
  }
  s();
}

(function () {
  let counter = 0;
  function add() {
    counter += 1;
  }
  function reset() {
    counter = 0;
  }

  return {
    counter: counter,
    add: add,
    reset: reset,
  };
})();

const count2 = {
  counter: 0,
  reset: function () {
    this.counter = 0;
    return this.counter;
  },
  add: function () {
    this.counter += 1;
    return this.counter;
  },
};
count.add();
count.add();
count.reset();

let make_adder = function (inc) {
  var counter = 0;
  return function () {
    return (counter += inc);
  };
};

const Employee = (function () {
  let name = "";
  let age = 0;
  let salary = 0;

  function setAge(newAge) {
    age = newAge;
  }
  function setSalary(newSalary) {
    salary = newSalary;
  }
  function setName(newName) {
    name = newName;
  }
  function getAge() {
    return age;
  }
  function getName() {
    return name;
  }
  function getSalary() {
    return salary;
  }
  function increaseSalary(percentage) {
    const addedSalary = getSalary() * percentage;
    salary += addedSalary;
  }
  function incrementAge() {
    setAge(getAge() + 1);
  }
  return {
    setAge: setAge,
    setSalary: setSalary,
    setName: setName,
    increaseSalary: increaseSalary,
    incrementAge: incrementAge,
  };
})();

Employee.address = { street: "", city: "", state: "", zip: "" };
Employee.setAddress = function (street, city, state, zip) {
  this.address = {
    street: street,
    city: city,
    state: state,
    zip: zip,
  };
};
Employee.getAddress = function () {
  return this.address;
};
Employee.setAddress("100 Main", "Fairfield", "Iowa", "52556");
console.log(Employee.getAddress());
const Employee2 = {
  name: "test",
  age: "23",
  address: undefined,
};

Employee.setAddress.call(Employee2, "100 Main", "Fairfield", "Iowa", "52556");

console.log(Employee2.address);
const z = { f: 1, r: 4, s: 6 };

const yz = { d: 4, e: 5 };

const x = { a: 1, b: 2, c: 3 };

x.__proto__ = yz;
yz.__proto__ = z;

const y = Object.keys(x);
console.log(y);

const w = [];
for (const z in x) {
  w.push(z);
}
console.log(w);

function User(name) {
  this.name = name;
}

let user = new User("yodit");

function Employee(salary) {
  this.salary = salary;
}
Employee.prototype = user;

let emp = new Employee(23423);

console.log(Employee.prototype);
console.log(emp.__proto__);
Object.setPrototypeOf(emp, user);
Object.getPrototypeOf(emp);
for (let key in emp) {
  console.log(`${key}: ${emp[key]}`);
}

for (const key in emp) {
  console.log(`${key}: ${emp[key]}`);
}
console.log([1,2,3]);
