function answerQuestionNested(input) {
  let result = ''

  let times = 0
  let collected = ''
  let isCollecting = false;

  [...input].forEach(letter => {
    if ("0123456789".includes(letter)) {
      times = parseInt(letter, 10)
    } else if (letter === '[') {
      isCollecting = true
    } else if (letter === ']') {
      isCollecting = false
      for (let i = 0; i < times; i++) {
        result += collected
      }
    } else if (isCollecting) {
      collected += letter
    } else {
      result += letter
    }
  })

  return result
}

console.log('s = "3[a]2[bc]", return "aaabcbc".')
console.log(answerQuestionNested("3[a]2[bc]"))
console.log('s = "2[abc]3[cd]ef", return "abcabccdcdcdef".')
console.log(answerQuestionNested("2[abc]3[cd]ef"))
