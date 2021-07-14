function solution(board, moves) {
    let answer = 0;
    let box=[];
    let tmp=0;
    
    for(let i=0; i<moves.length; i++){
        for(let j=0; j<board.length; j++){
            if(board[j][moves[i]-1]!==0){
                if(board[j][moves[i]-1]===tmp){
                    answer+=2;
                    if(box.length>=1){
                        box.pop();
                        tmp=box[box.length-1];
                    }
                    else{
                        tmp=0;
                    }
                }
                else{
                    box.push(board[j][moves[i]-1]);
                    tmp=board[j][moves[i]-1];
                }
                board[j][moves[i] - 1] = 0;
                break;
            }
        }
    }
    
    
    return answer;
}


//<풀이>

//이중 for문 사용해서 moves 수만큼 i증가, 인형이 존재하는 열까지 j증가

//크레인이 내려간 위치에 인형이 존재한다면 (0이 아님)
//box의 제일 위에 있는 인형인 tmp과 비교한다.

//현재 크레인이 잡은 인형과 tmp이 같으면
//터지는 인형이 2개 증가

//box 내 인형이 존재한다면, 제일 위에 위치한 인형을 pop하고 tmp은 바로 아래 인형
//box 내 인형이 없다면, pop 필요없고 tmp는 0

//현재 크레인이 잡은 인형과 tmp이 같지 않다면
//box에 push, tmp는 push된 인형

//board에서 크레인으로 잡은 인형의 위치는 0으로 변경
