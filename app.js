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
    githubID: `Mitrirer`,
    lessonsCompleted: [0, 1, 2, 3],
},
{
    username: `Zen`,
    password: `mitri123`,
    email: `Mitri@gmail.com`,
    subscriptionStatus: `VIP`,
    githubID: `Mitrirer`,
    lessonsCompleted: [0, 1, 2, 3],
},
]
 
function login(email, password) {
    for (let i = 0; i < users.length; ++i){
        if (users [i].email === email) { 
            console.log(users[i]);
            if (users[i].password === password) {
                console.log (`log the user in - the details are correct`); 
            }
        }
    }
}
login(`mpborer@gmail.com`, `Test123`)