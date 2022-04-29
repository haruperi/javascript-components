/**************************** Level 1 *****************************/
const dog = {}

const objects1 = () => {
    console.log(dog)
    dog.name = 'Bull Dog'
    dog.legs = 4
    dog.color = 'brown'
    dog.age = 3
    dog.bark = function () {
        return 'Woof woof'
    }
    console.log(dog.name)
    console.log(dog.legs)
    console.log(dog.color)
    console.log(dog.age)
    console.log(dog.bark())

    dog.breed = 'Chiwawa'
    dog.getDogInfo = function () {
        return this
    }

    console.log(dog.breed)
    console.log(dog.getDogInfo())

}


/**************************** Level 2 *****************************/
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

const mostSkills = (users) => {
    let mostSkills = 0
    let mostSkilledUser = ''

    for (let user in users) {
        if (users[user].skills.length > mostSkills) {
            mostSkilledUser = user
            mostSkills = users[user].skills.length
        }
    }

    return mostSkilledUser
}

const loggedInUsers = (users) => {
    let loggedIn = 0

    for (let user in users) {
        if (users[user].isLoggedIn)
            loggedIn++
    }

    return loggedIn
}

const moreThanEqual50pnts = (users) => {
    let gt50 = 0
    for (let user in users) {
        if (users[user].points >= 50)
            gt50++
    }

    return gt50
}

const mernStack = (users) => {
    const mernUsers = []

    for (let user in users) {
        const skills = users[user].skills
        if (skills.includes('MongoDB') && skills.includes('Express') && skills.includes('React') && skills.includes('Node'))
            mernUsers.push(user)
    }

    return mernUsers
}

const addUsers = (users) => {
    const usersModified = {...users}
    usersModified.Rufaro = {
        email: 'rufaro@rufaro.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 34,
        isLoggedIn: true,
        points: 90
    }

    return usersModified
}

const objects2 = () => {
    console.log(mostSkills(users))
    console.log(loggedInUsers(users))
    console.log(moreThanEqual50pnts(users))
    console.log(mernStack(users))
    console.log(addUsers(users))
    console.log(Object.keys(users))
    console.log(Object.values(users))

}


/**************************** Level 3 *****************************/
const users3 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];
const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            {userId: 'fg12cy', rate: 5},
            {userId: 'zwf8md', rate: 4.5}
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{userId: 'fg12cy', rate: 5}],
        likes: ['fg12cy']
    }
]

const personAccount = {
    firstName: '',
    lastName: '',
    incomes: 0,
    expenses: 0,

    totalIncome() {
    },
    totalExpense() {
    },
    accountInfo() {
    },
    addIncome() {
    },
    addExpense() {
    },
    accountBalance() {
    }
}

const signUp = (newUser) => {
    let userExists = false
    users3.forEach(user => {
        if (user.username === newUser.username)
            userExists = true
    })

    if (userExists)
        return 'user already has an account.'

    users3.push(newUser)

    return users3
}

const signIn = (username, password) => {

    for (let user of users3) {
        if (user.username === username && user.password === password)
            return 'Logged in'
    }
    return 'Username or password wrong'
}

const rateProduct = (prodId, rating) => {
    for (let product of products) {
        if (product._id === prodId) {
            product.ratings.push(rating)
            return product
        }
    }
    return 'Error Rating Product'
}

const averageRating = (prodId) => {
    for (let product of products) {
        if (product._id === prodId) {
            return (product.ratings.reduce((sum, rating) => sum.rate + rating.rate)) / product.ratings.length
        }
    }
    return 0
}

const likeProduct = (prodId, userId) => {
    for (let product of products) {
        if (product._id === prodId) {
            const index = product.likes.indexOf(userId)
            index === -1 ? product.likes.push(userId) : product.likes.splice(index, 1)
            return product.likes.length + " Likes"
        }
    }
}

const objects3 = () => {
    console.log(signUp({
        _id: 'zwf9kl',
        username: 'Rufaro',
        email: 'rufaro@rufaro.com',
        password: '123',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },))

    console.log(signIn("Rufaro", '123'))
    console.log(rateProduct('aegfal', {userId: 'fg12cy', rate: 3.5}))
    console.log(averageRating('eedfcf'))
    console.log(likeProduct('aegfal', 'fg12cy'))
}
export {objects3}



