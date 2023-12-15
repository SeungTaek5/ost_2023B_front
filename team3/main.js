const 제품명 = [];
const 가격 = [];
const 수량 = [];
let 매출 = 0;
// const 구매제품명 = [];
const 구매가격 = [];
// const 구매날짜 = [];

function rework(n){ //쉼표넣기
    let a = String(n);
    for ( let i = a.length-3; i>0; i -=3){ //뒤에서 세번째 자리수부터, 3자리주기이니 3자리마다 반복
        a =a.substring(0,i)+","+a.substring(i); //0~i번째 문자열+','+i~끝문자열
    }
    return a;
}

function 총매출( i ){
    매출 += Number(가격[i]);
}

function 구매( i ){
    수량[i] -= 1 ;
    총매출(i);
}

// console.log(가격[1]);
// console.log(수량[1]);
구매(1);
구매(2);
// console.log(수량[1]);
console.log(매출);



let date = ['2023-12-15', '2023-12-16', '2024-01-01', '1996-10-15'];

console.log(date[1]);

if(date[0]>date[2]){
    console.log('1');
}
else{
    console.log('2'); //
}

function 정렬(){
    let tmp = '';
    for(let j=0; j<구매날짜.length-1; j++){
        for(let i=0; i<구매날짜.length-1; i++){
            if(구매날짜[i]<구매날짜[i+1]){
                // 날짜 정렬
                tmp = 구매날짜[i];
                구매날짜[i] = 구매날짜[i+1];
                구매날짜[i+1] = tmp;

                // 제품명 정렬
                tmp = 구매제품명[i];
                구매제품명[i] = 구매제품명[i+1];
                구매제품명[i+1] = tmp;

                // 가격 정렬
                tmp = 구매가격[i];
                구매가격[i] = 구매가격[i+1];
                구매가격[i+1] = tmp;
            }
        }
    }
}


const 구매날짜 = ['2023-12-15', '2023-12-16', '2024-01-01', '1996-10-15', '1992-05-05', '2027-04-01'];
const 구매제품명 = ['4', '3', '2', '5', '6', '1'];
console.log(구매날짜);
정렬();
console.log(구매날짜);
console.log(구매제품명);
