function solution(numbers, hand) {
    var answer = '';
    
    let left=[1, 4, 7];
    let right=[3, 6, 9];
    let center=[2, 5, 8, 0];
    
    let left_finger=[3, 0];
    let right_finger=[3, 2];
    
    numbers.map(number=>{
        if(left.includes(number)){
            answer+="L";
            left_finger=[left.indexOf(number),0];
        }
        else if(right.includes(number)){
            answer+="R";
            right_finger=[right.indexOf(number), 2];
        }
        else{
            let push_a=[center.indexOf(number),1];
            
            let distance_left=Math.abs(push_a[0]-left_finger[0])+Math.abs(push_a[1]-left_finger[1]);
            let distance_right=Math.abs(push_a[0]-right_finger[0])+Math.abs(push_a[1]-right_finger[1]);
            
            if(distance_left<distance_right){
                answer+="L";
                left_finger=push_a;
            }
            else if(distance_left>distance_right){
                answer+="R";
                right_finger=push_a;    
            }
            else{
                if(hand==="left"){
                    answer+="L";
                    left_finger=push_a;
                }
                else{
                    answer+="R";
                    right_finger=push_a;
                }
            }
        }
    });
    
    return answer;
}