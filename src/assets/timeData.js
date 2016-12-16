
var start = new Date(2015, 0, 1)
var end = new Date(2015, 10, 1)
var data1 = []
var data2 = []
while (start < end) {
  var newDate = start.setDate(start.getDate() + 1)
  var random1 = Math.random() * 6 + 4
  var random2 = Math.random() * 2.5
  data1.push([newDate, random1])
  data2.push([newDate, random2])
  start = new Date(newDate)
}

export { data1, data2 }
