

const todos = ['우유 구매', '업무 메일 확인하기', '필라테스 수업'];

1.
for( let i = 0; i<todos.length; i++){ console.log(todos[i]); }

// 2. i는 todos배열 내 요소 *인덱스를 하나씩 대입 받으면서 console.log 반복 실행
for( let i in todos){ console.log(todos[i]); }

// 3. i는 todos배열 내 요소 *값을 하나씩 대입 받으면서 console.log 반복 실행
for( let v of todos ){console.log(v);}

// 4.
let i=0;
while(i<todos.length){console.log(todos[i]); i++; }