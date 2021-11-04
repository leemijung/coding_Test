function solution(n, computers) {
    var answer = 0;

    let tmp = new Array(n).fill(false)
    function dfs(num){  // 재귀함수
        tmp[num] = true;  // 방문체크
        for(let i=0; i<n; i++){
            if(tmp[i]==false && computers[num][i]===1){
            // 방문하지 않았고, 연결되어 있다면
                dfs(i);  // 재귀적으로 탐색
            }    
        }
    }

    for(let j=0; j<n; j++){  // 컴퓨터 갯수만큼 탐색
        if(tmp[j]==false){  // 방문을 하지 않았다면
            dfs(j);  // 함수 실행
            answer++;
        }
    }
    
    return answer

}

//<풀이>

//answer: 네트워크 개수
//tmp: 방문체크할 배열 선언(처음에는 모두 비방문이므로 false)
//컴퓨터 개수(n)만큼 for문을 돌면서 검사한다
//해당 컴퓨터의 tmp가 false라면 방문해야하므로 dfs함수 실행한다
//이때 네트워크가 하나 생기기 시작하므로 count++

//dfs 함수내
//재귀함수로 탐색을 한다
//tmp배열의 false을 true로 변경한다(현재 방문했으므로)
//컴퓨터 수만큼 for문 돌면서 검사한다
//만약 타컴퓨터들이 tmp가 false(미방문)이고, 검사중인 컴퓨터 num과의 연결이 1이라면
//연결되어 있는 네트워크 일부이기 때문에 해당 컴퓨터에 대해서도 다시 dfs검사를 진행한다(재귀함수)

//만약 이미 방문한 컴퓨터이거나 연결되어 있지 않다면 dfs함수를 탈출한다
//한번의 dfs함수탈출이 발생하면 네트워크가 끊긴것으로 하나의 선이 완성된 것이다
//count++