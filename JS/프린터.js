function solution(priorities, location) {
    const array=[];
    
    for(let i=0; i<priorities.length; i++){
        if(i==location){
            array[i]=true;
        }
        else{
            array[i]=false;
        }
    }
    
    
    let count=0;
    while(priorities.length!=0){
        let first = priorities.shift();
        let first_array = array.shift();
        let tf=true;
        for(let i=0; i<priorities.length; i++){
            if(first<priorities[i]){
                priorities.push(first);
                array.push(first_array);
                tf=false;
                break;
            }
        }
        if(tf){
            count++;
            if(first_array){
                break;
            }
        }
    }

    return count;
}

//<풀이>

//location이 index가 되므로
//값에 해당하는 위치는 true로 설정, 아닌 위치는 false로 설정
//이후에 알고자하는 위치인지 아닌지 확인하는 용도로 사용함

//출력되는 인쇄물의 갯수를 알기 위한 변수 count
//priorities 배열의 가장 첫번째 index요소값 반환해서 first에 저장
//array 배열의 가장 첫번째 index요소값 반환해서 first_array에 저장
// -> shift() : 가장 앞의 요소값을 제거하면서 반환함

//tf를 설정해서 현재의 인쇄물이 출력되는지 아닌지 확인함 (true: 출력o, false: 출력x)
//priorities를 돌면서, 현재 중요도보다 더 높은 중요도의 인쇄물이 대기중인지 확인함
//만약 있다면, priorities와 array에서 뽑아 저장한 각 배열의 첫번째 인자들은 push를 통해 마지막으로 다시 들어감
//	       현재 인쇄물이 출력되면 안되므로 tf = false
//priorities를 모두 돌았는데, 더 중요한 인쇄물이 존재하지 않는다면
//현재 인쇄물을 출력해야 함
//tf가 true이면, count 1증가
//방금 출력시킨 인쇄물이 알고자하는 location이었다면, break를 통해 while을 빠져나옴