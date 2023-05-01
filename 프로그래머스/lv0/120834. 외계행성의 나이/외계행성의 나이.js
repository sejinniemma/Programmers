function solution(age) {
    var answer = '';
    const arr = [];
    const alpabet = ['a','b','c','d','e','f','g','h','i','j'];

    for(let i=0; i < age.toString().length; i++){
        answer += alpabet[age.toString()[i]];
    }
    return answer;
}

