function chese(height, width) {
  let firstLine = '';
  let secondLine ='';
  for(let i = 0; i < width; i++) {
    if(i % 2){
      firstLine += '#';
      secondLine += '_';
    } else {
      firstLine += '_';
      secondLine += '#'
    }
  }
  for (let i = 0; i < height; i++) {
    if(i % 2 === 0) {
      console.log(firstLine);
    } else {
      console.log(secondLine);
    }
  }
}

chese(2000,2000);
