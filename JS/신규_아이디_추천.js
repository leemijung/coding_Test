function solution(new_id) {
    var answer = '';
    let id=[];
    let pattern_spc = ['-', '_', '.', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '=', '+', '[', '{', ']', '}', ':', '?', ',', '<', '>', '/'];
    let pattern_num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    for(let i=0; i<new_id.length; i++){
        id[i]=new_id.charAt(i);    
    }
    let count=id.length;
    
    for(let i=0; i<count; i++){
        if(pattern_spc.includes(id[i])){
            if((id[i]!=='-')&&(id[i]!=='_')&&(id[i]!=='.')){
                delete id[i];
            }
        }
        else{
            id[i]=id[i].toLowerCase();
        }
    }
    
    let newArr = id.filter((element, i) => element !== undefined);
    
    let num=0;
    for(let i=0; i<newArr.length; i++){
        if(newArr[i]=='.'){
            if(newArr[i+1]=='.'){
                while(newArr[i+1]=='.'){
                i++;
                num+=1;
            }
            for(let j=i-num; j<i; j++){
                delete newArr[j];
            }
            num=0;
            }
        }
    }
    newArr = newArr.filter(
        (element, i) => element !== undefined);
    
    for(let i=0; i<newArr.length; i++){
        if(newArr[i]=='.'&&(i==0||i==newArr.length-1)){
            newArr.splice(i, 1);
        }
    }
    
    if(newArr.length==0) newArr.push('a');
    if(newArr.length>=16){
        newArr.splice(15, newArr.length-14)
    }
    
    for(let i=0; i<newArr.length; i++){
        if(newArr[i]=='.'&&(i==0||i==newArr.length-1)){
            newArr.splice(i, 1);
        }
    }
    
    let le=newArr.length;
    let st='';
    if(le<=2){
        while(le<3){
            newArr.push(newArr[le-1]);
            le=newArr.length;
        }
    }

    answer=newArr.join('');
    return answer;
}


//<풀이>

//pattern_spc: 지정한 특수문자 배열
//pattern_num: 지정한 숫자
//id: new_id의 인자를 저장할 배열

//전달받은 new_id문자열의 길이만큼 for문을 돌면서
//new_id를 charAt로 하나씩 쪼개서 id배열에 저장한다

//id의 요소길이만큼 for문을 돌면서
//id의 현재 인자(i)가 앞서 초기화한 pattern_spc중에 포함된다면 (=특수문자라면)
//해당 특수문자가 '-', '_', '.' 인지 확인한다
//세가지 중에 포함되지 않다면 delete를 사용해 삭제한다
	//delete 는 배열 요소를 삭제하는 기능으로, 공간을 남겨놓는다
//만약 특수문자가 포함되어 있지 않다면
//남아있는 문자열들은 숫자 or 문자열 이기때문에
//toLowerCase를 사용해 문자열을 모두 소문자로 변경한다

//현재 delete를 사용했기 때문에 id 배열 내부에는 undefined가 중간에 존재한다
//filter를 사용해서 undefined를 거르고 newArr 배열에 저장한다

//newArr 인자길이만큼 for문을 돌면서
//현재의 요소가 '.' 라면 중복여부를 살펴야 한다
//때문에 다음 요소인 (i+1)의 인자도 '.' 인지 살펴본다
//만약 둘다 참이라면, 해당 개수를 카운트하는데 '.' 를 하나 남겨야 하기 때문에 i+1부터 카운트한다 (num+=1)
//while문을 통해 '.' 의 조건이 성립하지 않는 순간에 나오게 되고
//현재의 인덱스(i)에서 카운트된 num만큼 뺀 인덱스의 인자부터 ~ 현재의 인덱스(i)의 인자까지
//delete를 이용해 삭제한다 ('.' 의 중복제거)
//카운트할때 i+1 로 두번째부터 측정했기 때문에 카운트된 모든 것을 삭제하면 결국 한개의 '.' 이 남게된다
//카운트 하는 num 변수는 측정이 끝나면 항상 0으로 초기화한다

//delete를 사용했으므로 이전과 마찬가지로 filter로 정리한다

//newArr 배열의 인자길이만큼 for문을 돌면서
//해당 인덱스의 인자가 '.' 이고, 그 인덱스가 처음 또는 마지막 위치라면
//splice를 이용해 삭제한다
//이때는 중간요소를 삭제하는 것이 아니라 인덱스 변화의 영향이 없으므로 delete를 사용하지 않았다

//만약 newArr의 길이가 0, 즉 빈 배열이라면 'a'를 저장한다
//만약 newArr의 길이가 16 이상이라면 splice를 사용해 15 인덱스부터 마지막 인덱스까지 삭제한다
//14를 빼는 이유는 15개의 요소만 저장하려면 인덱스 14번까지 저장해야 하기때문이다

//newArr의 전체 길이를 le에 저장하고 st 문자열을 선언한다
//le가 2 이하라면 최소 길이를 3까지 만들어야 하기 때문에
//while문을 사용해서 le가 3 미만임이 참일때까지
//마지막 요소를 push하고 le를 재설정한다
// le<=3 은 길이가 이미 3인데도 while문 내부를 한번 더 돌게되므로 최소가 4가된다
//때문에 le<3 로 조건문 설정한다

//newArr배열을 join을 통해 문자열로 합치고 answer에 저장한다