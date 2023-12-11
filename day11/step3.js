// 문제1 : 3개 정수를 각 input으로 입력받아 총점과 평균을 span에 출력하시오

function 연습버튼을클릭했을때실행되는모듈상자(){
    alert('첫번째 버튼을 클릭했네.');

    let value1 = document.querySelector('#input1').value;
    let value2 = document.querySelector('#input2').value;
    let value3 = document.querySelector('#input3').value;
    console.log(Number(value1));
    console.log(Number(value2));
    console.log(Number(value3));

    let sumValue = Number(value1) + Number(value2) + Number(value3);
    let avgValue = sumValue/3;

    document.querySelector('#result').innerHTML = `총합: ${sumValue}  평균: ${avgValue}`;

}


// 문제2 : 2개 정수를 입력받아 더 큰 수를 출력
function 문제2(){
    alert('두번째 버튼을 클릭했네.');

    let value1 = document.querySelector('#input1').value;
    let value2 = document.querySelector('#input2').value;

    let result = "";
    if( value1 > value2 ){ result = '큰 수는 '+ value1 }
    else if( value2 > value1 ){ result = '큰 수는 ' + value2 }
    else( result = '두 수는 같다.')

    document.querySelector('#result').innerHTML = result
}

// 문제3 : 3개의 정수를 입력받아서 가장 큰 수를 출력
function 문제3(){
    alert('세번째 버튼을 클릭했네.');

    let value1 = document.querySelector('#input1').value;
    let value2 = document.querySelector('#input2').value;
    let value3 = document.querySelector('#input3').value;

    let result = "";
    
    if(value1 > value2 && value1 > value3){result=value1}
    else if(value2 > value1 && value2 > value3){result=value2}
    else if(value3 > value2 && value3 > value1){result=value3}
    else{result = '동일한 값 존재'}

    document.querySelector('#result').innerHTML = result;
}

// 문제4 : 1개의 정수를 입력받아 점수 90점 이상 합격, 아니면 탈락 출력
function 문제4(){
    alert('네번째 버튼을 클릭했네.');

    let value1 = document.querySelector('#input1').value;

    let result = "";

    if(value1 >= 90){result='합격'}
    else{result='탈락'}

    document.querySelector('#result').innerHTML = result;
}

// 문제5 : 점수를 입력받아 점수 90점이상 A등급 출력
function 문제5(){
    alert('다섯번째 버튼을 클릭했네.');

    let value1 = document.querySelector('#input1').value;

    let result = "";

    if(value1 >= 90){result='A'}
    else{result='B'}

    document.querySelector('#result').innerHTML = result;
}

// 문제6 : 아이디와 비밀번호 입력받기 (아이디가 admin, 비밀번호가 1234 이면 로그인 성공 아니면 실패 출력)
function 문제6(){
    alert('여섯번째 버튼을 클릭했네.');

    let value1 = document.querySelector('#input1').value;
    let value2 = document.querySelector('#input2').value;

    let result="";

    if(value1 == 'admin' && value2 =='1234'){result='로그인 성공'}
    else{result='로그인 실패'}

    document.querySelector('#result').innerHTML = result;
}

// 문제7 : 3개의 정수를 입력받아서 오름차순 / 내림차순 출력
function 문제7(){
    alert('일곱번째 버튼을 클릭했네.');

    let value1 = document.querySelector('#input1').value;
    let value2 = document.querySelector('#input2').value;
    let value3 = document.querySelector('#input3').value;

    let Max, Min, tmp="";

    // if(value2 > value3){Max=value2; Min=value3}
    // else if(value3 > value2){Max=value3; Min=value2}

    // if(value1 > Max){tmp=Max; Max=value1}
    // else if(Max > value1 && value1>Min){tmp=value1}
    // else if(Max > value1 && Min > value1){tmp=Min; Min=value1}

    // document.querySelector('#result').innerHTML = `오름차순${Min}-${tmp}-${Max}  내림차순${Max}-${tmp}-${Min}`



    
    // 1,2비교 > 2,3비교 > 1,2비교
    if(value1>value2){
        Max=value1;
        tmp=value2;
    }
    else if(value2>value1){
        Max=value2;
        tmp=value1;
    }

    if(tmp>value3){
        Min=value3;
    }
    else if(value3>tmp){
        Min=tmp;
        tmp=value3;
    }

    if(Max>tmp){
        document.querySelector('#result').innerHTML = `오름차순${Min}-${tmp}-${Max}  내림차순${Max}-${tmp}-${Min}`
    }
    else if(tmp>Max){
        document.querySelector('#result').innerHTML = `오름차순${Min}-${Max}-${tmp}  내림차순${tmp}-${Max}-${Min}`
    }
}
