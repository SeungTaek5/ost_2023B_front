// p.116 자료형 변환

const input = prompt( 'message' , "기본값");
    // 코드 실행 순서
    // 1. prompt()
    // 2. prompt() 결과/반환/리턴된 값
    // 3. const input = 리턴된 값

alert(input);

const input2 = confirm("수락하시겠습니까?");
alert(input2);

// 3. 숫자 자료형으로 변환하기 [ Number() : 문자열 자료형을 숫자형으로 변환 함수 ]
console.log(Number("273"));


// 4. 숫자 연산을 사용해 자료형 변환하기 [ *단 숫자+"문자열" : 연결연산자 조심 ]
console.log("52" - 3);  //49
console.log(true - 1);  //0

// 5. 문자열 자료형으로 변환하기 [ String() : 문자열로 변환 함수 vs 데이터+"" ]
console.log( String(52.273) );  // 52.273 -> "52.273"
console.log(true)     ;         // true -> "true"

console.log(52.273+"");         // 52.273 -> "52.273"

// 6. 논리 부정 연산자를 사용해 자료형 변환하기
console.log(!273);      // false


const input3 = prompt('cm 단위의 숫자를 입력해주세요.');
const inch = Number(input3) * 0.393701;

alert(`${input3}cm는 ${inch}입니다`);

- 각 생활에서 사용되는 기계/프로그램들 예시 만들기

- 1. 키오스크  2.엘리베이터  3. 자율주행 자동차

1. 저장/변수 5개
2. 기능/함수
3. 경우의수/논리 