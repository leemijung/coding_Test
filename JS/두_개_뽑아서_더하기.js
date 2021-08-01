function solution(numbers) {
    var answer = [];
    let sum=0;
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            sum=numbers[i]+numbers[j];
            if(answer.includes(sum)===false)
                answer.push(sum);
        }
    }
    answer.sort((a, b)=>a-b);
    
    return answer;
}

//<풀이>

//numbers 배열 요소를
//두자리의 덧셈으로 만들 수 있는 경우의 수를 이중for문으로 만든다

//만약 이미 answer 배열에 덧셈의 값이 있다면 (true)
//패스하고
//없다면 (false)
//answer 배열에 push한다

//sort 메소드를 이용해 오름차순으로 정렬한다