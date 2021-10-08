function solution(brown, yellow) {
      var answer = []

      for (let i = yellow; i >= 1; i--) {
        if (yellow % i === 0) {
          let yellow_H = i
          let yellow_V = yellow / i

          if (brown === 2 * yellow_H + 2 * yellow_V + 4) {
            answer = [yellow_H + 2, yellow_V + 2]
            break
          }
        }
      }
      return answer
}

//<풀이>

//yellow 개수만큼 for문을 돌면서 경우를 확인함
//사각형 모양을 이루어야 하기 때문에 (세로*가로=전체 개수) 이 만족되어야 함
//i를 증가시켜가면서 전체개수(yellow)로 나눴을때 나머지가 0이 되면 -> 곱의 형식으로 나타낼 수 있음
//조건이 성립하면, yellow의 세로와 가로를 정의한다.

//현재 yellow의 세로, 가로 길이에 대한 brown 값도 맞아떨어지면
//구하고자 하는 yellow와 brown을 반환할 수 있다.
//brown의 전체 길이는 (yellow 가로길이 2개 + 세로길이 2개 + 각 꼭짓점 4개) 가 되어야 한다.
//조건이 성립하면, answer에 전체 카펫의 세로와 가로를 반환한다.
//전체 카펫의 세로 = yellow 세로 + 2
//전체 카펫의 가로 = yellow 가로 + 2