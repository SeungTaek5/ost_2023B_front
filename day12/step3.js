console.log('js 열림')

// const 회원리스트 = ['유재석', '강호동'];

// document.querySelector('div').innerHTML = 회원리스트;


const 회원배열 = [];

function 회원등록(){
    console.log('회원등록 함수 실행');

    const name = document.querySelector('#nameInput').value;

    console.log(name);


    if(회원배열.indexOf(name) == -1){
           // 1. [입력] : input로 부터 입력받은 값[value] 호출 해서 name상수 저장.
        const name = document.querySelector('#nameInput').value;  


        if( 회원배열.indexOf( name ) >= 0 ){ alert('현재 등록된 이름입니다.[중복]');    return; }
        if( name.length != 3 ){ alert('회원명 3글자로 입력해주세요.'); return; }
        if( !isNaN(name[0]) || !isNaN(name[1]) || !isNaN(name[2] ) ){ alert('숫자를 입력할수 없어요.'); return;}

        회원배열.push( name ); // 입력된 값을 배열에 추가 

    // 3. [출력]
        document.querySelector('#nameList').innerHTML = 회원배열;
    // [ 부가기능1] 등록후 input 상자 초기화 [ input에 value에 빈문자열 넣어주기 ]
        document.querySelector('#nameInput').value ='';
    }
    else{
        alert('현재 등록된 이름입니다.');
    }

    
}

function 회원삭제(){
    console.log('회원 삭제');

    const name = document.querySelector('#nameInput').value;

    let deleteIndex = 회원배열.indexOf(name);

    if( deleteIndex >= 0){
        회원배열.splice(deleteIndex, 1);
        alert('삭제 했습니다.');
    }
    else{
        alert('존재하지 않습니다.');
    }

    document.querySelector('#nameList'.innerHTML);
}
