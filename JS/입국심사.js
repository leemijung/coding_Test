function solution(n, times) {
    var answer = 0;
    
    
    times.sort((a, b)=>a-b);
    
    let left = 1;
    let right = n * times[times.length -1];
    let max=right;
    
    while(left<=right){
        let mid = Math.floor((left + right) / 2);
        let number=0;
        times.forEach(time => {
            number += Math.floor(mid / time); 
            if(number >= n) {
                answer = Math.min(mid, max);
                return;
            };
        });
        if (number >= n) { 
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return answer;
}

//<풀이>

//이진탐색
//심사관 시간이 저장된 times 배열을 오름차순으로 정렬
//시간순으로 정렬해서, 가장 적게 걸리는 시간과 많이 걸리는 시간을 구분할 수 있음
//left : 가장 빨리 끝날 수 있는 경우 (심사관 수가 검사자 수와 동일할 때, 1분)
//right : 가장 늦게 끝날 수 있는 경우 (모든 검사자가 1명의 심사관에게 갈 때, 검사자수*심사시간)

//left~right 범위에 최소로 걸릴 시간이 포함되어 있음 -> 이진탐색을 사용해야 함
//left와 right 중간값으로 초기 mid 값을 설정함

//times 배열의 모든 요소를 돌면서
//현재 탐색중인 전체 소모 시간(mid) / 심사관당 걸리는 시간(time) = 한 심사관당 해결할 수 있는 검사자 수(number)
//만약, times 배열을 도는 중, 심사관들이 처리한 검사자 수(number)가 전체 검사자 수보다 많으면 -> 종료된 것 -> return
//times 배열을 도는 동안, 조건이 성립되지 않으면, 전체 검사자를 완료하지 못한 것

//한번 턴을 할 때마다, 현재 검사가능한 인원(number)과 전체 검사자 수(n)을 비교해서
//number가 작으면 -> 시간이 더 필요함 -> 큰 범위로 이동
//number가 크면 -> 시간을 줄일 수 있음 -> 작은 범위로 이동

//전체 반환(answer)은 mid와 max값 중 작은 값을 반환함 (최소시간을 구하는 것이기 때문)