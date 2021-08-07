function solution(nums) {
    var answer = 0;    
    let p_count=nums.length/2;
    let tmp=[];
    
    
    tmp[0]=nums[0];
        
    for(let j=1; j<nums.length; j++){
        if(tmp.length<p_count){
            if(tmp.includes(nums[j])){
                continue;
            }
            else{
                tmp.push(nums[j]);
            }
        }     
    }
    answer=tmp.length;
    
    
    return answer;
}

//<풀이>

//전체 폰켓몬 N 마리중 N/2마리를 가져가도 되므로
//p_count로 절반 길이를 구한다
//tmp는 가져갈 폰켓몬의 배열

//nums 배열에 있는 가장 첫번째 폰켓몬을 tmp에 저장
//nums 배열만큼 돌면서
//tmp 의 길이가 p_count 보다 적다면 if문을 들어간다
//만약 tmp에 이미 nums 요소가 있다면 continue하고
//			     없다면 tmp에 저장

//가져갈 폰켓몬이 있는 tmp 배열의 길이를 반환한다