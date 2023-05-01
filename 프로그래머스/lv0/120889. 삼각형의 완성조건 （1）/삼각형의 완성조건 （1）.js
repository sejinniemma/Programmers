function solution(sides) {
    var answer = 0;
    const max = Math.max(...sides);
    
   const sum = sides.reduce((pre,next) => pre+next,0);
    sum - max > max ? answer = 1 : answer = 2;
    return answer;
}
