let users = [
{
    username: `Michael`,
    password: `test123`,
    email: `mpborer@gmail.com`,
    subscriptionStatus: `VIP`,
    githubID: `MPBorer`,
    lessonsCompleted: [0, 1],
},
{
    username: `Mitri`,
    password: `mitri123`,
    email: `Mitri@gmail.com`,
    subscriptionStatus: `VIP`,
    githubID: `Mitri000`,
    lessonsCompleted: [0, 1, 2, 3],
},
{
    username: `Zen`,
    password: `Zen123`,
    email: `zen@gmail.com`,
    subscriptionStatus: `VIP`,
    githubID: `Zen000`,
    lessonsCompleted: [0, 1, 2, 3],
},
]
 
function login(email, password) {
    for (let i = 0; i < users.length; ++i) {
         if (users[i] .email === email){
            console.log(users[i]);
            if (users[i] .password === password){
                console.log(`log the user in - the details are correct`);
            }
            else {
                console.log(`password is incorrect - Try Again`)
            }
            return;
   }
  }
  console.log(`could not find an email that matches`)
 } 
login(`borer@gmail.com`, `test123`)




function register(user){
    users.push(user);
}

register({
   username: `zen`,
   email: `zen@gmail.com`,
   password: `zen123`,
   subscriptionStatus:  `vip`,
   githubID: `Zen000`,
   lessonsCompleted: [0, 1, 2, 3]
});

console.log(users)