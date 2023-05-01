function solution(n) {
    var answer = 0;
    let arr = [];
    let dup = [];
    
    for(let i = 0; i <= n; i++){
        if(n % i === 0){
            let 몫 = n / i;
            arr.push({몫,i})
            // if(몫 === i)[
            //     dup.push({몫,i})
            // ]
        }
    }
    answer =  arr.length
    return answer;
}