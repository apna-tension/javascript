// oobject oriented programming concept in javascript
// it is a programming paradign means its a style of writing code


// Object :- Collection of properties and methods
// --object literal
// --Prototypes
// --Classes
// --instanceof(new, this)


const user = {
    userName: "aminul",
    loginCount: 5,
    signedIn: true,
    mail: "aminul@user.com",
    getUserDetails : () => {
        console.log("userName : ", user.userName);
        console.log("loginCount : ", user.loginCount);
        console.log("SignedIn : ", user.signedIn);
        console.log("mail : ", user.mail);
    }
}

// console.log(user.userName);
const [userName , name] = user;
console.log(user);

