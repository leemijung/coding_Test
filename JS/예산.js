function solution(d, budget) {
    let answer = 0;
    let count=0;
    
    d.sort((a, b)=>a-b);
    for(let i=0; i<d.length; i++){
        answer+=d[i];
        count+=1;
        if(answer>budget){
            answer-=d[i];
            count-=1;
        }
    }

    return count;
}

//<풀이>

//부서별 신청 금액 배열 d를 오름차순으로 정렬한다
//d의 모든 요소를 for문으로 돌면서
//값을 더하고 카운드를 1 증가시킨다
//만약, 현재 증가한 금액으로 인해 전체 예산(budget)을 초과한다면
//다시 현재 금액을 감소시키고 카운드를 1 감소시킨다
//카운트 반환