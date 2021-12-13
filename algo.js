var findRepeatedDnaSequences = function(s) {
    let  tenStrArr=[]
    let startingLetters = ['A','C','G','T']
    
        for(i =0; i <= s.length; i++){
            if(startingLetters.includes(s[i]) && s[i] < s[-9]){
              let newStr= ""
           newStr = s.splice(i, i + 10 )
            tenStrArr.push(newStr)  
            }
           return(tenStrArr)
        }
        
        
    };