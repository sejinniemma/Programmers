function solution(numbers, direction) {
    var answer = [];
    if (direction === "right"){  
        answer[0] = numbers[numbers.length - 1]
        for(let i=1; i < numbers.length; i++){
            answer[i] = (numbers[i-1]); 
        } 
    } else {
        // answer[answer.length - 1] = numbers[0]
         for(let i=0; i < numbers.length; i++){
            answer[i] = numbers[i+1];             
         }
       answer[answer.length - 1] = numbers[0]
    } 
    return answer;
}