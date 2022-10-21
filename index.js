
const inputDaPesquisa = document.getElementById('inputPesquisa')
inputDaPesquisa.addEventListener('keyup', (event) => event.keyCode === 13)
let cont
const seletor = document.querySelector('#select')


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

    linkImagem: "./assets/camarao-na-moranga/camarao-na-moranga-2.png",
};
receita2 = {
    nomeDoPrato: "Molho branco para macarão",
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

    linkImagem: "./assets/mousse-de-limao/mousse-de-limao-1.png",
};
receita4 = {
    nomeDoPrato: "Bobó de camarão",
    tempoDePreparo: 60,
    porcoes: 6,
    tipo: "Frutos do Mar",
    jaFez: true,
    ingredientes: [
        {
            nomeDoingrediente: "Camarão fresco",
            quantidade: 1,
            medida: "Kg"
        },
        {
            nomeDoingrediente: "Sal",
            quantidade: '',
            medida: "A gosto"
        },
        {
            nomeDoingrediente: 'Limão',
            quantidade: '1',
            medida: "suco"
        },
        {
            nomeDoingrediente: "Pimenta-do-reino",
            quantidade: '',
            medida: "A gosto"
        },
        {
            nomeDoingrediente: "Madioca",
            quantidade: '1',
            medida: "Kg"
        },
        {
            nomeDoingrediente: "louro",
            quantidade: '1',
            medida: "folha"
        },
        {
            nomeDoingrediente: 'Cebolas',
            quantidade: '3',
            medida: "Und"
        },
        {
            nomeDoingrediente: "Azeite de Oliva",
            quantidade: '6',
            medida: "colheres de sopa"
        },
        {
            nomeDoingrediente: "leite de coco",
            quantidade: '2',
            medida: "vidros"
        },
        {
            nomeDoingrediente: "Cheiro-verde picado",
            quantidade: '1',
            medida: "maço"
        },
        {
            nomeDoingrediente: "Molho pronto de tomate ",
            quantidade: '2',
            medida: "Latas"
        },
        {
            nomeDoingrediente: "Pimentões verdes bem picadinhos",
            quantidade: '2',
            medida: "Und"
        },
        {
            nomeDoingrediente: "Azeite de dendê",
            quantidade: '2',
            medida: "Colheres de sopa"
        },
    ],
    modoDePreparo: ['Lave os camarões e tempere com sal, alho, pimenta e limão, deixe marinar.',
        'Pegue uma panela com água e cozinhe a mandioca em pedacinhos, com louro e a cebola em rodelas.',
        'Quando estiver mole, acrescente um vidro de leite de coco.',
        ' Deixe esfriar um pouco e bata no liquidificador.',
        'Esquente o azeite de oliva, junte a cebola ralada e deixe dourar.',
        'Acrescente os camarões e frite.',
        'Adicione as 2 latas de pomarola, o cheiro-verde, o pimentão e deixe cozinhar por alguns minutos.',
        'Junte na mesma panela, a mandioca batida no liquidificador, outro vidro de leite de coco e o azeite de dendê.',
        'Deixe levantar fervura e está pronto.'],

    linkImagem: './assets/bobo-de-camarao.png',
};

receita5 = {
    nomeDoPrato: "Risoto de camarão",
    tempoDePreparo: 50,
    porcoes: 4,
    tipo: "Frutos do Mar",
    jaFez: true,
    ingredientes: [
        {
            nomeDoingrediente: "Camarão cinza limpo",
            quantidade: 400,
            medida: "g"
        },
        {
            nomeDoingrediente: "Arroz Branco",
            quantidade: '3',
            medida: "Xicaras"
        },
        {
            nomeDoingrediente: 'Caldo de Camarão',
            quantidade: '1',
            medida: "Cubo"
        },
        {
            nomeDoingrediente: "Pimentão verde cortado em cubos pequenos",
            quantidade: '1/2',
            medida: "Xicara"
        },
        {
            nomeDoingrediente: "Tomate sem semente cortado em cubos pequenos",
            quantidade: '1',
            medida: "Und"
        },
        {
            nomeDoingrediente: "Cheiro-verde picado",
            quantidade: '',
            medida: "A gosto"
        },
        {
            nomeDoingrediente: 'Extrato de tomate',
            quantidade: '2',
            medida: "Colheres de sopa"
        },
        {
            nomeDoingrediente: "Alho",
            quantidade: '2',
            medida: "Dentes"
        },
        {
            nomeDoingrediente: "Azeite",
            quantidade: '1',
            medida: "Colher de sopa"
        },
        {
            nomeDoingrediente: "Sal",
            quantidade: '',
            medida: "A gosto"
        },
        {
            nomeDoingrediente: "Limão",
            quantidade: '1/2',
            medida: "Und."
        },
    ],
    modoDePreparo: ['Tempere o camarão com limão e sal, reserve por 10 minutos.',
        'Enquanto isso, faça o arroz, fritando-o muito bem.',
        ' Em seguida, coloque água em uma panela, o suficiente para cobrir o arroz (sobrando uns 2 centímetros a mais do que o arroz no fundo da panela).',
        'Coloque pouco sal, pois o molho do camarão levará o cubo de caldo de camarão.',
        'Cozinhe em fogo baixo até que toda água seque.',
        'Retire do fogo e deixe a tampa da panela aberta (para o arroz não passar do ponto).',
        'E uma frigideira grande, que caiba todo o camarão, doure o alho e coloque todo o camarão sem o suco do limão.',
        'Junte o tomate, o pimentão, o cheiro-verde, o extrato de tomate e o cubo de caldo de camarão.',
        'Adicione um pouco de água, para que tenha molho suficiente para encobrir o camarão na frigideira. Cozinhe em fogo baixo por 5 minutos.',
        'Enquanto isso, retire o arroz e coloque-o em um recipiente de cerâmica ou vidro, solte-o bastante com o garfo.',
        'Junte o molho do camarão e misture, usando em uma das mãos um garfo, e em outra mão uma colher.',
        'Decore com camarões grelhados e coentro, sirva bem quente!'],

    linkImagem: './assets/risoto-de-camarao.png',
};
receita6 = {
    nomeDoPrato: "Pavê de morango com chocolate",
    tempoDePreparo: 40,
    porcoes: 0,
    tipo: "Doces",
    jaFez: true,
    ingredientes: [
        {
            nomeDoingrediente: "Bolacha maisena",
            quantidade: 1,
            medida: "Pacote"
        },
        {
            nomeDoingrediente: "Leite condensado",
            quantidade: '1',
            medida: "Lata"
        },
        {
            nomeDoingrediente: 'Leite',
            quantidade: '1',
            medida: "Lata"
        },
        {
            nomeDoingrediente: "Gemas",
            quantidade: '2',
            medida: "Und"
        },
        {
            nomeDoingrediente: "Farinha de trigo",
            quantidade: '1',
            medida: "Colher de sopa"
        },
        {
            nomeDoingrediente: "Morango",
            quantidade: '2',
            medida: "Xicaras"
        },
        {
            nomeDoingrediente: 'Extrato de baunilha',
            quantidade: '1',
            medida: "Colheres de chá"
        },
        {
            nomeDoingrediente: "Chocolate meio amargo",
            quantidade: '100',
            medida: "g"
        },
        {
            nomeDoingrediente: "Chantilly",
            quantidade: '1',
            medida: "Xicara"
        },

    ],
    modoDePreparo: ['Numa panela, coloque o leite condensado, o leite (reserve um pouco), as gemas levemente batidas, a baunilha e a farinha misturada no leite reservado.',
        'Mexa até engrossar.',
        'Desligue e junte o creme de leite com o soro.',
        ' Divida o creme obtido igualmente em dois refratários.',
        '1º Creme:',
        'No primeiro refratário, junte o chocolate raspado com o creme ainda quente. Mexa até derreter totalmente. Acrescente 1 xícara (chá) de morango picados. Misture e reserve.',
        '2º Creme:',
        'No segundo refratário, junte ao creme chantilly e 1 xícara de (chá) de morangos picados. Misture e reserve.',
        'Montagem:',
        ' Num refratário, coloque na seguinte ordem: o segundo creme, as bolachas, o creme de chocolate (primeiro creme), bolachas, o segundo creme e o primeiro creme.',
        'Por fim, coloque chantilly no saco de confeitar (bico pitanga médio) e decore. Espalhe sobre o pavê.'],
    linkImagem: './assets/pave-de-morango-chocolate.png',
};
receita7 = {
    nomeDoPrato: "Yakisoba da casa",
    tempoDePreparo: 40,
    porcoes: 4,
    tipo: "Massas",
    jaFez: true,
    ingredientes: [
        {
            nomeDoingrediente: "Espaguete",
            quantidade: 300,
            medida: "g"
        },
        {
            nomeDoingrediente: "Cebola grande cortada em pedaços médios",
            quantidade: '1',
            medida: "Und"
        },
        {
            nomeDoingrediente: 'Óleo',
            quantidade: '1',
            medida: "Colher de sopa"
        },
        {
            nomeDoingrediente: "Brócolis",
            quantidade: '1/2',
            medida: "Maço"
        },
        {
            nomeDoingrediente: "Couve-flor",
            quantidade: '1/2',
            medida: "Maço"
        },
        {
            nomeDoingrediente: "Molho shoyu",
            quantidade: '10',
            medida: "Colheres de sopa"
        },
        {
            nomeDoingrediente: 'Carne cortada em tiras',
            quantidade: '400',
            medida: "g"
        },
        {
            nomeDoingrediente: "Champignon",
            quantidade: '100',
            medida: "g"
        },
        {
            nomeDoingrediente: "Cenoura cortada em rodelas",
            quantidade: '1',
            medida: "Und"
        },
        {
            nomeDoingrediente: "Água",
            quantidade: '250',
            medida: "ml"
        },
        {
            nomeDoingrediente: "Amido de milho, dissolvido em 50 ml de água",
            quantidade: '1',
            medida: "Colher de sopa"
        },
        {
            nomeDoingrediente: "Acelga",
            quantidade: '',
            medida: "A gosto"
        },
    ],
    modoDePreparo: ['Cozinhe o macarrão em ponto al dente e reserve.',
        'Em uma panela, adicione o azeite, a cebola, a carne e refogue bem.',
        'Adicione o molho shoyu e cozinhe por 3 minutos em fogo médio.',
        'Acrescente mais água, aguarde levantar fervura e adicione o amido de milho.',
        'Mexa até engrossar, abaixe o fogo e adicione o champignon, a couve-flor, o brócolis e a cenoura.',
        'Cozinhe por 8 minutos e acrescente, por último, a acelga e o macarrão.',
        'Misture bem, acerte o sal e tampe a panela por mais 1 minuto.',
        'Está pronto para servir!'],

    linkImagem: './assets/yakisoba.png',
};
receita8 = {
    nomeDoPrato: "Fricassê de frango",
    tempoDePreparo: 30,
    porcoes: 4,
    tipo: "Aves",
    jaFez: true,
    ingredientes: [
        {
            nomeDoingrediente: "Creme de leite",
            quantidade: '1',
            medida: "Lata"
        },
        {
            nomeDoingrediente: "Milho verde",
            quantidade: '1',
            medida: "Lata"
        },
        {
            nomeDoingrediente: 'Requeijão cremoso',
            quantidade: '1',
            medida: "Copo"
        },
        {
            nomeDoingrediente: "Azeitona sem caroço",
            quantidade: '100',
            medida: "g"
        },
        {
            nomeDoingrediente: "Frango desfiados",
            quantidade: '2',
            medida: "Peitos"
        },
        {
            nomeDoingrediente: "Mussarela fatiada",
            quantidade: '200',
            medida: "g"
        },
        {
            nomeDoingrediente: 'Batata palha',
            quantidade: '100',
            medida: "g"
        },
        {
            nomeDoingrediente: "Água",
            quantidade: '1',
            medida: "Xícara"
        },
        {
            nomeDoingrediente: "Sal",
            quantidade: '',
            medida: "A gosto"
        },

    ],
    modoDePreparo: ['Bata no liquidificador o milho, o requeijão, o creme de leite e a água.',
        'Refogue o creme do liquidificador com o frango desfiado, as azeitonas e o sal até ficar com uma textura espessa.',
        'Coloque o refogado numa assadeira, cubra com mussarela e espalhe a batata palha por cima.',
        'Leve ao forno até borbulhar.',
        'Sirva com arroz branco.'],

    linkImagem: './assets/fricasse-de-frango.png',
};
receita9 = {
    nomeDoPrato: "Frango com quiabo",
    tempoDePreparo: 20,
    porcoes: 8,
    tipo: "Aves",
    jaFez: true,
    ingredientes: [
        {
            nomeDoingrediente: "Frango, limpo e cortado a passarinho",
            quantidade: 1,
            medida: "Kg"
        },
        {
            nomeDoingrediente: "Óleo",
            quantidade: '2',
            medida: "Colheres de sopa"
        },
        {
            nomeDoingrediente: 'Cebola ralada',
            quantidade: '1',
            medida: "Und"
        },
        {
            nomeDoingrediente: "Alho amassado",
            quantidade: '2',
            medida: "Dentes"
        },
        {
            nomeDoingrediente: "Pimenta do reino, cheiro verde picadinho",
            quantidade: '',
            medida: "A gosto"
        },
        {
            nomeDoingrediente: "Quiabo picado",
            quantidade: '400',
            medida: "g"
        },
        {
            nomeDoingrediente: 'Sal',
            quantidade: '',
            medida: "A gosto"
        },

    ],
    modoDePreparo: ['Em uma panela coloque óleo e vá fritando o frango aos poucos.',
        'Reserve.',
        ' Na mesma panela que fritou o frango coloque alho, cebola, pimenta, sal e refogue o quiabo deixe dourar mexendo de vez em quando.',
        'Depois que o quiabo estiver dourado junte o frango e deixe cozinhar com a panela tampada até ficarem macios.',
        'Adicione 1 xícara de chá de água para formar caldinho depois de tudo bem cozido retire e sirva com angu.',
        'É tudo de bom.'],

    linkImagem: './assets/frango-com-quiabo.png',
};

receita10 = {
    nomeDoPrato: "Escondidinho de carne seca",
    tempoDePreparo: 60,
    porcoes: 6,
    tipo: "Carnes",
    jaFez: true,
    ingredientes: [
        {
            nomeDoingrediente: "Mandioca cozida",
            quantidade: '1',
            medida: "Kg"
        },
        {
            nomeDoingrediente: "creme de leite com soro",
            quantidade: '1',
            medida: "Lata"
        },
        {
            nomeDoingrediente: 'Margarina',
            quantidade: '2',
            medida: "Colheres de sopa"
        },
        {
            nomeDoingrediente: "Carne-seca dessalgada e cozida",
            quantidade: '1/2',
            medida: "Kg"
        },
        {
            nomeDoingrediente: "Cebola média picadinha",
            quantidade: '1',
            medida: "Und"
        },
        {
            nomeDoingrediente: "Alho esmagados",
            quantidade: '4',
            medida: "Dentes"
        },
        {
            nomeDoingrediente: 'Tomates sem casca e picados',
            quantidade: '2',
            medida: "Und"
        },
        {
            nomeDoingrediente: 'Sal e pimenta',
            quantidade: '',
            medida: "A gosto"
        },
        {
            nomeDoingrediente: 'Queijo ralado',
            quantidade: '',
            medida: "A gosto"
        },

    ],
    modoDePreparo: ['Esprema a mandioca ainda quente e leve em uma panela com a margarina e sal.',
        'Quando estiverem bem misturados acrescente o creme de leite, misture e reserve.',
        'Refogue a cebola e o alho em um fio de azeite.',
        'Acrescente a carne-seca desfiada e deixe fritar um pouco.',
        'Acrescente os tomates e deixe cozinhar até ficarem murchos e acerte o sal se achar necessário.',
        'Em um refratário untado com azeite, coloque uma camada do purê de mandioca, a carne seca e termine com o restante do purê.',
        'Polvilhe com queijo parmesão ralado e leve ao forno pra gratinar.'],

    linkImagem: './assets/escondidinho-de-carne-seca.png',
};




todasAsReceitas.push(receita1)
todasAsReceitas.push(receita2)
todasAsReceitas.push(receita3)
todasAsReceitas.push(receita4)
todasAsReceitas.push(receita5)
todasAsReceitas.push(receita6)
todasAsReceitas.push(receita7)
todasAsReceitas.push(receita8)
todasAsReceitas.push(receita9)
todasAsReceitas.push(receita10)





const procuraDropDown = []
let receitaProcurada = [...todasAsReceitas]
for (let nome of todasAsReceitas) {
    procuraDropDown.push(nome.nomeDoPrato)
}
procuraDropDown.sort((a, b) => a.toLowerCase() < b.toLowerCase() ? -1 : 1)




impressao()







function impressao() {

    for (let index in receitaProcurada) {

        const criandoImageScroller = document.createElement('img')
        const divScroller = document.getElementById('image-container')
        // <a href="#contato">
        const criandoLink = document.createElement('a')
        criandoLink.setAttribute('href', `#${receitaProcurada[index].nomeDoPrato}`)
        criandoLink.setAttribute('class', 'ancoraImagem')

        criandoImageScroller.setAttribute('class', 'imagemScroller')
        criandoImageScroller.setAttribute('src', receitaProcurada[index].linkImagem)
        divScroller.insertAdjacentElement('beforeend', criandoLink)
        criandoLink.insertAdjacentElement('beforeend', criandoImageScroller)

        /*************************************DIV NOME_DA_RECEITA */

        const criandoASecao = document.createElement('section')
        criandoASecao.setAttribute('class', 'receita')
        criandoASecao.setAttribute('id', receitaProcurada[index].nomeDoPrato)

        const referenciabase = document.getElementById('main')
        referenciabase.insertAdjacentElement('afterbegin', criandoASecao)

        /*************************************CRIACAO DO PRIMEIRO DIV */
        const criandoDivNomeReceita = document.createElement('div')
        criandoDivNomeReceita.setAttribute('class', 'nome-da-receita')
        criandoASecao.insertAdjacentElement('beforeend', criandoDivNomeReceita)

        const criandolinknaReceita = document.createElement('a')
        criandolinknaReceita.setAttribute('class', 'receitalink')
        criandolinknaReceita.setAttribute('href', receitaProcurada[index].linkImagem)
        criandoDivNomeReceita.insertAdjacentElement('beforeend', criandolinknaReceita)

        const crinadoNomedoPratoH2 = document.createElement('h2')
        crinadoNomedoPratoH2.setAttribute('class', 'nome-do-prato')
        crinadoNomedoPratoH2.innerText = receitaProcurada[index].nomeDoPrato
        criandolinknaReceita.insertAdjacentElement('beforeend', crinadoNomedoPratoH2)

        /**************CRIANDO DIVI VISUAL******************************** */
        const criandoumaDivVisual = document.createElement('div')
        criandoumaDivVisual.setAttribute('class', 'visual')
        criandoASecao.insertAdjacentElement('beforeend', criandoumaDivVisual)
        const criandoImagemVisual = document.createElement('img')
        criandoImagemVisual.setAttribute('class', 'imagem')
        criandoImagemVisual.setAttribute('src', receitaProcurada[index].linkImagem)
        criandoImagemVisual.setAttribute('alt', 'Falha ao carregar')
        criandoumaDivVisual.insertAdjacentElement('beforeend', criandoImagemVisual)

        const criandoDivTabela = document.createElement('div')
        criandoDivTabela.setAttribute('class', 'tabela')
        criandoumaDivVisual.insertAdjacentElement('beforeend', criandoDivTabela)


        /***************TABELA INFO*********** */
        const criandoUlTableHead = document.createElement('ul')
        criandoUlTableHead.setAttribute('class', 'tabela-head')
        criandoDivTabela.insertAdjacentElement('beforeend', criandoUlTableHead)


        const novaLinhaUlTempo = document.createElement('li')
        novaLinhaUlTempo.innerText = 'Tempo'
        criandoUlTableHead.insertAdjacentElement('beforeend', novaLinhaUlTempo)
        const novaLinhaUlTPorcao = document.createElement('li')
        novaLinhaUlTPorcao.innerText = 'Porção'
        criandoUlTableHead.insertAdjacentElement('beforeend', novaLinhaUlTPorcao)
        const novaLinhaUlTipo = document.createElement('li')
        novaLinhaUlTipo.innerText = 'Tipo'
        criandoUlTableHead.insertAdjacentElement('beforeend', novaLinhaUlTipo)
        /*****************Tabela Base */

        const criarCorpoTabela = document.createElement('ul')
        criarCorpoTabela.setAttribute('class', 'tabela-info')
        criandoDivTabela.insertAdjacentElement('beforeend', criarCorpoTabela)


        const tempoInfo = document.createElement('li')
        const porcaoInfo = document.createElement('li')
        const tipoInfo = document.createElement('li')
        tempoInfo.innerText = receitaProcurada[index].tempoDePreparo
        porcaoInfo.innerText = receitaProcurada[index].porcoes
        tipoInfo.innerText = receitaProcurada[index].tipo
        criarCorpoTabela.insertAdjacentElement('beforeend', tempoInfo)
        criarCorpoTabela.insertAdjacentElement('beforeend', porcaoInfo)
        criarCorpoTabela.insertAdjacentElement('beforeend', tipoInfo)

        /**************************BOX INGREDIENTES***************** */
        const criandoDivIngredientes = document.createElement('div')
        criandoDivIngredientes.setAttribute('class', 'info')
        criandoASecao.insertAdjacentElement('beforeend', criandoDivIngredientes)
        const divTituloDoIngrediente = document.createElement('div')
        divTituloDoIngrediente.setAttribute('class', 'titulo-ingredientes')
        criandoDivIngredientes.insertAdjacentElement('beforeend', divTituloDoIngrediente)

        const h3TituloDoIngrediente = document.createElement('h3')
        const strongH3 = document.createTextNode('Ingredientes')
        h3TituloDoIngrediente.appendChild(strongH3)
        divTituloDoIngrediente.insertAdjacentElement('beforeend', h3TituloDoIngrediente)

        const tabelaDosIngredientes = document.createElement('ul')
        tabelaDosIngredientes.setAttribute('class', 'ingredientes-tabela')
        criandoDivIngredientes.insertAdjacentElement('beforeend', tabelaDosIngredientes)


        //************************FOR INGREDIENTES **************************/


        for (let i in receitaProcurada[index].ingredientes) {
            const receitaIngredientes = document.createTextNode(`${receitaProcurada[index].ingredientes[i].quantidade} ${receitaProcurada[index].ingredientes[i].medida} de ${receitaProcurada[index].ingredientes[i].nomeDoingrediente}`)
            const elementoDeReferenciaIngredientes = document.getElementsByClassName('ingredientes-tabela')
            const novaLinha = document.createElement('li')
            novaLinha.appendChild(receitaIngredientes)
            elementoDeReferenciaIngredientes[0].insertAdjacentElement('beforeend', novaLinha)
        }

        /*************************CRIACAO CONTEINER MODO  DE PREPARO******************/


        const divModoDePreparo = document.createElement('div')
        divModoDePreparo.setAttribute('class', 'modo-preparo')
        criandoASecao.insertAdjacentElement('beforeend', divModoDePreparo)

        const divTiruloPreparo = document.createElement('div')
        divTiruloPreparo.setAttribute('class', 'titulo-modo')
        divModoDePreparo.insertAdjacentElement('beforeend', divTiruloPreparo)

        const h3ModoDePreparo = document.createElement('h3')
        h3ModoDePreparo.innerText = 'Modo de Preparo';
        divTiruloPreparo.insertAdjacentElement('beforeend', h3ModoDePreparo)

        const divTextoModoDePreparo = document.createElement('div')
        divTextoModoDePreparo.setAttribute('class', 'texto-modo-de-preparo')
        divModoDePreparo.insertAdjacentElement('beforeend', divTextoModoDePreparo)

        const listaModoDePreparo = document.createElement('ol')
        listaModoDePreparo.setAttribute('class', 'lista-modo-de-preparo')
        divTextoModoDePreparo.insertAdjacentElement('beforeend', listaModoDePreparo)

        //***************************************FOR MODO DE PREPARO */
        for (let k in receitaProcurada[index].modoDePreparo) {
            const elementoDeReferenciaModoDePreparo = document.getElementsByClassName('lista-modo-de-preparo');
            const textoNovaLinhaModo = document.createTextNode(receitaProcurada[index].modoDePreparo[k])
            const novaLinhaModoPreparo = document.createElement('li')
            novaLinhaModoPreparo.appendChild(textoNovaLinhaModo)
            elementoDeReferenciaModoDePreparo[0].insertAdjacentElement('beforeend', novaLinhaModoPreparo)
        }
    }

}














function input(event) {
    let baseselecao = [...todasAsReceitas]
    const selectBar = seletor.selectedIndex

    switch (selectBar) {
        case 0:
            baseselecao = [...todasAsReceitas]

            break;
        case 1:
            baseselecao = todasAsReceitas.filter((valor) => valor.tipo === 'Aves')

            break;
        case 2:
            baseselecao = todasAsReceitas.filter((valor) => valor.tipo === 'Carnes')

            break;
        case 3:
            baseselecao = todasAsReceitas.filter((valor) => valor.tipo === 'Doces')

            break;
        case 4:
            baseselecao = todasAsReceitas.filter((valor) => valor.tipo === 'Frutos do Mar')

            break;
        case 5:
            baseselecao = todasAsReceitas.filter((valor) => valor.tipo === 'Massas')

            break;
        case 6:
            baseselecao = todasAsReceitas.filter((valor) => valor.tipo === 'Molho')

            break;
        default:
            console.log('nao deu');
            break;
    }



    cont = 0
    const tamanho = receitaProcurada.length
    receitaProcurada = []
    const secoesParaDestuir = document.getElementsByClassName('receita')
    const imagensParadestruir = document.getElementsByClassName('ancoraImagem')
    for (let i = 0; i < tamanho; i++) {
        secoesParaDestuir[0].remove()
        imagensParadestruir[0].remove()
    }

    for (let j in baseselecao) {

        baseselecao[j].jaFez = false
    }

    let novaInputTexto = inputDaPesquisa.value.trim();

    const palavras = novaInputTexto.split(' ')
    let frase = ''


    if (palavras[0].length > 1) {

        if (palavras.length === 1) {
            for (let word of palavras) {

                word = word.toLowerCase().replace('ã', 'a').replace('ç', 'c').replace('á', 'a').replace('à', 'a').replace('é', 'e').replace('ó', 'o').replace('ò', 'o').replace('ê', 'e')
                word = testeDicionario(word)



                receitaProcurada = baseselecao.filter((valor) => {
                    const nome = valor.nomeDoPrato.toLowerCase().replace('ã', 'a').replace('ç', 'c').replace('á', 'a').replace('à', 'a').replace('é', 'e').replace('ó', 'o').replace('ò', 'o').replace('ê', 'e')
                    return nome.includes(word)
                })
            }




        } else {
            console.log("entrou else");


            if (palavras[1].length > 2) {
                {
                    console.log("entrou if");
                    word = novaInputTexto.toLowerCase().replace('ã', 'a').replace('ç', 'c').replace('á', 'a').replace('à', 'a').replace('é', 'e').replace('ó', 'o').replace('ò', 'o').replace('ê', 'e')
                    word = testeDicionario(word)
                    console.log(word);




                    receitaProcurada = baseselecao.filter((valor) => {
                        const nome = valor.nomeDoPrato.toLowerCase().replace('ã', 'a').replace('ç', 'c').replace('á', 'a').replace('à', 'a').replace('é', 'e').replace('ó', 'o').replace('ò', 'o').replace('ê', 'e')
                        console.log(nome);
                        return nome.includes(word)
                    })
                }

            } else {
                word = novaInputTexto.toLowerCase().replace('ã', 'a').replace('ç', 'c').replace('á', 'a').replace('à', 'a').replace('é', 'e').replace('ó', 'o').replace('ò', 'o').replace('ê', 'e')
                console.log(word);
                receitaProcurada = baseselecao.filter((valor) => {
                    const nome = valor.nomeDoPrato.toLowerCase().replace('ã', 'a').replace('ç', 'c').replace('á', 'a').replace('à', 'a').replace('é', 'e').replace('ó', 'o').replace('ò', 'o').replace('ê', 'e')
                    return nome.includes(word)
                })

            }






        }


        if (receitaProcurada.length === 0) {
            const textoResultado = `Não foi encontranda nenhuma receita com o nome \"${novaInputTexto}\"`
            const arcticoTexto = document.getElementById('escrita')
            arcticoTexto.innerText = textoResultado
        } else {
            const textoResultado = `Foi encontrado ${receitaProcurada.length} receita para: \"${novaInputTexto}\"`
            const arcticoTexto = document.getElementById('escrita')
            arcticoTexto.innerText = textoResultado

        }
    } else {
        receitaProcurada = [...baseselecao]
        const arcticoTexto = document.getElementById('escrita')
        arcticoTexto.innerText = ''
    }







    impressao();

}





function testeDicionario(palavra) {

    const arrayMousse = ['mousse', 'mouss', 'mouse', 'mosse', 'musse', 'ousse', 'mouce', 'mouc', 'mouce', 'moce', 'muce', 'ouce', 'moussede', 'mussede']
    const arrayCamarao = ['camara', 'camaro', 'camaao', 'caamarao', 'camrao', 'caarao', 'cmarao', 'amarao', 'camoaraao', 'camaraona', 'decamarao', 'camaraono']
    const arrayMoranga = ['moranga', 'moraga', 'moanga', 'oranga', 'demoranga', 'morangana', 'namoranga']
    const arrayLimao = ['limao', 'lima', 'limo', 'liao', 'lmao', 'imao', 'delimao', 'nolimao', 'limaode', 'limaona', 'limaono']
    const arrayMolho = ['molho', 'molh', 'molo', 'moho', 'mlho', 'olho', 'molio', 'molhio', 'molhos', 'molhode']
    const arrayBranco = ['branco', 'branc', 'branca', 'braco', 'brnco', 'brando', 'vranco', 'banco', 'ranco']
    const arrayDoce = ['doces', 'doce', 'does', 'dces', 'dce', 'oces', 'oce', 'docede']
    const arrayEscondidinho = ['escondidinh', 'escondinedinho', 'escondidin', 'escondido', 'escondidinhode']
    const arrayCarne = ['carnes', 'carn', 'nacaren', 'nacarne', 'decarne', 'carnede', 'carnena', 'cane']
    const arrayFrango = ['frando', 'frang', 'rango', 'defranfo', 'defrango', 'nofrango', 'frandode', 'francona', 'frangono']
    const arrayQuiabo = ['kiabo', 'qiabo', 'dequiabo', 'noquiabo', 'quiabono', 'quiabona']
    const arrayFricasse = ['fricase', 'fricace', 'fricassse', 'fricassede', 'fricasede']
    const arrayYakisoba = ['iakisoba', 'yakissoba', 'yakisobade', 'noyakisoba', 'iakissoba', 'yakisobana', 'yakisobano']
    const arrayPave = ['pav', 'pavede', 'paveno', 'depave', 'nopave']
    const arrayMorango = ['morango', 'demorango', 'nomorango', 'morangono', 'morangona']
    const arrayChocolate = ['cholate', 'xocolate', 'chocolatede', 'chocolateno', 'chocolatena', 'cocolate', 'chcolate', 'nochocolate', 'dechocolate']
    const arrayRisoto = ['risto', 'tisoto', 'eisoto', 'risotode']
    const arrayMacarrao = ['macarrao', 'marcarao', 'macarrrao', 'mcarrao', 'macrarao']



    if (arrayEscondidinho.includes(palavra)) { return 'escondidinho' }
    if (arrayCarne.includes(palavra)) { return 'carne' }
    if (arrayFrango.includes(palavra)) { return 'frango' }
    if (arrayQuiabo.includes(palavra)) { return 'quiabo' }
    if (arrayFricasse.includes(palavra)) { return 'fricasse' }
    if (arrayYakisoba.includes(palavra)) { return 'yakisoba' }
    if (arrayPave.includes(palavra)) { return 'pave' }
    if (arrayMorango.includes(palavra)) { return 'morango' }
    if (arrayChocolate.includes(palavra)) { return 'chocolate' }
    if (arrayRisoto.includes(palavra)) { return 'risoto' }
    if (arrayMacarrao.includes(palavra)) { return 'macarrao' }
    if (arrayMousse.includes(palavra)) { return 'mousse' }
    if (arrayCamarao.includes(palavra)) { return 'camarao' }
    if (arrayMoranga.includes(palavra)) { return 'moranga' }
    if (arrayLimao.includes(palavra)) { return 'limao' }
    if (arrayMolho.includes(palavra)) { return 'molho' }
    if (arrayBranco.includes(palavra)) { return 'branco' }
    if (arrayDoce.includes(palavra)) { return 'doce' }
    return palavra


}