const solution = (n, lost, reserve) => {
    let answer = n - lost.length;
    
    lost = lost.filter((lost_student) => {
        let r = reserve.findIndex(reverse_student => reverse_student === lost_student);
        if(r === -1) return lost_student;
        else {
            reserve.splice(r,1);
            answer+=1;
        }
    });
    
    
    lost.forEach(lostStudent => {
        let r = reserve.findIndex(reverse_student => lostStudent-reverse_student == 1 || lostStudent-reverse_student == -1);
        if(r !== -1) {
            reserve.splice(r,1);
            answer+=1;
        }
    });
    
    return answer;
};

//<풀이>

//여벌옷이 있고, 체육복을 도난당한 경우 (자신의 여벌옷 사용)
//여벌옷이 없고, 체육복을 도난당한 경우 (친구에게 빌림)
//구분해야 함


//초기 answer 를 (전체 학생수 - 체육복을 잃어버린 학생 수) 초기화
//체육수업을 참여할 수 있는 학생 수

//lost 배열의 요소 -> lost_student 선언
//reserve 배열의 요소 -> reserve_student 선언
//lost_student와 reserve_student이 같은 인자의 인덱스를 r에 저장
//만약 같은 인자가 없다면 r에는 -1이 저장

//r이 -1이라면, lost와 reserve 배열에 같은 인자가 없다는 뜻
//즉 체육복을 잃어버리고 여분이 있는 학생이 없다는 뜻
//남은 lost_student를 반환한다
//r이 -1이 아니라면, 체육복을 잃어버리고 여분이 있는 학생이 있으므로
//자기 자신이 빌려주면 된다
//따라서 reserve 배열에서는 해당 인덱스를 삭제
//answer 1증가


//lost 배열의 모든 인자를 돌면서
//lost_student와 reserve_student 차이가 1 또는 -1 이 아니라면
//r은 -1
//r이 -1이 아니라면
//바로 앞 또는 바로 뒤에 여벌 옷이 존재하므로
//reserve 배열에서는 해당 인덱스를 삭제
//answer 1증가