count = 100;
const symbol = ['\r|    ','\r/    ', '\r-  ','\r\\   ', '\r|    ','\r|    ','\r/    ', '\r-  ','\r\\   ', '\r|    '];
for(let element of symbol){
  setTimeout(()=>{process.stdout.write(`${element}`);},count);
  count +=200;
}