'use strict'

// LEVEL 1
const challenge = '30 Days Of JavaScript'
const faang = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const sentence = 'You cannot end a sentence with because because because is a conjunction'

const datatypes = () => {
 console.log(challenge)
 console.log(challenge.length)
 console.log(challenge.toUpperCase())
 console.log(challenge.toLowerCase())
 console.log(challenge.substring(3,7))
 console.log(challenge.substring(challenge.indexOf('D')))
 console.log(challenge.includes('Script'))
 console.log(challenge.split())
 console.log(challenge.split(''))
 console.log(faang.split(','))
 console.log(challenge.replace('JavaScript','Python'))
 console.log(challenge.charAt(15))
 console.log(challenge.charCodeAt(challenge.indexOf('J')))
 console.log(challenge.indexOf('a'))
 console.log(challenge.lastIndexOf('a'))
 console.log(sentence.indexOf('because'))
 console.log(sentence.lastIndexOf('because'))
 console.log(sentence.search('because'))
 console.log(challenge.trim())
 console.log(challenge.startsWith('3'))
 console.log(challenge.endsWith('t'))
 console.log(challenge.match('a'))
 console.log(challenge.repeat(2))
}

export {datatypes}