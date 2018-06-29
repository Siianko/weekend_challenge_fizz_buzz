function FizzBuzz() {
   const hasZeroRemainder = (number, divider) => {
       return (number % divider) === 0;
   }
   
    this.check = (number) => {
        if(hasZeroRemainder(number, 15)) {
            return 'fizz-buzz';
        } else if(hasZeroRemainder(number, 5)) {
        return 'buzz';
        } else if(hasZeroRemainder(number, 3)) { 
            return 'fizz';
        } else { 
        return number;
        }
    }
}
