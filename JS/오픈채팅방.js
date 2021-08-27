function solution(record) {
  const answer = [];
  const map = new Map();
  for (let i = 0; i < record.length; i++) {
    const target = record[i].split(" ");
    if (target[0] === "Enter" || target[0] === "Change") {
      map.set(target[1], target[2]);
    }
  }
  for (let i = 0; i < record.length; i++) {
    const target = record[i].split(" ");
    if (target[0] === "Enter") {
      const string = map.get(target[1]) + "님이 들어왔습니다.";
      answer.push(string);
    } else if (target[0] === "Leave") {
      const string = map.get(target[1]) + "님이 나갔습니다.";
      answer.push(string);
    }
  }
  return answer;
}

//<풀이>

//answer: 마지막에 반환할 전체 문자열 배열 선언
//map: Map을 활용해 key값을 가지고 접근할 수 있는 배열 선언

//전달받은 record의 길이만큼 for문을 돌면서
//split(" ")으로 각 문장들의 요소들을 " "(공백) 기준으로 분리해서 target에 저장한다
//"Enter uid1234 Muzi" -> "Enter", "uid1234", "Muzi"
//모든 문자열 문장들을 3부분으로 나눠지게 되고
//첫번째 요소인 target[0]부분에 Enter, Change, Leave가 나온다
//만약 Enter이나 또는 Change라면
//Map으로 정의된 map 배열에 set메서드를 사용해서 target[1]을 key값으로 target[2]를 저장한다
//모든 문장들을 돌면서 각 유저id를 key값으로
//들어오거나 변경한 닉네임들이 저장된다

//이제 들어오거나 변경된 사항들이 마무리되어 현재상태를 출력해야 한다
//record의 길이만큼 for문을 돌면서
//각 문장들을 마찬가지로 3부분으로 나눈다
//만약 target[0]이 Enter라면
//target[1] key값에 맞는 내용을 get메서드로 가져와 "들어왔습니다"라고 문자열저장하고
//최종배열인 answer에 push한다
//만약 target[0]이 Leave라면
//target[1] key값에 맞는 내용을 get메서드로 가져와 "나갔습니다"라고 문자열저장하고
//최종배열인 answer에 push한다
