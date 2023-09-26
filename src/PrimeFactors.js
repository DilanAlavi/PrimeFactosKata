function Factorial(n)
{
  const primo=[];
  if(n<=1)
  {
      return [];
  }
  if(n>1){
    while (n%2==0)
    {
        primo.push(2);
        n /= 2;
    }
  }
  if (n>1){
    primo.push(n);
  }
  return primo;
}
export default Factorial;