const n=153
let sum=0
let r
let temp=n
while(temp>0)
{
    r=temp%10
    sum+=(r*r*r)
    temp=parseInt(temp/10)
}
if(sum==n){
    console.log(n+" is a armstrong number")
}
else{
    console.log("is not an armstrong")
}