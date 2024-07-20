function printDan(dan) {
    for(let i = 2; i <= 9; i++) {
        console.log(`${dan} * ${i} = ${dan * i}`);
    }
}

function printAllDan() {
    for(let i = 2; i <= 9; i++) {
        printDan(i);
        console.log("=======================================");
    }
}
for(let i =1; i<10; i++){
    for(let j=1; j<10; j++){
      console.log(i+"*"+j+"="+"i*j");
    }
    console.log("====================")
  }