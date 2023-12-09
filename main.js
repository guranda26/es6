// დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს n ცალ რიცხვს (n > 2). ფუნქციამ
//უნდა დააბრუნოს 2 - ელემენტიანი მასივი, სადაც პირველი ელემენტია პირველი და
//მეორე პარამეტრის ჯამი, ხოლო მეორე ელემენტი - მესამე ელემენტიდან დაწყებული ყველა დანარჩენის ნამრავლი

let num = function (a, b, ...arr) {
  let sum = a + b;
  let multiply = 1;
  for (let i = 0; i < arr.length; i++) {
    multiply *= arr[i];
  }
  const total = [sum, multiply];
  return total;
};

console.log(num(1, 2, 4, 5));

// დავუშვათ გვინდა ობიექტიდან წავიკითხოთ შემდეგი ველი:
// user.banks[2].address.city. დაწერე ფუნქცია,რომელიც პარამეტრად მიიღებს user ობიექტს და დააბრუნებს city-ს.
// გამოიყენე destructuring-ი. თუ ასეთი ველი არ არსებობს უნდა დაბრუნდეს undefined

function getCityInfo(user) {
  const {
    banks: [, , { address: { city } = {} } = {}],
  } = user;

  return city;
}

const user = {
  banks: [
    {
      address: {
        city: "Paris",
      },
    },
    {
      address: {
        city: "Tokyo",
      },
    },
    {
      address: {
        city: "Tbilisi",
      },
    },
  ],
};

const city = getCityInfo(user);
console.log(city);

// დაწერე ფუნქცია, რომელიც პარამეტრად  მიიღებს ნებისმიერ ობიექტს და
// დააბრუნებს იგივე მნიშვნელობების მქონე  ახალ (განსხვავებულ) ობიექტს

const myName = {
  name: "Guranda",
  surname: "Lemonjava",
  career: {
    currently: "Marketing",
    future: "Software engineer",
  },
};
let deepCopy = function (user) {
  let copiedObj = {};
  for (key in user) {
    if (user.hasOwnProperty(key)) {
      if (typeof user[key] === "object" && user[key] !== "null") {
        copiedObj[key] = deepCopy({ ...user[key] });
      }
    } else {
      copiedObj[key] = { ...user[key] };
    }
  }
  return copiedObj;
};

const copyObj = deepCopy(myName);

copyObj.name = "JM";
console.log(myName);
console.log(copyObj);
