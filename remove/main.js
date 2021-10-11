/* function substring(text, start, stop){
    let output = "";
    for(let i = start; i <= stop; i++){
      output += text[i]
    }
    return output;
  } */

 /*  function subString(text, start, stop){
    let output = text.substring(start, stop);
    return output;

} */

let str = "ababababababab"
let output = str.substring(3, 7);



/* function remove(str, otherString){
    let output = "";
    for(let i = 0; i < str.length; i++){
      const sub = subString(str, i, i + otherString.length - 1);
      if(sub != otherString){
        output += str[i];
      }else{
        i += otherString.length - 1;
      }
    }
    return output;
  }



remove("salam kalam", "kalam") */