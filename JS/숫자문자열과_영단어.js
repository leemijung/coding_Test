function solution(s) {
    var answer = 0;
    
    s=s.replace(/zero/g, 0);
    s=s.replace(/one/g, 1);
    s=s.replace(/two/g, 2);
    s=s.replace(/three/g, 3);
    s=s.replace(/four/g, 4);
    s=s.replace(/five/g, 5);
    s=s.replace(/six/g, 6);
    s=s.replace(/seven/g, 7);
    s=s.replace(/eight/g, 8);
    s=s.replace(/nine/g, 9);
    
    answer=Number(s);
    
    return answer;
}

//<풀이>

//자바스크립트 replace(), Number()

//1. replace :
//	     기존 문자열을 새로운 문자열로 치환
//	     기존 문자열 입력시
//	     g (전체 매치) / i (대소문자 구분 제거)
//2. Number :
//	      문자열을 숫자로 변환


//다른 코드
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}

//<풀이>
//numbers 배열에 담겨있는 인자를 for문으로 돌면서
//만약 "one"이라는 string문자열을 "s"에서 발견하면,
//one을 기준으로 문자열을 split해서 그것을 인자로 하는 배열을 만든다. (arr)
//만약 s가 "1one2"라고 하면,
//split으로 나온 배열 arr에는 ["1", "2"]가 들어간다.
//arr배열을 join으로 합치는데, 구분자는 numbers 배열의 인덱스번호가 된다.
//one은 1 인덱스를 가지고 있으니, "1"과 "2"를 구분하는 숫자 1 과 함께 합쳐주면
//"112"가 된다.

//split():
//        해당 인자를 기준으로 문자열을 나눈다.
//join():
//        배열의 인자들을 연결하는데 join의 인자가 연결자 역할을 한다.
