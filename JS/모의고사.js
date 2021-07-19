function solution(answers) {
    let result = [0, 0, 0];
    
    let one = [1, 2, 3, 4, 5];
    let two = [2, 1, 2, 3, 2, 4, 2, 5];
    let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    for (let i = 0; i < answers.length; i++) {
        if (one[i % 5] === answers[i]) result[0]+=1;
        if (two[i % 8] === answers[i]) result[1]+=1;
        if (three[i % 10] === answers[i]) result[2]+=1;
    }
    let answer = [];
    let max = Math.max(...result);
    let count = 0;
    for (let i = 0; i < 3; i++) {
        if (max === result[i]) {
            answer[count] = i + 1;
            count++;
        }
    }
    
    return answer;
}

//<풀이>

//one, two, three의 답을 각 배열에 저장
//실제 답의 길이만큼 for문을 돌면서
//각 학생들의 답이 실제 답과 같다면, 해당 학생의 index의 result 배열 값을 1 증가

//result 배열 인자 3개중 가장 큰 수 추출 (max)
//result 배열 인자 3개중 max와 같은 인자값이 나오면
//해당 인덱스(i)에 1증가시킨 값을 answer 배열에 순서대로 넣는다
//학생의 번호로 return해야 하기 때문에 1증가시킨다
//(학생번호는 1부터 시작, 인덱스는 0부터 시작)