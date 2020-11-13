function seyHelloTo(name) {
    const message = `Hello ${name}!`
    return function() {
        console.log(message)
    }
}

const hello = seyHelloTo('haejun')
hello()