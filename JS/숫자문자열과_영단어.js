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