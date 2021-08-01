function solution(s){
    let answer = true;
    let result =[];

    let p_count=0;
    let y_count=0;
    
    for (let i = 0; i < s.length; i++) {
        result[i]=(s.charAt(i));
    }
    
    result.forEach(result_string=>{
        if(result_string.toUpperCase()==='P'){
            p_count+=1;
            
        }
        else if(result_string.toUpperCase()==='Y'){
            y_count+=1;
            
        }
    });
    
    if(p_count===y_count){
        answer=true;
    }
    else{
        answer=false; 
    } 

    
    return answer;
}

//<풀이>

//answer : true / false
//p 또는 y 가 없더라고 answer는 true
//result : 문자열 s를 쪼갠 요소를 담을 배열

//문자열 s 길이 만큼 for문을 돌면서
//charAt() : 문자열을 하나씩 분리
//ex) 'asbdeSS' -> 'a', 's', 'b', 'd', 'e', 'S', 'S'
//result 배열의 모든 요소에 접근하면서
//대문자로 통일시키고 'P', 'Y' 와 같은지 확인
//같다면, 각 count를 1 증가

//'p' 횟수와 'y' 횟수가 같다면 -> true
//다르다면 -> false



//<다른풀이>

function numPY(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}
