function solution(progresses, speeds) {
    let answer = [];
    
    while(speeds.length > 0) { // 스피드 배열을 기준으로 0이되면 종료
        for(let i=0;i<speeds.length;i++) { // 각 스피드에 맞게 기능을 하나씩 추가
            progresses[i] += speeds[i];
        }
        let deploy_count = 0;
        while(progresses[0] >= 100) { // 100이넘으면 shift, 다음 기능이 100이 되어도 shift
            progresses.shift();
            speeds.shift();
            deploy_count++;
        }
        if(deploy_count > 0) { // 결과 배열에 넣어주기
            answer.push(deploy_count);
        }
    }
    return answer;
}

//<풀이>

//리턴할 answer 배열 선언
//speeds 길이가 0 이상이면 while문을 계속 실행한다

//speeds 배열의 요소개수만큼 for문을 돌면서
//각 스피드에 맞는 progresses에 더해진다
//배포할 변수를 0으로 초기화하고
//progresses의 첫번째 0 인덱스 요소값이 100 이상이 되면, 개발이 완료되었기 때문에
//progresses의 첫번째 요소와 speeds의 첫번째 요소를 삭제한다
//배포변수를 1증가시킨다
//이때 현재 기능의 개발이 100이 되서 삭제되어도, 또 다음 기능까지 검사하면서
//한 타임에 개발이 완료된 기능을 검사하게 된다

//만약 배포변수가 증가했다면 기록해야 하기 때문에
//answer 배열에 push해서 반환한다