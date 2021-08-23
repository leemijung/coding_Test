function solution(n, words) {
    var answer = [0, 0];
    var already=[];
    var lastword="";
    
    for(let i=0; i<words.length; i++){
        if(i===0){
            already.push(words[i]);
            var temp=words[i].split("");
            lastword=temp[temp.length-1];
        }
        else{
            var temp=words[i].split("");
            if(temp[0]===lastword){
                lastword=temp[temp.length-1]; 
                if(!already.includes(words[i])){
                    already.push(words[i]);
                }
                else{
                    answer[0]=i%n+1;
                    answer[1]=parseInt(i/n)+1;
                    return answer;
                }
            }
            else{
                answer[0]=i%n+1;
                answer[1]=parseInt(i/n)+1;
                return answer;
            }
        }
    }

    return answer;
}

//<풀이>

//answer: 정상으로 끝말잇기가 마무리되면 [0, 0] 반환
//already: 언급된 단어를 저장하는 배열
//lastword: 현재 언급되는 단어의 가장 마지막 문자열 ("word" -> "d")

//주어진 단어가 들어있는 word의 길이만큼 for문을 돌면서
//i가 0인 첫번째 단어는 무조건 already 배열에 저장한다.
//temp로 word 문자열을 하나씩 쪼갠 문자열들을 저장하고
//그중 가장 마지막 요소를 lastword에 저장한다.

//만약 i이 0이 아니라면
//1. 현재 언급하고 있는 단어의 첫번째 요소가 지난단어의 가장 마지막 요소와 같은지 확인
//2. 이미 이전에 언급된 단어인지 아닌지 확인

//두가지의 조건을 검사해야 한다.

//만약 포함되지 않으면 already에 push하고
//만약 포함된다면
//answer의 첫번째 요소는 틀린사람의 번호,
//answer의 두번째 요소는 틀린사람이 자신의 몇번째 차례에 탈락되는지,

//만약 현재단어의 첫번째요소와 이전단어의 마지막요소가 같지 않더라도
//answer을 반환한다.

//정상적으로 끝말잇기를 마치면 for문을 빠져나와 처음 초기화한 그대로
//[0, 0]을 반환한다.