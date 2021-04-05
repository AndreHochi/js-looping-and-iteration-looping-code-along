// Code your solutions in this file
function writeCards(list) {
    let array = []
    for (let i = 0; i < list.length; i++) {
        array.push(`Thank you, ${list[i]}, for the wonderful surprise gift!`);
    }
    return array
}

function countDown(num) {
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
}