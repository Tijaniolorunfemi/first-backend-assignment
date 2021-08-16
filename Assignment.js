var names = ["femi", "mohammed", "promise", "ayo", "lawal" ];
const name = names.reduce(function(a, b) {
    return a.length <= b.length ? a : b;
  })
module.exports = name ;


const arr = ['femi', 'promise', 'ayo' , 'mohammed' , 'lawal' , 'fuad']
const leastWord = (first, second) => first.length <= second.length ? first : second
console.log(
  arr.reduce(leastWord)
)