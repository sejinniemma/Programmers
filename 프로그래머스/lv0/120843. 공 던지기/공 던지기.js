function solution(numbers, k) {
    var answer = 0;
    let 짝수 = [];
    let 짝수무한반복 = [];
    let 홀수 = [];
    let 홀수무한반복 = [];
    // 짝수라면
    if(numbers.length % 2 === 0){
        numbers.forEach(num => {
            if(num % 2 !== 0){
                짝수.push(num);
            }
        })
 // 짝수안의 숫자들을 얼만큼 반복할 것인가.[1,3,5] 내용물이 3개면 4개 ,4개면 5개 -> 길이 + 1
 // 짝수 안의 내용물을 k 번 만큼 반복시켜 주어야 한다.
        for(let i=0; i < k + 1; i++){
            for(let p=0; p < 짝수.length; p++){
                짝수무한반복.push(짝수[p]);
            }
        }
         answer = 짝수무한반복[k-1];
    } else {
        // 홀수라면
        numbers.forEach(num => {
            if(num % 2 !== 0){
                홀수.push(num);
            }
        })
        
        numbers.forEach(num => {
            if(num % 2 === 0){
                홀수.push(num);
            }
        })
        
       for(let i =0; i < k + 1; i++){
           for(let p = 0; p < 홀수.length; p++){
               홀수무한반복.push(홀수[p]);
           }
       }
        answer = 홀수무한반복[k-1];
    }
    
    return answer;
}


// numbers의 마지막 번호가 홀수 인지 짝수인지 파악한다.

// 1,3,5,1,3,5,1,3,5 -> 짝수는 홀 홀 홀 홀
// 1,3,2,1,3,2 -> 홀수는 홀 짝 홀 짝