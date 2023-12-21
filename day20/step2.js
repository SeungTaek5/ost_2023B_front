
// 3. JSON : 다른 애플리케이션과 통신할 때 데이터 교환 목적 활용
    // 1. js객체 --> JSON문자열 : JSON.stringify()
    // 2. json문자열 --> JS객체 : JSON.parse()


// localStorage.setItem(키, 값);
// localStorage.setItem('이름', '유재석');

localStorage.setItem('회원정보목록', [{이름:'유재석'}, {이름:'강호동'}] );

const 회원정보목록 = console.log(localStorage.getItem('회원정보목록'));
console.log(회원정보목록);
console.log(회원정보목록[0].이름);

const 회원정보목록2 = JSON.parse(localStorage.getItem('회원정보목록2'));
console.log(회원정보목록2);
console.log(회원정보목록2[0].이름);