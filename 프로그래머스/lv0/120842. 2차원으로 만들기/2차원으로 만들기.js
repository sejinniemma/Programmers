function solution(num_list, n) {
    var answer = [];
    let arr  = [];
    num_list.forEach(num => {
        arr.push(num);
        if(arr.length === n){
            answer.push(arr);
            arr = [];
        }
    })
    return answer;
}