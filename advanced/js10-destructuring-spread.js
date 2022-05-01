'use strict'

/******************* LEVEL 1 *******************************/

const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}
const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTML'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
]

const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
const [fin, est, sw, den, nor] = countries
const {perimeter} = rectangle


/******************* LEVEL 2 *******************************/
const [brook, Alex] = users
users.forEach(user => {
    if (user.skills.length < 2)
        console.log(user.name)
})

/******************* LEVEL 3 *******************************/
//const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
    //const [name, skills, [, , jsScore, reactScore]] = student
const students = [
        ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
        ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
    ]

const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            {skill: 'HTML', level: 10},
            {skill: 'CSS', level: 8},
            {skill: 'JS', level: 8},
            {skill: 'React', level: 9}
        ],
        backEnd: [
            {skill: 'Node', level: 7},
            {skill: 'GraphQL', level: 8},
        ],
        dataBase: [
            {skill: 'MongoDB', level: 7.5},
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}

const studentManipulations = (obj) => {
    const newStudent = {...obj}
    newStudent.skills.frontEnd.push({skill: 'Bootstrap', level: 8})
    newStudent.skills.backEnd.push({skill: 'Express', level: 9})
    newStudent.skills.dataBase.push({skill: 'SQL', level: 8})
    newStudent.skills.dataScience.push('SQL')

    return newStudent
}


const convertArrayToObject = (arr) => {
    return arr.map(item => {
        return {
            name: item[0],
            skills: item[1],
            scores: item[2]
        }
    })
}
console.log(convertArrayToObject(students))
console.log(studentManipulations(student))

//console.log(brook, Alex)