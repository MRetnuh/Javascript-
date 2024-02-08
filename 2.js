function factorial (n){
 let r = 1;
while(0 < n){
  r = r*n;
  n--;
}
return r;
}
console.log(factorial(4));
