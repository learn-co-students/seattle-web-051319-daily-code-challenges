function answerQuestionNested(input) {
 let result = ""
 let stack = []
 for (let i = 0; i < input.length; i++) {
   if (isNumber(input[i])) {
     stack.push(parseInt(input[i]))
   } else if (input[i] === "[") {
     stack.push(result)
     result = ""
   } else if (input[i] === "]") {
     let chunk = stack.pop()
     let count = stack.pop()
     for (let j = 0; j < count; j++) {
       chunk += result
     }
     result = chunk
   } else {
     result += input[i]
   }
 }
 return result;
}

function isNumber(input) {
 return !isNaN(input);
}

console.log('s = "3[a]2[bc]", return "aaabcbc".')
console.log(answerQuestionNested("3[a]2[bc]"))
console.log('s = "2[abc]3[cd]ef", return "abcabccdcdcdef".')
console.log(answerQuestionNested("2[abc]3[cd]ef"))
