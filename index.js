// Code your solutions in this file
function writeCards(name,eventName){
    const messages = [];
    for (let i =0;i<name.length;i++){
        let message = `Thank you, ${name[i]}, for the wonderful ${eventName} gift!`;
        messages.push(message)
        console.log(messages)
    }
    return messages
}
const names = ["Guadalupe","Ollie","Aki"]
const eventName = "surprise"
writeCards(names,eventName)

function countDown(num){
    let i = num
    while (i > -1){
        console.log(i)
        i--
    }
}
countDown(10)