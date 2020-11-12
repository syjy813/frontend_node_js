const name1 = 10;
let name2 = 10;
var name3 = 12;

const obj = {
    asd:"asd",
    name:"name",
    haejun:"haejun",
    arr: [1, 2, 3]
}

function test(a, b = 3) {
    return `${a}와 ${b}의 합은 ${a+b}입니다.`
}
const resultMessage = test(1);
console.log(resultMessage)

const test2 = (a,b=5) => `${a}와${b}의 합은 ${a+b}입니다.`
console.log(test2(1))

const main = {
    say: function() {
        let name = '정해준'
        console.log(`제 이름은 ${name}입니다.`)
    }

    fn: () => {
        console.log(3+2);
    }
}

main.say()
main.fn