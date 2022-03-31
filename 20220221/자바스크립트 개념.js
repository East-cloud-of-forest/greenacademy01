
console.log("문제 1")
let name = "홍길동"
name = "성춘향"
console.log(name)

console.log("문제 2")
let a = ["Stydy", 3040, true, "False", 302.1]

for (let i in a) {
  console.log(typeof a[i])
}

console.log("문제 3")
console.log(String(123))
console.log(Number("123"))
console.log(Number("string"))

console.log("문제 4")
console.log(10/4)
console.log(10%2)
let sum = 1+2+3
console.log(sum)
console.log(852 % 5)

console.log("문제 5")
console.log("word" != "javascript")
console.log(0 == "")
console.log(0 === false)

console.log("문제 6")
let ten = 10
let twenty = 20
if (ten < twenty) {
  console.log(twenty)
}
let test = 65
if (test >= 70) {
  console.log("합격")
} else if (test >= 60 ) {
  console.log("보충수업")
} else {
  console.log("불합격")
}

console.log("문제 7")
let num = 160
console.log((num < 100) || (num >170))
console.log((num > 140) && (num < 180))
console.log(!(num < 120))

console.log("문제 8")
let i = 0
while (i < 10) {
  i++
  console.log(i)
}

console.log("문제 9")
for (let i = 1; i <= 10; i++) {
  console.log(i)
}
let numArray = [1,2,3,4]
for (let i of numArray) {
  console.log(i)
}
let floewrArray = ["해바라기", "튤립", "장미"]
for (let i in floewrArray) {
  console.log(floewrArray[i])
}


console.log("문제 10")
let j = 0

while(true) {
  j++
  console.log(j)
  if (j == 100) {
    break
  }
}

for (let i = 0; i <= 50; i++) {
  if (i % 3 == 0) {
    continue
  }
  console.log(i)
}