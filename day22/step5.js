document.addEventListener('DOMContentLoaded', function(){
    let counter = 0;
    let isConnect = false;

    const h1 = document.querySelector('h1');
    const p = document.querySelector('p');
    const connectButton = document.querySelector('#connect');
    const disconnectButton = document.querySelector('#disconnect');

    // 이벤트를 제거하려면 이벤트리스너를 변수 또는 상수로 가지고 있어야 함.
    const listener = function(event){
        h1.textContent = `클릭 횟수 : ${counter++}`;
    }

    connectButton.addEventListener('click', function(){
        if(isConnect === false){
            h1.addEventListener('click', listener);
            p.textContent = '이벤트 연결 상태 : 연결';
            isConnect = true;
        }
    })

    disconnectButton.addEventListener('click', function(){
        if(isConnect===true){
            h1.removeEventListener('click', listener);
            p.textContent = '이벤트 연결 상태 : 해제';
            isConnect = false;
        }
    })
})



/*
1. DOMContentLoaded
2. #header, .active
3. htmlContent
4. borderRadius, fontFamily, lineHeight, width, boxSizing
*/