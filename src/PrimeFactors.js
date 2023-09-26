function Factorial(n)
{
    const primo=[];
  if(n<=1)
  {
      return [];
  }
  if (n>1){
    primo.push(n);
  }
  return primo;
}
export default Factorial;