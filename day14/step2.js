

let output = '';


//문제1
// const value1 = Number(prompt('문제1 수 입력'));

// for(let i=0; i<=value1; i++){
//     output += '*';
// }
// console.log(output);
// output = '';


//문제2
// const value2 = Number(prompt('문제2 수 입력'));

// for(let i=0; i<=value2; i++){
//     output += '*';
//     if( i%3==0 ){output+='\n';};
// }
// console.log(output);
// output = '';


//문제3
const line3 = Number(prompt('문제3 줄 수'));
for(let i=1; i<=line3; i++){
    for(let j=1; j<=i; j++){
        output += '*';
    }
    output += '\n';
}
console.log(output);
output = '';


//문제4
const line4 = Number(prompt('문제4 줄 수'));
for(let i=line4; i>=1; i--){
    for(let j=1; j<=i; j++){
        output +='*';
    }
    output += '\n';
}
console.log(output);
output = '';


//문제5
const line5 = Number(prompt('문제5 줄 수'));
for(let i=1; i<=line5; i++){
    for(let j=line5; j>=1; j--){
        if(j<=i){
            output += '*';
        }
        else{
            output += ' ';
        }
    }
    output += '\n';
}
console.log(output);
output = '';


//문제6
const line6 = Number(prompt('문제6 줄 수'));
for(let i=1; i<=line6; i++){
    for(let j=1; j<=line6; j++){
        if(j-i>=0){
            output += '*';
        }
        else{
            output += ' ';
        }
    }
    output += '\n';
}
console.log(output);
output = '';


//문제7
const line7 = Number( prompt('문제7 줄수 : ') );
// [행]
for( let i = 1 ; i<=line7 ; i++ ){
    // [공백]
    for( let b = 1 ; b<=line7-i ; b++ ){ output+=' '}
    // [별]
    for( let s = 1 ; s<= i*2 -1 ; s++ ){ output+='*' }
    // [줄바꿈]
    output += `\n`
} // for end 
console.log( output );
output = '';

const line8 = Number( prompt('문제8 줄수 : ') );
// [행]
for( let i = 1 ; i<=line8 ; i++ ){
    // [공백]
    for( let b = 1 ; b<= i-1 ; b++ ){ output += ' '; }
    // [별]
    for( let s = 1 ; s<= (line8*2) - ( i*2-1 ) ; s++ ){ output += '*'}
    // [줄바꿈]
    output += `\n`; // 행마다 1개 이므로 반복문 안씀..
}
console.log( output );
output = '';

const line9 = Number(prompt('문제9 줄 수'));
for( let i = 1 ; i<=line9 ; i++ ){
    // [공백]
    for( let b = 1 ; b<= i-1 ; b++ ){ 
        if(\)
        output += ' '; 
    }
    // [별]
    for( let s = 1 ; s<= (line8*2) - ( i*2-1 ) ; s++ ){ output += '*'}
    // [줄바꿈]
    output += `\n`; // 행마다 1개 이므로 반복문 안씀..
}
console.log( output );
output = '';
