글출력();


function 글출력(){ 

    const boardArray = JSON.parse( localStorage.getItem('boardArray') ); 
    console.log( boardArray );

    const tableBody = document.querySelector('table>tbody');      
    let html = ``; 
    for( let i = 0 ; i<boardArray.length ; i++ ){                
        html += `<tr onclick="개별글출력( ${i} )" >                  
                    <th>${ i }</th>                                
                    <th>${ boardArray[i].제목 }</th>     
                    <th>${ boardArray[i].작성자 }</th>   
                    <th>${ boardArray[i].조회수 }</th>        
                </tr>`                                             
    }
    tableBody.innerHTML = html;                                     
    return;                                                       
}

function 개별글출력( index ){

    // * 조회수 증가.
    const boardArray = JSON.parse( localStorage.getItem('boardArray') ); 
    boardArray[index].조회수 += 1 ; 
    localStorage.setItem( 'boardArray' , JSON.stringify( boardArray ) ); 
    
    console.log(boardArray[index].조회수);
    글출력();  

    // const boardBox = document.querySelector('#boardBox');

    // let html = `<div> 작성자 : ${ boardArray[index].작성자 } 조회수 : ${ boardArray[index].조회수 }  </div>
    //             <div> 제목 : ${ boardArray[index].제목 } </div>
    //             <div> 내용 : ${ boardArray[index].내용.replaceAll( '\n' , '<br/>') } </div>
    //             `;
    // boardBox.innerHTML = html;

    // return;
}