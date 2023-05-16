function solution(n) {
    var answer = 0;
    let divisors = [];
    let chunk = [];
    
  for (let i = 1; i <= n; i++) {
        for(let k=1; k <= i; k++){
            if (i % k === 0) {
                divisors.push(k);
                }   
        }
     
      if(divisors.length >= 3){
          chunk.push(divisors);
      }
        divisors = [];
  }
        console.log(chunk)
        answer = chunk.length;
        return answer;
    }

