
function 글쓰기(){

    const writer = document.querySelector('#writer').value;        
    const passowrd = document.querySelector('#passowrd').value;    
    const title = document.querySelector('#title').value;         
    const content = document.querySelector('#content').value; 


    const board = { 작성자 : writer , 비밀번호 : passowrd , 제목 : title , 내용 : content };
    board.조회수 = 0;

    let boardArray = JSON.parse( localStorage.getItem('boardArray') ) ;     
    if( boardArray == null ){ boardArray = [ ] } // 배열을 새로 만들어준다. 
    

    boardArray.push( board ); // 방금 가입된 회원객체 배열에 추가 
    localStorage.setItem( 'boardArray' , JSON.stringify( boardArray )  );    
    console.log( boardArray );

    //글출력();
    //location.href='list.html';
}

