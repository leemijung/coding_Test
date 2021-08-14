function solution(n) {
    var answer = 0;
    let three = 0;
    let three_n=[];
    
    three=n.toString(3);
    
    for(let i=0; i<three.length; i++){
        three_n[i]=three.charAt(i);
    }
    for(let i=0; i<three_n.length/2; i++){
        let tmp=three_n[i];
        three_n[i]=three_n[three_n.length-1-i];
        three_n[three_n.length-1-i]=tmp;
    }
    three=three_n.join('');
    answer=parseInt(three, 3);
    return answer;
}

//<풀이>

//three: 3진수로 바꾼 값을 저장할 변수
//three_n: three 문자열을 쪼개 저장할 배열
//입력받은 n을 3진수로 바꿔서 three에 저장 -> 변환대상.toString(진수)

//three 길이만큼 for문을 돌면서 three 문자열을 쪼개 three_n에 저장

//three_n배열의 길이의 절반만큼 for문을 돌면서
//각 인자을 앞뒤로 뒤집는다

//위치를 뒤집은 채 저장된 three_n배열을 (join)으로 다시 합쳐서 three에 저장
//3진수 형태의 three를 10진수로 변환한다 -> parseInt(변환대상, 변환대상의 진수)