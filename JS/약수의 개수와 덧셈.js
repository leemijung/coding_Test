function solution(left, right) {
    var answer = 0;
    let divisor=[];
    let sign=[];
    
    for(let i=left; i<=right; i++){
        divisor=[];
        for(let j=1; j<=i; j++){
            if(i%j===0){
                divisor.push(j);
            }
        }
        if(divisor.length%2===0) sign.push(0);
        else sign.push(1);
    }
    
    for(let i=left; i<=right; i++){
        if(sign[i-left]===0){
            answer+=i;
        }
        else answer-=i;
    }
    
    return answer;
}

//<풀이>

//divisor: 각 숫자의 약수를 담기위한 배열
//sign: 각 숫자의 부호를 저장하기 위한 배열

//left, right를 for문을 돌면서
//각 숫자의 부호를 정한다
//각 숫자마다 갱신되기 때문에 divisor은 항상 초기화한다
//약수는 1부터 자기자신의 숫자 중 나머지가 0인 것이기 때문에
//%을 사용해서 divisor에 push한다

//divisor의 길이가 2의 약수라면 짝수이기 때문에 sign에 0을 저장한다
//			    홀수라면 sign에 1을 저장한다

//각 숫자를 for문으로 돌면서
//부호 배열이 0이라면 짝수이므로 더하고
//부호 배열이 1이라면 홀수이므로 뺀다
//sign[i-left] 는 부호배열의 인덱스는 0부터 시작하기 때문에 변형한다