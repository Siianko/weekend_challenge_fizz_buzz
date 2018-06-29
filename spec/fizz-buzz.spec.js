const { FizzBuzz } = require( './spec.helper' )

describe('FizzBuzz', () => {
    let fizzBuzz = new FizzBuzz

    it('returns number if no rules of the game are met', () => {
       expect(fizzBuzz.check(1)).to.eql(1)
    })

    it('returns fizz if the number is divisable by 3', () => {
       expect(fizzBuzz.check(3)).to.eql('fizz')
    })

    it('returns buzz if the number is divisable by 5', () => {
        expect(fizzBuzz.check(5)).to.eql('buzz')
     })

    it('returns fizz-buzz if the number is divisable by 5', () => {
        expect(fizzBuzz.check(15)).to.eql('fizz-buzz')
    })
})