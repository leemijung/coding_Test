function solution(numbers, target) {
	let answer = 0;
	let count = 0;

    function func(since, location) {
		if (location === numbers.length) {
			if (since === target) answer++;
			return;
		}
		func(since + numbers[location], location + 1);
		func(since - numbers[location], location + 1);
	}
    
	func(count + numbers[0], 1);
	func(count - numbers[0], 1);

	return answer;
}


//<풀이>

//answer: 방법 수
//count: 덧셈 및 뺄셈의 결과
//func함수 - 재귀함수 형식으로 탐색을 수행함
//두가지로 나눠서 실행됨. 현재값(count)에 numbers배열 값을 더하거나 빼거나
//처음 실행되므로 location은 1

//함수내
//만약 현재 location(즉, 계산된 개수)가 numbers 배열의 개수(즉, 계산되어야 할 개수)와 같다면
//더이상 함수를 수행하지 않고 return함
//아니라면, 두 방향으로 나눠서 함수를 다시 부름