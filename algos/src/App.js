import logo from './logo.svg';
import './App.css';

function App() {
  var findRepeatedDnaSequences = function(s) {
    let  tenStrArr=[]
    let startingLetters = ['A','C','G','T']
    
        for(let i =0; i <= s.length -10; i++){
            if(startingLetters.includes(s[i])){
              let newStr= ""
              console.log(s)
           newStr = s.slice(i, i + 10 )
            tenStrArr.push(newStr)
            console.log(tenStrArr)  
            }
           
        }
        const findDupes = array => array.filter((item, index) => array.indexOf(item) !== index)
        const repeatedDna = findDupes(tenStrArr)
        console.log(repeatedDna)
        return(repeatedDna)
    };

   let ss = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
  return (
    <div className="App">
      {findRepeatedDnaSequences(ss)}
    </div>
  );
}

export default App;
