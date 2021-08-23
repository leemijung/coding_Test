function solution(s) {
    var answer = 0;
    var count=1;
    var result_count=[];
    
    for(let i=1; i<=s.length; i++){
        var result="";
        for(let j=0; j<s.length; j=j+i){
            var str=s.substr(j, i);
            var nextstr=s.substr(j+i, i);
            
            if(str===nextstr){
                count++;
            }
            else{
                if(count===1){
                    result=result+str;
                }
                else{
                    result=result+count+str;
                }
                count=1;
            }
        }
        result_count.push(result.length);
    }
    

    answer=Math.min.apply(null, result_count);

    
    return answer;
}

//<풀이>

//count: 반복되는 문자열의 개수를 측정하는 변수, 중복이 되면 2부터 시작하기 때문에 처음에는 1로 초기화한다.
//result_count: 도출되는 각 result 문자열의 길이를 배열에 저장한다.

//전달받은 s 길이만큼 for문을 도는데, 1부터 s길이로 설정한다.
//이는 분리할 단어 단위의 길이가 된다. (1개 단위, 2개 단위 등)
//첫번째 for문(i)은 쪼갤 단어의 단위길이 이므로 result를 항상 초기화한다.

//두번째 for문(j)은 0부터 s길이-1 만큼 돌면서 i만큼 증가한다.
//str에 현재 인덱스부터 i만큼의 길이를 substr를 이용해 분리한다.
//  substr(분리시작할 인덱스, 분리할 길이)
//  substring(분리시작할 인덱스, 분리종료할 위치 바로전 인덱스)
//nextstr에 이미 분리한 str 다음 인덱스인 j+i부터 i만큼의 길이를 substr를 이용해 분리한다.
//즉 두번째 for문을 돌면서 문자열 2개를 설정하고 비교하면서 진행된다.

//만약 첫번째로 자른 문자열(str)과 두번째로 자른 문자열(nextstr)이 같다면
//중복되는 문자열이기 때문에
//count를 1 증가시키고 다시 for문을 실행한다.

//만약 첫번째로 자른 문자열(str)과 두번째로 자른 문자열(nextstr)이 같지 않다면
//중복이 끝난 문자열이기 때문에
//count를 확인한다.
//count가 1이라면 이전에 중복된 것이 아예 없다는것이기 때문에
//result 문자열에 현재의 문자열(str)만 더한다.
//count가 1이 아니라면 이전에 중복된 것이 count 수만큼 존재하기 때문에
//result 문자열에 count+str 한다.

//다른 문자열의 중복도 확인해야 하기 때문에
//count는 현재의 문자열인 str이 바뀔때마다 1로 초기화한다.

//result_count 배열에 현재 단위로 쪼개 중복을 확인한 문자열 (result)의 길이를 저장한다.
//이를 단위의 for문(i)만큼 실행하면서 result_count 배열에 각 길이가 저장된다.

//이중 가장 최소값의 요소를 반환하면 된다.
//Math.min.apply(null, 조사할 배열이름)
//최대값: Math.max.apply(null, 조사할 배열이름)