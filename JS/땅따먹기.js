function solution(land) {
    var answer = 0;


    for(let i=1; i<land.length; i++){
        land[i][0]+=Math.max(land[i-1][1], land[i-1][2], land[i-1][3]);
        land[i][1]+=Math.max(land[i-1][0], land[i-1][2], land[i-1][3]);
        land[i][2]+=Math.max(land[i-1][0], land[i-1][1], land[i-1][3]);
        land[i][3]+=Math.max(land[i-1][0], land[i-1][1], land[i-1][2]);
    }

    answer=Math.max(land[land.length-1][0], land[land.length-1][1], land[land.length-1][2], land[land.length-1][3]);
    
    return answer;
}

//<풀이>

//동적으로 프로그래밍 해야 한다
//첫번째 행부터 무조건 최대값을 고르면 최종적으로 오답이 나올 수도 있다

//우선 전달받은 2차원 land배열의 길이 (행 길이) 만큼 for문을 돈다
//인덱스는 1부터 마지막 배열 요소까지이다
//1번째 행을 계산하면서 동적으로 0번째 행의 값이 할당된다
//현재의 열 인덱스를 포함하지 않는, 다른 열의 값들 중 가장 큰 값을 계속 누적해서 더한다

//for문을 다 돌게되면, 마지막 행의 각 열에는 여러 경우 중 최대한 큰 값이 들어가있다
//그중 가장 최대값을 고르면 된다