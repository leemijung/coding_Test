function solution(s) {
    var answer = '';
    
    let number = s.split(' ');
    let max = Math.max.apply(null, number);
    let min = Math.min.apply(null, number);
    answer = min + ' ' + max;
    
    return answer;
}

//<풀이>

//문자열 s를 공백으로 분리
//max, min을 이용해 최대값, 최소값 구함
//공백으로 연결