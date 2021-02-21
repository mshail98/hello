function add(a,b){
    let sum=a+b;
    return sum;

}
function sub(a,b){
    let x=a-b;
    return x;
}

function mul(a,b){
    let x=a*b;
    return x;
}   

function div(a,b){
    let x=a/b;
    x=x.toFixed(2);
    return x;
}
export  {add,sub,mul,div};
