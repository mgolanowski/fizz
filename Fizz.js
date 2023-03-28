
function fizzbuzz() {
    for (let i = 1; i <= 50; i++) {
      let fizzbuzz = "";

        if (i % 3 === 0 && i % 5 === 0) {
            return 'fizzbuzz';
        }
        if (i % 3 === 0) {
            return 'fizz';
        }
        if (i % 5 === 0) {
            return 'buzz';
        }
        else { 
            console.log(fizzbuzz);
        }
    
     
    }
  }

module.exports = fizzbuzz()