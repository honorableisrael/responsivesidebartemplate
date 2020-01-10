// var hello = "hello" //ellohay

// const returnGreeting = (x) =>{
//     let leng = x.length;
//     let stringstart = x.substr(0,1);
//     let stringleft = x.substr(1,leng);
//     return (stringleft + stringstart +"ay");
// }

// // const returnGreeting = (x) =>{
//         let StringToArray = x.split('');
//         let startString = StringToArray[0];
//         StringToArray.shift();
//         return (StringToArray.join('') + startString + "ay");
// //     }
// let c = Array.from({length: 10}, (v, k) => k+1).join(''); 
// // console.log(c);
// const a = returnGreeting(c)
// returnGreeting(hello)
// console.log(a)

// let users = { firstname:'Carl JohnSon',oldaddress:'Plot 34 lead way street yaba'}
// let newUser = {name:'Mercy Johnson',address:'No 22 aremu close lagos island'}

// let allUsers = Object.assign(users,newUser)
// console.log(allUsers)

// const user = 'Tony is a boy'
//  console.log(user.startsWith('Tony')) //returns true or false

// const str = "hello world"
 //const res = str.substr(1,4)//ello
// const res = str.split(' ')
//  console.log([...res[0]].splice(1).join('')) //ello
// console.log([...str].reverse().join('')) reverse all the words in the string

// function firstLetterToCapitalLetter (str) {
//     let firstLetter = str.substring(0,1)
//     // console.log(firstLetter)
//     let theRestOftheletter = str.substring(1,str.length)
//     let CapitalizedFirstLetter = str.substring(0,1).toUpperCase()
//    return CapitalizedFirstLetter + theRestOftheletter
// }
// console.log(firstLetterToCapitalLetter('smart'))
// const newArray = ['orange','banana','lettuce']
// const str = 'there is an ass in the class did you see it' 
//  const result = str.search(/ass/g)
//     console.log(result)
// console.log('slice '+str.slice(1,5)) 
// console.log('substring ' + str.substring(1,5))
// const res = str.slice(1,2)//returns ['banana']
// const res = newArray.splice(1,2)//returns [ 'banana', 'lettuce' ]
// console.log(res)
// const unknown = {"status":"00","wallet_balance":"-5000.000"}
// console.log(unknown)


//find the factorial of an argument
// function myFun(x){
//     var arrayOfNum = []      //create an empty array
//     while( x!==0 ){  
//     arrayOfNum.push(x)       //while x is not equal to zero this would loop for a argument less than x and push all into arrayOfNum
//        x--
//     }
//    let result =  arrayOfNum.reduce((x,y)=>{
//        const res = parseInt(x * y)               //multiply allthe values before and after in the arrayOfNum to get the factorial
//         return res                               //return res
//     })
//    return result
// }
// // console.log(myFun(10))

// function LongestWord(sen) { 
//     var result = ''
//     var filterWords = sen.replace(/&!!?/g,'')                //replace characters in the string
//     var arrayOfWords = filterWords.split(' ')               //split words into array
//     let lenthOfEachWord = arrayOfWords.map(word=>{          ///create an array of length of each string
//         return word.length
//     })
//     // console.log(lenthOfEachWord)
//     var valueOfLongestStringIs = Math.max(...lenthOfEachWord) //find the highest length and save in variable
//     return result = arrayOfWords.find(element => {              //find and return the first word that has same value as the longest string
//             if(element.length === valueOfLongestStringIs){      
//               return element
//             }
//         });

//   }
//   console.log(LongestWord("fun&!! time againss agais joyfu child"));


// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
// function LetterChanges(str,shift=1) { 
//       var alphatbet = ['a','b','c','d',"e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x",'y','z']
//       var vowel = ["a","e","i","o","u"]
//       var result = []
//       var IndexToVowel = []
//        var arrayOfArgz = str.split("")
//         const firstResult =  arrayOfArgz.forEach((word=>{             //loop through the arg array
//          alphatbet.findIndex(((alphabetLettr,index)=>{               //find the index of each letter in the alphabet
//            const totalPossibleIndexInAlphabFromAtoZ = alphatbet.length - 1
//            if(word===alphabetLettr){                                  //compare matching elements 
//              const shiftLettersBy = (index + shift)>totalPossibleIndexInAlphabFromAtoZ?((index + shift)-totalPossibleIndexInAlphabFromAtoZ):(index + shift)    //check if the index is to shift letters to is greater than the available index on the alphebets a-z
//             result.push(alphatbet[shiftLettersBy])
//              vowel.findIndex((letter,i)=>{
//               if(letter===alphatbet[shiftLettersBy]){
//                 console.log(letter.toUpperCase())
//               }
//             })
//            }
//          }))
//        }))
//        return result
//     }
//   console.log(LetterChanges('helloz*3',1));

//changer letter matching vowels to uppercase method 1
// function changeVowelToUpperCase (word) {
//   var vowel = ["a","e","i","o","u"]
//   var vowelSingleWord = vowel.join('')
//   let newArray = word.split('')
//     let result = newArray.map(element => {
//         if(vowelSingleWord.indexOf(element)>-1){
//             return element.toUpperCase()
//         }
//         else{
//             return element
//         }
//     //    return (vowelSingleWord.indexOf(element)>-1)? element.toUpperCase():'empty'
//     });
//     return result;
// }
// keep this function call here 
// console.log(changeVowelToUpperCase('i am hilary'))


// function changeVowelToUpperCase (word) {
//     var vowel = ["a","e","i","o","u"]
//     var vowelSingleWord = vowel.join('')
//     let newArray = word.split('')
//       let result = newArray.map(element => {
//        return vowel.forEach(word=>{
//             if(word===element){
//                 return element.toUpperCase();
//             }
//             else{
//                 return element;
//             }
//         })
//       });
//       return result;
//   }
//   // keep this function call here 
//   console.log(changeVowelToUpperCase('i am hilary'))
  

// var dayArray = ['1','2','3','4','5']
// var courseWork = ['4','6','13','11','14']
// for (let i = 0; i < dayArray.length; i++) {
//       for (let j = 0; j < courseWork.length; j++) {
//             if( courseWork[j] === dayArray[i]){
//             console.log(courseWork[j])
//             }
//       }
// }
//check if this word stored in errText is contained in the variable
// const word = 'Duplicate entry  is the error '
// const errText = 'Duplicate entry'
// const result = word.includes(errText)
// console.log(result)


// capitalize the firstletter of every sentence in a string
// function ChangeTheFirstLetterToCapitalInEveryWord (argz){
//     const splitTheSentenceIntoArray = argz.split(' ')
//     const result = splitTheSentenceIntoArray.map(word=>{
//         return word[0].toUpperCase() + word.substring(1,word.length)
//     })
//     return result.join(' ')
// }
// console.log(ChangeTheFirstLetterToCapitalInEveryWord('my name is hilary and i am a developer'))
const users = [
    { 
      name:"Hilary", 
      occupation:'software engineer',
    },
    {
      name:"Alex",
      occupation:'Web Developer',
    }
];

//creating a promise
//  var isMumHappy = true;

//  let willGetNewPhone = new Promise(
//      (resolve,reject)=>{
//          if(isMumHappy){
//              const newPhone = {
//                  name:"Iphone",
//                  version:"X",
//                  color:'Silver'
//              }
//              resolve(newPhone)
//          }
//          else{
//             const reason = new Error("Mum is not happy");
//             reject(reason)
//          }
//      }
//  )

// //  consuming the promise
// let askMum = () =>{
//     willGetNewPhone
//     .then((fulfiled)=>{
//         console.log("Mum has bought you a new phone" + fulfiled.toString());
//     })
//     .catch((rejected)=>{
//         console.log(rejected.message);
//     })
// }
// askMum()

// /_ ES7 _/
// const isMomHappy = true;

// // Promise
// const willIGetNewPhone = new Promise(
//     (resolve, reject) => {
//         if (isMomHappy) {
//             const phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };
//             resolve(phone);
//         } else {
//             const reason = new Error('mom is not happy');
//             reject(reason);
//         }

//     }
// );

// // 2nd promise
// async function showOff(phone) {
//     return new Promise(
//         (resolve, reject) => {
//             var message = 'Hey friend, I have a new ' +
//                 phone.color + ' ' + phone.brand + ' phone';

//             resolve(message);
//         }
//     );
// };

// call our promise
// async function askMom() {
//     try {
//         console.log('before asking Mom');

//         let phone = await willIGetNewPhone;
//         let message = await showOff(phone);

//         console.log(message);
//         console.log('after asking mom');
//     }
//     catch (error) {
//         console.log(error.message);
//     }
// }

// (async () => {
//     await askMom();
// })();