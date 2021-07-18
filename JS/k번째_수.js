function solution(array, commands) {
    let result=[];
    let tmp=[];
    
    for(let m=0; m<commands.length; m++){
        tmp.length=0;
        for(let i=commands[m][0]; i<=commands[m][1]; i++){
            tmp.push(array[i-1]);
        }
        tmp.sort((a, b)=>a-b);
        for(let j=0; j<tmp.length; j++){
            if(j+1===commands[m][2]){
                result.push(tmp[j]);
            }
        }
    }

    return result;
}

//<풀이>

//sort( )
//인자를 넣지 않으면
//문자열로 오름차순 정렬하게 된다.
//"10"이 "2"보다 앞 숫자로 인식된다.
// => js에서 함수기능을 한다.

//a-b가 0보다 작으면, b가 더 큰 수, b가 뒤에 위치
//a-b가 0보다 크면,   a가 더 큰 수, a가 뒤에 
