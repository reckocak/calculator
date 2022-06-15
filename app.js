
const display1 = document.querySelector('.previous-display')
const display2 = document.querySelector('.current-display')
const equal = document.querySelector('.equal')


const eins = document.querySelector('.number-1')
const zwei = document.querySelector('.number-2')
const drei = document.querySelector('.number-3')
const vier = document.querySelector('.number-4')
const funf = document.querySelector('.number-5')
const sex = document.querySelector('.number-6')
const sieben = document.querySelector('.number-7')
const acht = document.querySelector('.number-8')
const neun = document.querySelector('.number-9')
const zero = document.querySelector('.number-0')
const addition = document.querySelector('.addition')
const subtraction= document.querySelector('.subtraction')
const multiplication= document.querySelector('.multiplication')
const division= document.querySelector('.division')
const percent=document.querySelector('.percent')
const ac= document.querySelector('.ac')
const decimal= document.querySelector('.decimal')
const pm=document.querySelector('.pm')


let array1=[];
let array2=[];
let operator;
let sonuc;

eins.onclick=()=>{
    array1.push(1);
    display2.innerHTML=array1.join('');
}
zwei.onclick=()=>{
    array1.push(2);
    display2.innerHTML=array1.join('');
}

drei.onclick=()=>{
    array1.push(3);
    display2.innerHTML=array1.join('');
}

vier.onclick=()=>{
    array1.push(4);
    display2.innerHTML=array1.join('');
}

funf.onclick=()=>{
    array1.push(5);
    display2.innerHTML=array1.join('');
}

sex.onclick=()=>{
    array1.push(6);
    display2.innerHTML=array1.join('');
}

sieben.onclick=()=>{
    array1.push(7);
    display2.innerHTML=array1.join('');
}

acht.onclick=()=>{
    array1.push(8);
    display2.innerHTML=array1.join('');
}

neun.onclick=()=>{
    array1.push(9);
    display2.innerHTML=array1.join('');
}

zero.onclick=()=>{
    array1.push(0);
    display2.innerHTML=array1.join('');
}


addition.onclick=()=>{
    
    array2=[];
    array2=array1;

    display1.innerHTML=array2.join('');
    
    
    array1=[];
    
    operator='+';
    display1.innerHTML=display1.innerHTML+operator
    // display1.innerHTML=array2.join('')+''+operator;
}

subtraction.onclick=()=>{
    array2=[];
    array2=array1;

    display1.innerHTML=array2.join('');
    
    
    array1=[];
    operator='-';
    display1.innerHTML=array2.join('')+''+operator;
}
multiplication.onclick=()=>{
    array2=[];
    array2=array1;

    display1.innerHTML=array2.join('');
    
    
    array1=[];
    operator='*';
    display1.innerHTML=array2.join('')+''+operator;
}
division.onclick=()=>{
    array2=[];
    array2=array1;

    display1.innerHTML=array2.join('');
    
    
    array1=[];
    operator='/';
    display1.innerHTML=array2.join('')+''+operator;
}

decimal.onclick=()=>{
    array1.push('.');
    display2.innerHTML=array1.join('')
}



percent.onclick=()=>{
    let b= Number(array1.join(''));
    let c= Number(array2.join(''))

    b=b*c/100
    array1=[];
    array1.push(b);

    console.log(b);

}


equal.onclick=()=>{
    switch(operator){
    case '+':
        sonuc= Number(array2.join('')) + Number(array1.join(''));
        display1.innerHTML=Number(array2.join('')) + '+' +  Number(array1.join(''));
        array1=[];
        array1.push(sonuc);
        display2.innerHTML=sonuc; break;
    case '-':
      sonuc= Number(array2.join('')) - Number(array1.join(''));
      display1.innerHTML=Number(array2.join('')) + '-' +  Number(array1.join(''));
      array1=[];
      array1.push(sonuc);
      display2.innerHTML=sonuc; break;
    case '*':
    sonuc= Number(array2.join('')) * Number(array1.join(''));
    display1.innerHTML=Number(array2.join('')) + '*' +  Number(array1.join(''));
      array1=[];
      array1.push(sonuc);
    display2.innerHTML=sonuc; break;
    case '/':
        if(array1!=0){
            sonuc=Number(array2.join('')) / Number(array1.join(''));
        }
        else{
            sonuc='error'
        }

    display1.innerHTML=Number(array2.join('')) + '/' +  Number(array1.join(''));
      array1=[];
      array1.push(sonuc);
    display2.innerHTML=sonuc;break;
    }
}

nokta = true
decimal.onclick = () => {


    if (array1.includes('.')) {
        nokta == false;
    } else {
        nokta == true;
        array1.push('.');
        sonuc = array1.join('')
        console.log(sonuc);
        display2.innerHTML = sonuc
    }
}

pm.onclick=()=>{
    let a=Number(array1.join(''));
    a=a*(-1);
    
    array1=[];
    array1.push(a);
    display2.innerHTML=Number(array1.join(''));
    
    console.log(a);
    console.log(array1);
}



ac.onclick=()=>{
    display2.innerHTML= 0;
    display1.innerHTML= 0;
    array1=[];
    array2=[];
    
}

percent.onclick=()=>{
    let b= Number(array1.join(''));
    let c= Number(array2.join(''))

    b=b*c/100
    array1=[];
    array1.push(b);
    display2.innerHTML=Number(array1.join(''));
    console.log(b);

}


