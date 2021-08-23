function solution(s)
{    
    let stack=[];
    
    for(let i=0; i<s.length; i++){
        if(stack.length===0||stack[stack.length-1]!==s[i]){
            stack.push(s[i]);
        }
        else stack.pop();
    }
    
    if(stack.length===0) return 1;
    else return 0;

}

//<풀이>

//스택을 이용함

//push
//스택이 비면 다시 채워넣고,
//넣게될 s가 스택의 마지막요소와 같지않다면 또 다시 채워넣는다
//pop
//둘다 아니라면, 스택에서 뺀다.

//스택의 길이가 0이라면 모두 제거했으므로 1반환
//스택의 길이가 0이 아니라면 0반환