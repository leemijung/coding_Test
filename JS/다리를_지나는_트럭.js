function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    
    let ing=[];
    let sum=0;
    
    for(let i =0;i<bridge_length;i++){
        ing.push(0);
    }
    
    let truck_weights_first=truck_weights.shift();
    ing.unshift(truck_weights_first);
    ing.pop();
    
    
    
    sum+=truck_weights_first;
    answer++;
    
    while(sum!=0){
        sum-=ing.pop();
        
        truck_weights_first=truck_weights.shift();
        
        if(sum+truck_weights_first<=weight){
            ing.unshift(truck_weights_first);
            sum+=truck_weights_first;
        }
        else{
            ing.unshift(0);
            truck_weights.unshift(truck_weights_first);
        }
        
        answer++;
    }
    
    
    
    return answer;
}

//<풀이>

//answer : 초과한 시간
//ing : 현재 다리를 지나는 트럭 배열
//sum : 현재 다리 위의 트럭 무게 총합

//ing배열 길이 = 다리위에 올라올 수 있는 트럭 길이 = 다리 전체 길이
//bridge_length 길이만큼 for문을 돌면서, ing 배열을 0으로 채움 -> bridge_length 길이 선언

//truck_weights의 가장 첫번째 요소를 반환해 저장 = 현재 다리를 지나가는 트럭
//ing 배열의 가장 앞의 요소에 넣고, 가장 뒤의 요소를 제거한다 -> ing 배열 길이 보존

//현재 다리를 지나가는 트럭의 무게를 총합sum에 더함
//시간이 1 지남
// -> 다리를 건너기 시작함

//sum값이 0이 되면, 현재 다리 위의 트럭 무게가 0이므로 모두 지났다는 의미이다
//while문을 지나면서 시간이 1증가하게 됨
//ing.pop을 해서 sum에서 빼는데, 값이 0일수도 다리를 빠져나가는 트럭의 무게일수도 있음

//truck_weights의 앞요소를 반환해서 저장
//만약 sum과 더했을때 다리가 견딜수 있는 최대 무게 weight보다 작다면
//ing 배열 가장 앞에 truck_weights 를 추가하고
//다리 위의 전체 트럭 무게를 증가시킴

//만약 sum과 더했을때 다리가 견딜수 있는 최대 무게 weight보다 크다면
//ing 배열에 0을 추가함 (다리 위로 더 올라오는 트럭없음)
//반환해서 저장했던 현재 트럭무게를 truck_weights 배열 가장 앞에 다시 넣음

//while문을 돌면서, 전체 시간 answer이 측정되서 반환됨