function solution(absolutes, signs) {
    var answer = 0;
    
    for(let i=0; i<signs.length; i++){
        if(signs[i]===false){
            absolutes[i]*=-1;
        }
    }
    
    for(let i=0; i<absolutes.length; i++){
        answer+=absolutes[i];
    }
    
    return answer;
}

//<풀이>

//signs 배열중 false의 요소는
//absolutes 값에 -1를 곱해서 음수로 만든다

//absolutes 배열의 모든 값을 더해서 answer에 저장