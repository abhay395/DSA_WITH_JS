
function FactorialOfNnumber (n){
    if(n==0){
        return 1;
    }
    let fact = n * FactorialOfNnumber(n-1);
    return fact;
}
process.stdin.on('data', function(data) {
    console.log(FactorialOfNnumber(Number(data.toString().trim())))
    // console.log('You entered: ' + data.toString().trim());
    process.exit();
});
