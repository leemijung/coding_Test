function solution(lottos, win_nums) {
    var answer = [0,0];
    let zero_count=0;
    let win_count=0;
    
    for(let i=0; i<lottos.length; i++){
        if(lottos[i]===0){
            zero_count++;
            continue;
        }
        else{
            for(let j=0; j<win_nums.length; j++){
                if(lottos[i]===win_nums[j]){
                    win_count++;
                    win_nums.splice(j, 1);
                }
            }
        }
    }

    answer[0]=win_count+zero_count;
    answer[1]=win_count;        
    
    for(let i=0; i<2; i++){
        if(answer[i]==6) answer[i]=1;
        else if(answer[i]==5) answer[i]=2;
        else if(answer[i]==4) answer[i]=3;
        else if(answer[i]==3) answer[i]=4;
        else if(answer[i]==2) answer[i]=5;
        else answer[i]=6;
    }
    
    return answer;
}

//<풀이>

//zero_count : lottos 배열인자 중 0의 수
//win_count : 맞춘 로또 번호 수

//lottos 배열에서 0이면 zero_count 1증가
//	           0이 아니면 win_nums의 인자들과 비교해서 같은지 확인한다.
//만약 같다면 (로또 번호를 맞춘 경우)
//win_count 1증가 시키고 win_nums 해당 인자를 삭제한다.

//answer[0] : 가능한 최고 순위
//answer[1] : 가능한 최저 순위



//다른 풀이
function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}

//forEach - 해당 배열의 모든 인자에 접근해서 반환
//filter - 조건에 참인 경우의 배열 인자에만 접근해서 반환

//!0이 true 임을 이용
//v가 0이면 -> !v는 1이므로 '참'
