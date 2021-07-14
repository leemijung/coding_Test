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