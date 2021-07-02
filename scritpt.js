let words = 'Loren ipsun dolor sit amen.';
 
let count = words.split(' ').length;
 
alert(count);


//----------------------//

function palindromo(text){
    return text.split('').reverse().join('') == text;
}

console.log(palindromo('reconocer'));
console.log(palindromo('Amor a roma'));
