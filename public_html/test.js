var expect = chai.expect;

//describe('soma', function(){
//    it('deve retornar 4 quando passar 2 e 2', function(){
//        var resultado = soma(2, 2);
//        expect(resultado).to.be.equal(4);
//    });
//    it('deve retornar 5 quando passar 2 e 3', function(){
//        var resultado = soma(2, 3);
//        expect(resultado).to.be.equal(5);
//    });
//});

describe('collatz', function () {
    it('deve retornar [1, 4, 2, 1] se receber 1', function () {
        var resultado = collatz(1);
        expect(resultado).to.deep.equal([1, 4, 2, 1]);
    });

    it('deve retornar [2, 1] se receber 2', function () {
        var resultado = collatz(2);
        expect(resultado).to.deep.equal([2, 1]);
    });

    it('deve retornar [3, 10, 5, 16, 8, 4, 2, 1] se receber 3', function () {
        var resultado = collatz(3);
        expect(resultado).to.deep.equal([3, 10, 5, 16, 8, 4, 2, 1]);
    });

    it('deve retornar [4, 2, 1] se receber 4', function () {
        var resultado = collatz(4);
        expect(resultado).to.deep.equal([4, 2, 1]);
    });

    it('deve retornar [5, 16, 8, 4, 2, 1] se receber 5', function () {
        var resultado = collatz(5);
        expect(resultado).to.deep.equal([5, 16, 8, 4, 2, 1]);
    });

    it('deve retornar [6, 3, 10, 5, 16, 8, 4, 2, 1] se receber 6', function () {
        var resultado = collatz(6);
        expect(resultado).to.deep.equal([6, 3, 10, 5, 16, 8, 4, 2, 1]);
    });

    it('deve retornar [7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1] se receber 7', function () {
        var resultado = collatz(7);
        expect(resultado).to.deep.equal([7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1]);
    });

    it('deve retornar [8, 4, 2, 1] se receber 8', function () {
        var resultado = collatz(8);
        expect(resultado).to.deep.equal([8, 4, 2, 1]);
    });

    it('deve retornar [13, 40, 20, 10, 5, 16, 8, 4, 2, 1] se receber 13', function () {
        var resultado = collatz(13);
        expect(resultado).to.deep.equal([13, 40, 20, 10, 5, 16, 8, 4, 2, 1]);
    });
});
