function solution(distance, rocks, n) {
    var answer = 0;
    rocks=[0,...rocks.sort((a,b)=>a-b),distance];
    
    let first=0;
    let last=rocks[rocks.length-1];
    
        
    while(first<=last){
        let mid=Math.floor((first+last)/2);
            let count=0,now=0;
            for(let i=1;i<rocks.length;i++){
                if(rocks[i]-now<mid){
                    count++;   
                }else{
                    now=rocks[i];
                }
            }
            
            if(count>n){
                last=mid-1;
            }else{
                first=mid+1;
            }
        }
        answer=last;
    return answer;
}

//<풀이>

//rocks 배열은 시작점 -> 각 징검다리 -> 도착점 으로 구성되어야 함
//징검다리 번호는 오름차순으로 정렬해서 거리에 맞춤
//first : 첫번째 징검다리 번호 = rocks의 첫번째 요소 = 0
//last : 마지막 징검다리 번호 = rocks의 마지막 요소 = distance

//최소거리를 탐색하므로 이분탐색을 이용함
//first와 last의 중간값으로 초기 mid값 설정
//기준 거리의 값보다 작은 위치의 바위는 삭제 -> (count 처리)
//기준 거리의 값보다 크다면 현재 바위의 위치 변경 -> (now 처리)

//index 1 (두번째 요소) 부터 for문을 돌면서,
//각 징검다리(rocks[i]) - 현재위치한 징검다리(now) < mid : 기준거릿값보다 작기 때문에 삭제해도 됨
//count : 삭제하는 징검다리 수 측정
//각 징검다리(rocks[i]) - 현재위치한 징검다리(now) >= mid : 기준거릿값보다 크거나 같기 때문에 해당 위치로 이동함
//now에 현재 index값을 가진 rocks를 넣음

//만약 count(삭제된 징검다리 수)가 n(삭제 가능한 징검다리 수) 보다 많으면,
//범위를 줄여야 함 -> last=mid-1
//아니면, 범위를 늘려야 함 -> first=mid+1

//answer은 가장 큰 값이므로 last를 반환함