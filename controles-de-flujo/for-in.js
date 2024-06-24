let user = {
  id: 1,
  name: "Sebastian",
  age: "23",
};

for (let prop in user) {
  console.log(prop, user[prop]);
}
