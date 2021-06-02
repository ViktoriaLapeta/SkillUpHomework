const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };
  user.mood = 'happy'
  user.hobby = 'skydiving'
  user.premium = false
//   console.log(user)
  let keys = Object.keys(user)  
  let entries = Object.entries(user);
for (let [key, value] of entries) {
  console.log(key, value)
}

// console.log(entries)
