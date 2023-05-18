
let converter = {
  'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
  'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
  'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
  'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
  'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
  'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
  'э': 'e',    'ю': 'yu',   'я': 'ya',
  
  'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
  'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
  'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
  'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
  'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
  'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
  'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
};

function transliterationCountWord(word, testString1){
  let convertedString = '';
  let convertedWord = '';
  const wordLenght = word.length;
  let count = 0;
  for( let i = 0; i < testString1.length; i ++){
    if( converter[testString1[i]]){
      convertedString += converter[testString1[i]];
    } else {
      convertedString += testString1[i];
    }
    if(i < wordLenght){
      if( converter[word[i]]){
        convertedWord += converter[word[i]];
      } else {
        convertedWord += word[i];
      }
    }
  }
  
  convertedString.split(' ').forEach((item, index) => {
    if( item === convertedWord){
      count += 1;
    }
  })

  console.log(count) 
  return count
}


const testString = `bекon aрbуz прiveт бекоз привет ананас бекон привет arбуз привет pривет арбуз праект бирка кокак урбанизация правый kalиtка проект хлеп ашипка антена proект хлеб arka`

transliterationCountWord('бекон', testString)    // -> 2
transliterationCountWord('арбуз', testString)    // -> 3
transliterationCountWord('привет', testString)   // -> 4
transliterationCountWord('проект', testString)   // -> 2
