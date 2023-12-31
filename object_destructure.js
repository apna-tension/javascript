// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "yt65"
tinderUser.name = "jon"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Aminul",
            lastname: "Islam"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "github@gmail.com"
    },
    {
        id: 2,
        email: "github@gmail.com"
    },
    {
        id: 1,
        email: "github@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js",
    price: "00",
    courseInstructor: "github"
}

// course.courseInstructor

const {courseInstructor: instructor, coursename: courseName, price: coursePrice} = course

// console.log(courseInstructor);
console.log(instructor + " " + courseName + " " + coursePrice);

