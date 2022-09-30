/* 
nome do prato "String"
Tempo de preparo Number
Porcoes Number
Ja fez? Boolean
Tipo String
Avaliação pessoal Number
ingredientes Array de Object
Modo de preparo Array

*/
const todasAsReceitas = [];


receita1 = {
    nomeDoPrato: "Camarão na Moranga",
    tempoDePreparo: 90,
    porcoes: 6,
    tipo: "Frutos do mar",
    jaFez: true,    
    ingredientes: [
        {
            nomeDoingrediente: "Camarão",
            quantidade: 1,
            medida: "Kg"
        },
        {
            nomeDoingrediente: "Azeite",
            quantidade: 4,
            medida: "Colheres de Sopa"
        },
        {
            nomeDoingrediente: "Alho",
            quantidade: 2,
            medida: "Dentes"
        },
        {
            nomeDoingrediente: "Cebola",
            quantidade: 1,
            medida: "Und."
        },
        {
            nomeDoingrediente: "Tomate sem sementes",
            quantidade: 5,
            medida: "Und."
        },
        {
            nomeDoingrediente: "Sal e Pimenta-do-reino",
            quantidade: "",
            medida: "A gosto"
        },
        {
            nomeDoingrediente: "Creme de leite s/ soro",
            quantidade: 1,
            medida: "Lata"
        },
        {
            nomeDoingrediente: "Requeijão cremoso",
            quantidade: 300,
            medida: "g"
        },
        {
            nomeDoingrediente: "Moranga",
            quantidade: 1,
            medida: "Und."
        },
        {
            nomeDoingrediente: "Cheiro-verde",
            quantidade: "",
            medida: "A gosto"
        },
        {
            nomeDoingrediente: "Ketchup",
            quantidade: 3,
            medida: "Colheres de sopa"
        },
    ],
    modoDePreparo: ["Retire a tampa e as sementes da moranga.",
        "Lave e enrole-a em papel alumínio e leve ao forno médio (180° C) por 45 minutos.",
        "Em uma panela, aqueça o azeite e refogue o alho e a cebola, junte o camarão e deixe cozinhar por 5 minutos.",
        "Adicione os tomates picados, a pimenta, o sal e o ketchup.",
        "Desligue o fogo e acrescente o creme de leite e o cheiro-verde.",
        "Misture bem e adicione por último o requeijão.",
        "Passe um pouco de requeijão no interior da moranga e despeje o creme de camarão."],
    
    linkImagem: "./assets/camarao-na-moranga/camarao-na-moranga-1.png",
};
receita2 = {
    nomeDoPrato: "Molho branco",
    tempoDePreparo: 30,
    porcoes: 8,
    tipo: "Molho",
    jaFez: true,    
    ingredientes: [
        {
            nomeDoingrediente: "Cebola pequena",
            quantidade: 1,
            medida: "Und."
        },
        {
            nomeDoingrediente: "Margarina",
            quantidade: 1,
            medida: "Colheres de Sopa"
        },
        {
            nomeDoingrediente: "Creme de leite",
            quantidade: 1,
            medida: "Caixa"
        },
        {
            nomeDoingrediente: "Leite",
            quantidade: 500,
            medida: "ml"
        },
        {
            nomeDoingrediente: "Amido de milho",
            quantidade: 1,
            medida: "Colher de sopa"
        },
        {
            nomeDoingrediente: "Queijo parmesão ralado",
            quantidade: 1,
            medida: "Xícara"
        },
        {
            nomeDoingrediente: "Pimenta-do-reino",
            quantidade: "",
            medida: "A gosto"
        },
        {
            nomeDoingrediente: "Sal",
            quantidade: 1,
            medida: "Colher de sobremesa"
        },
    ],

    modoDePreparo: ["Em uma panela, derreta a margarina e acrescente a cebola, o sal e a pimenta-do-reino.",
        "Quando a cebola estiver bem transparente, acrescente o creme de leite e misture.",
        "Dissolva o amido no leite e adicione ao molho.",
        "Quando o molho estiver com uma consistência firme, desligue o fogo e acrescente o queijo, mexendo bem, para ele não grudar.",
        "Sirva com macarrão ou arroz de forno."],

    linkImagem: "./assets/molho-branco/molho-branco-1.png",
};
receita3 = {
    nomeDoPrato: "Mousse de limão",
    tempoDePreparo: 10,
    porcoes: 10,
    tipo: "Doces",
    jaFez: true,    
    ingredientes: [
        {
            nomeDoingrediente: "Leite condensado",
            quantidade: 1,
            medida: "Lata"
        },
        {
            nomeDoingrediente: "Creme de Leite",
            quantidade: 1,
            medida: "Lata"
        },
        {
            nomeDoingrediente: "Suco de limão",
            quantidade: '1/2',
            medida: "Xícara"
        },
    ],
    modoDePreparo: ["Coloque no liquidificador o creme de leite (com soro mesmo) e o leite condensado.",
        "Bata um pouco e depois vá acrescentando o suco do limão, aos poucos.",
        "Ele vai ficar bem consistente, leve à geladeira."],

    linkImagem: "./assets/musse-de-limao/musse-de-limao-1.png",
};


const novaReceita = (objeto, arrayDeReceitas) => {
    if(objeto.jaFez){
        arrayDeReceitas.push(objeto)
    }else{
        alert(objeto.nomeDoPrato+" não adcionado ao livro pessoal de receita")
    }
}
novaReceita(receita1,todasAsReceitas)
novaReceita(receita2,todasAsReceitas)
novaReceita(receita3,todasAsReceitas)



console.log(todasAsReceitas );
     

for (let a of todasAsReceitas){
    for(let idx in a){
        console.log(`${idx}: ${a[idx]}`);

    }
    a.stringDoObjeto = a.modoDePreparo.join()
}



function devolvendoString (objeto){
    let stringDoObjeto = ""
    const arrayObjeto = []
    for(let i in objeto){
        arrayObjeto.push(objeto[i])
    }
    stringDoObjeto = arrayObjeto.join()   
  
    return stringDoObjeto;

}


devolvendoString (receita1)

function procuraDeReceita(receitaObjeto, qualreceita){
    for(let i in receitaObjeto){       
        if(receitaObjeto[i].nomeDoPrato.toUpperCase() === qualreceita)
        {
            return receitaObjeto[i]

        }
    }
    alert('Receita não encontrada')
    return "Receita não encontrada";
}

const receitaProcurada = prompt('Digite qual receita q vc quer').toUpperCase();

console.log(procuraDeReceita(todasAsReceitas, receitaProcurada));






