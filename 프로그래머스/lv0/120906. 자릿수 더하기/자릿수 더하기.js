function solution(n) {
    var answer = 0;
    const newString = n.toString()

    for(let i = 0; i < newString.length; i++){
        answer += Number(newString[i])
    }
    return answer;
}