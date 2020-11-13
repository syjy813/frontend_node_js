function print() {
    let count = 1;
    function driver() {
        console.log(`${count++}번 호출됨`)
    }
    return driver
}

const run = print()
run()
run()
run()
run()
run()
