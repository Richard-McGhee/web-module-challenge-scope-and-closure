// Stretch 1

// (function(){
//     var a = b = 3;
//   })();
//   console.log("a defined? " + (typeof a !== 'undefined'));
//   console.log("b defined? " + (typeof b !== 'undefined'));

  // A is undefined because it is defined as B but then b is immediately redefined to 3 which makes it it's own variable and no longer related A, I believe

//   Stretch 2

function addSix(num){
    let base = 6;
    return console.log(base += num);
}

addSix(10);
addSix(21);