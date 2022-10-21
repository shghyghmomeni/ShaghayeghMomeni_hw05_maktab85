let array = [
  (obj1 = {
    name: "dina",
    age: 19,
  }),
  (obj2 = {
    name: "mohammad",
    age: 21,
  }),
  (obj3 = {
    name: "arash",
    age: 25,
  }),
  (obj4 = {
    name: "maryam",
    age: 32,
  }),
  (obj5 = {
    name: "mahsa",
    age: 16,
  }),
  (obj6 = {
    name: "lale",
    age: 23,
  }),
];

console.log(array.sort((a, b) => a.age - b.age));
