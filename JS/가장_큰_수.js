function solution(numbers) {
    var answer = '';
    
    answer=numbers.map(index=>index+'').sort((a, b)=>(b+a)-(a+b)).join('');
    if(answer[0]==='0'){
        answer='0';
    }
    return answer;
}

//<풀이>

//answer 문자열을 map을 이용해 모든 요소에 접근하면서 string 형으로 변환한다
//sort 메서드를 사용하는데
//'3', '30' 이 있으면, '330'과 '303'이 만들어진다
//큰수를 원하기 때문에 '330'이 되어야 한다
//a='3'과 b='30'이 들어왔을때, '3'이 먼저 오고 '30'이 나중에 오려면
//sort의 a-b가 음수여야 한다
//a-b<0 라면, b가 더 큰수이므로 b가 뒤에 오게 된다
//때문에 '30'이 뒤에 오게 된다
//a-b가 음수가 되려면
//(b+a)-(a+b)를 사용해야 한다

//'10', '2'가 있으면, '102'와 '210'이 만들어진다
//'210'이 되어야 하기 때문에 b='2'가 먼저와야 한다
//a-b가 양수가 되어야 한다
//양수가 되려면 (b+a)-(a+b)를 사용해야 한다

//정렬된 answer를 join을 이용해 합친다
//예외처리를 해야 한다
//만약 answer의 모든 요소가 '0'이라면 000..
//'0'으로 만들어준다