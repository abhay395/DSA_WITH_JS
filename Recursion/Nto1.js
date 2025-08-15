
function PrintNto1(n){
    if(n==0){
        return ;
    }
    PrintNto1(n-1)
    console.log(n)
}  

PrintNto1(5)