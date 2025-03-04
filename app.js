let users = [
    {
        username: `Mike`,
        email: `mike@gmail.com`,
        password: `test123`,
        subscriptionStatus: `vip`,
        userid: `Mike123`,
        lessonsCompleted: [0, 1, 2],
    },
    {
        username: `Mitri`,
        email: `mitri@gmail.com`,
        password: `test123`,
        subscriptionStatus: `vip`,
        userid: `mitri123`,
        lessonsCompleted: [0, 1, 2],
    },
    {
        username: `zen`,
        email: `zen@gmail.com`,
        password: `test123`,
        subscriptionStatus: `vip`,
        userid: `zen123`,
        lessonsCompleted: [0, 1, 2],
    }
]
function login(email, password){
    for (let i = 0; i < users.length; ++i){
        if (users[i].email === email){
            console.log(users[i]);
            if (users[i].password === password){
                console.log(`log the user in`);
            }
            else {
                console.log(`password is incorrect- try again`)
            }
            return
        }
    }
    console.log(`cant find a matching email- try again`)
}
login(`mike@gmail.com`, `test123`)




function register (
    name,
    email,
    password,
    subscriptionStatus,
    userId,
    lessonsCompleted
){
  
    let user = {
        username : name,
        email: email,
        password: password,
        subscriptionStatus,
        userId,
        lessonsCompleted: lessonsCompleted
    }
    users.push(user)
}
register(`zen`,
     `zen@gmail.com`,
      `test123`,
       `vip`,
        `zen123`,
         [0, 1, 2]);
         
         console.log(users);