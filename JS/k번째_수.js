function solution(array, commands) {
    let result=[];
    let tmp=[];
    
    for(let m=0; m<commands.length; m++){
        tmp.length=0;
        for(let i=commands[m][0]; i<=commands[m][1]; i++){
            tmp.push(array[i-1]);
        }
        tmp.sort();
        for(let j=0; j<tmp.length; j++){
            if(j+1===commands[m][2]){
                result.push(tmp[j]);
            }
        }
    }

    return result;
}