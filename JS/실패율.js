function solution(N, stages) {
    let fail=[];
    let number=stages.length;
    
    for(let i=0; i<N; i++){
        let failRate=0;
        let failStages=stages.filter(x=>x==i+1).length;
        if(failStages==0){
            failRate=0;
        }
        else{
            failRate=failStages/number;
        }
        number-=failStages;
        fail.push({N: i+1, failRate: failRate});  
    }
    
    fail.sort((a, b)=> {
        if(a.failRate==b.failRate){
            return a.failRate-b.failRate;
        }
        else{
            return b.failRate-a.failRate;
        }
    });

    return fail.map(n=>n.N);
}

//<풀이>

//fail: 실패율(failRate)를 state로 매핑해서 저장할 배열
//stages는 사용자가 현재 멈춰있는 스테이지 번호이므로,
//stages 길이는 전체 사용자 수

//전체 스테이지 수(N)만큼 for문을 돌면서
//failStages를 구한다
//stages 배열요소에서 각 스테이지 인자(N 번호:1~N+1)별로 filter를 걸쳐
//현재 클리어하지 못한 stages별 길이를 저장한다 (failStages)

//failStage가 0이면, 클리어 하지 못한 stages 개수가 0이므로
//실패율(failRate)은 0이다
//failStage가 0이 아니면,
//스테이지에 도달했으나 아직 클리어하지 못한 플레이어 수 / 스테이어에 도달한 플레이어 수

//스테이어에 도달한 플레이어 수(number)는 for문을 돌면서
//이전 스테이지에서 클리어하지 못한 플레이어(failStage)를 뺀 나머지로 계산된다

//fail 배열에 스테이지 숫자와 실패율을 매핑해서 push한다

//만약 a와 b의 실패율이 같다면
//작은 번호의 스테이지가 먼저 와야하므로
//a.failRate-b.failRate를 반환한다

//fail 배열에서 매핑값 N의 요소로 반환한다
//N은 stages 숫자이다