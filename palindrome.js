function palindrome(str) {

    str = str.toLowerCase();
    str=str.replace(/[`~ !@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
   
    function reversing(x){
    return x.split("").reverse().join("");
    }
  
    var strOld = reversing(str);
    var strNew = reversing(strOld);
    if(strOld==strNew)
      {
       return true;
      }
    else
    {return false;
    }  
  
 }

palindrome("eye");
