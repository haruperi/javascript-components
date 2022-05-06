'use strict'

// LEVEL 1
const challenge = '30 Days Of JavaScript'
const faang = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const sentence = 'You cannot end a sentence with because because because is a conjunction'

const dataTypesLevel1 = () => {
    console.log(challenge)
    console.log(challenge.length)
    console.log(challenge.toUpperCase())
    console.log(challenge.toLowerCase())
    console.log(challenge.substring(3, 7))
    console.log(challenge.substring(3))
    console.log(challenge.includes('Script'))
    console.log(challenge.split(''))
    console.log(challenge.split(' '))
    console.log(faang.split(','))
    console.log(challenge.replace('JavaScript', 'Python'))
    console.log(challenge.charAt(15))
    console.log(challenge.charCodeAt(10))
    console.log(challenge.indexOf('a'))
    console.log(challenge.lastIndexOf('a'))
    console.log(sentence.indexOf('because'))
    console.log(sentence.lastIndexOf('because'))
    console.log(sentence.search('because'))
    console.log(challenge.trim())
    console.log(challenge.startsWith('30'))
    console.log(challenge.endsWith('t'))
    console.log(challenge.match('a'))
}


// LEVEL 2
const sentence2 = `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`
const sentence3 = `Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.`
const numPattern = `1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125`
const sent = 'You cannot end a sentence with because because because is a conjunction'

const dataTypesLevel2 = () => {
    console.log(`'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`)
    console.log(`Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.`)
    console.log(typeof 10 === typeof parseInt('10'))
    console.log(Math.floor(parseFloat('9.8')) === 10)
    console.log('python'.includes('on') && 'jargon'.includes('on'))
    console.log('I hope this course is not full of jargon'.includes('jargon'))
    console.log(Math.floor(Math.random() * 101))
    console.log(Math.floor(Math.random() * 50) + 50)
    console.log(Math.floor(Math.random() * 255))
    console.log('JavaScript'.charAt(Math.floor(Math.random() * 10)))
    console.log(numPattern)
    console.log(sent.substring(sent.indexOf('b'), sent.indexOf('b') + 23))
}


// LEVEL 3
const love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
const because = 'You cannot end a sentence with because because because is a conjunction'
const sentence4 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let salary = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month. or '


const dataTypesLevel3 = () => {
    console.log(love.match(/love/g))
    console.log((because.match(/because/g)).length)
    console.log(sentence4.replace(/[^a-zA-Z' '.,]/g, ''))
    console.log(salary.match(/\d+/g))
}

