function solution(n, arr1, arr2) {
    var answer = [];
    let result=[];
    let tempArr1=[];
    let tempArr2=[];
    
    for(let i=0; i<n; i++){
        let temp1="";
        let temp2="";
        var a1_s=arr1[i].toString(2);
        var a2_s=arr2[i].toString(2);
        
        
        for(let i=0; i<n-a1_s.length; i++){
            temp1+="0";
        }
        temp1+=a1_s;

        
        for(let i=0; i<n-a2_s.length; i++){
            temp2+="0";
        }
        temp2+=a2_s;

        tempArr1= temp1.split('');
        tempArr2= temp2.split('');
        
        for(let i=0; i<n; i++){
            if(tempArr1[i]===tempArr2[i]){
                if(tempArr1[i]==="0") answer.push(" ");
                else answer.push("#");
            }
            else answer.push("#");
        }
        let str=answer.join('');
        answer=[];
        result[i]=str;
    }
    return result;
}

//<풀이>

//result: 전체 5행5열을 반환할 배열
//answer: 각 행을 임시저장해서 result에 더할 배열
//tempArr1, tempArr2: 10진수에서 2진수로 바뀐 문자열을 저장할 변수
//n은 지도의 한변의 길이

//한변의 길이(행)인 n만큼 for문을 돌면서
//temp1, temp2 를 선언하고 ""로 초기화한다
//각 지도인 arr1, arr2을 전달받아 10진수를 2진수로 변환한다 -> 변환할 숫자.toString(변환할 진수)
//그럼 현재 a1_s, a2_s에는 9, 20 등과 같은 10진수들이 2진수로 변환된 문자열(String)로 저장된다

//자릿수를 통해 비교하면서 새로운 지도를 만들기 위해서는
//자릿수를 n으로 통일해야 한다
//첫번째 자릿수부터 n-(2진수문자열의 길이) 만큼 0을 채운다
//다음 2진수문자열의 길이만큼 더 채우면 자릿수가 n으로 맞춰진다

//이제 자릿수가 맞춰진 2진수 문자열인 temp1, temp2가 만들어지고
//split을 통해 문자열을 하나씩 쪼개서 tempArr1, tempArr2에 저장한다

//한변의 길이(열)인 n만큼 for문을 돌면서
//배열의 자릿수 요소들을 비교하는 작업을 한다
//tempArr1과 tempArr2의 동일한 자릿수에 요소가 같다면 if문으로 들어가고
//거기서 만약 해당 요소가 "0"이라면 answer배열에 " " (공백)을 push한다
//          만약 해당 요소가 "0"이 아니라면 answer배열에 "#"을 push한다
//tempArr1과 tempArr2의 동일한 자릿수에 요소가 같지 않다면
//answer배열에 "#"을 push한다
//    (지도상, 둘다 "0"이면 " ", 하나라도 "1"이면 "#", 둘다 "1"이면 "#")
//answer배열에는 현재 가로로 한줄 값이 들어가 있다
//join을 이용해 문자열로 합치고
//result 배열에 저장한다
//이 과정을 n만큼 실행하면서 각 행들을 순차적으로 수행한다