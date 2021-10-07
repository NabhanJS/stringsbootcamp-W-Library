function removeChar(text, char){
    let output = "";
    for(let currentChar of text){
        if(currentChar != char){
            output = output + currentChar

        }

    }
    return output;

}

removeChar("salam", "m")