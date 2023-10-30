function solution(s1, s2) {
    var answer = 0;
   const dupArr = s1.filter(word => s2.includes(word));
    console.log(dupArr);
    answer = dupArr.length;
    return answer;
}