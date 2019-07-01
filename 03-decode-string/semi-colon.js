// just a file to show what's going on when the semi-colon is ommitted after
// writing `isCollecting = arrayExpression`. The opening bracket at the
// beginning of the forEach loop is assuming the line before it was an array
// expression and things crash. If you look at the original solution file
// you'll see there's just one semi-colon used, at the same point, and it
// turns out it's absolutely necessary!

function answerQuestionNested(input) {
  let result = ''

  let arrayExpression = [['a', 'b', 'c']]
  let indexAccess = 0

  let times = 0
  let collected = ''
  let isCollecting = false
  isCollecting = arrayExpression

  [indexAccess].forEach(letter => {
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
