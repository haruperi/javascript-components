const operators1 = () => {
    const firstName = 'Rufaro'
    const lastName = 'Haruperi'
    const country = 'Zimbabwe'
    const city = 'Harare'
    const age = 34
    let isMarried = true
    const year = 2022

    console.log(typeof firstName)
    console.log(typeof lastName)
    console.log(typeof country)
    console.log(typeof city)
    console.log(typeof age)
    console.log(typeof isMarried)
    console.log(typeof year)

    console.log(new Date().getFullYear())
    console.log(new Date().getMonth())
    console.log(new Date().getDay())
    console.log(new Date().getHours())
    console.log(new Date().getMinutes())
    console.log(new Date().getTime())
}

const operators2 = () => {
    const a = 5
    const b = 20
    const c = 7
    const h = 10
    console.log("Area: " + 0.5 * b * h)
    console.log("Perimeter: " + (a + b + c))
}

const operators3 = () => {
    console.log(new Date().getFullYear() + '-' + new Date().getUTCMonth() + '-' + new Date().getDay() + '  ' + new Date().getHours() + ':' + new Date().getMinutes())
}

