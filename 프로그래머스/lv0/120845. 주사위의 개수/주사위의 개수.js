function solution(box, n) {
    var answer = 0;
    const 가로 = Math.floor(box[0] / n)
    const 세로 = Math.floor(box[1] / n)
    const 높이 = Math.floor(box[2] / n)
    
    answer = 가로 * 세로 * 높이
    
    return answer;
}
// 가로:3개 ,세로:2개 , 높이:2개