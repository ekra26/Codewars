function solution(str, ending){
  let strEnding = str.substr(-ending.length,ending.length)
  return strEnding === ending ? true : false
}
