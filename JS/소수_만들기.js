function solution(nums) {
    let answer = 0;
    let sum=[];
    
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let k=j+1; k<nums.length; k++){
                sum.push(nums[i]+nums[j]+nums[k]);
            }
        }
    }
    
    for(let i=0; i<sum.length; i++){
        if(isPrime(sum[i])) answer+=1;
    }

    return answer;
}

function isPrime(sum){
    for(let i=2; i*i<=sum; i++){
        if(sum%i===0) return false;
    }
    return true;
}


//풀이

//nums 배열 내 3개의 숫자를 골라 더한 sum이 소수인 경우 카운드 (answer+=1)
//sum 값으로 나올 수 있는 모든 경우를 배열에 push
//for문을 이용해 sum 배열 값을 순서대로 접근
//isPrime함수에 sum 인자를 하나씩 전달
//isPrime 반환값이 true라면, 소수
//answer 1 증가시킨다.

//isPrime : 소수인가 아닌가
//2부터 sum값 까지
//i가 증가하면서 (i제곱=sum값)까지 확인
//i<sum 라면 약수가 될 수 없는 숫자이기때문에 (7<6, 7은 6의 약수가 될 수 없음)   i*i<=sum의 조건을 명시한다.
//sum값을 i로 나눈 나머지가 0이라면 약수가 존재하기 때문에, 소수가 아님 (false)
//                         아니라면 약수가 존재하지 않기 때문에, 소수가 맞음 (true)
