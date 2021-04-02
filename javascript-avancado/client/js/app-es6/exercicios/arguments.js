//rest operator
// função aceita vários parametros em vez de limitar a enviar um array
class Teste{
    teste(...props){

    }
}

//spread operator
// Desconstroi o array
let teste = new Teste();
let array = [1,2,3,4,5];

teste.teste(...array);