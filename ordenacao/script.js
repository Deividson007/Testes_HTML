window.onload = function() {
    var COUNT = 200;

    // Obtenha o elemento canvas
    var canvas = document.getElementById('meuCanvas');
    // Obtenha o contexto de desenho 2D
    var ctx = canvas.getContext('2d');

    // Função para desenhar uma linha
    function desenharLinha(x1, y1, x2, y2, cor, largura) {
        ctx.strokeStyle = cor; // cor da linha
        ctx.lineWidth = largura; // largura da linha
        ctx.beginPath(); // começar um novo caminho
        ctx.moveTo(x1, y1); // posição inicial
        ctx.lineTo(x2, y2); // posição final
        ctx.stroke(); // desenhar a linha
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
        }
    }

    function generateUniqueNumbers(min, max) {
        // Cria um array com todos os números entre min e max
        let numbers = [];
        for (let i = min; i <= max; i++) {
            numbers.push(i);
        }
        // Embaralha o array
        shuffle(numbers);
        return numbers;
    }

    var uniqueNumbers = generateUniqueNumbers(1, COUNT);

    function getNextUniqueNumber() {
        return uniqueNumbers.pop();
    }

    function gerarNumerosAleatorios() {
        let linhas = [];
        for (let i = 0; i < COUNT; i++) {
            let tamanho = getNextUniqueNumber();
            linhas.push({x1: 10 + i, x2: 10 + i, y1: 50, y2: tamanho, cor: '#000', largura: 1});
        }
        return linhas;
    }

    // Defina os pontos e estilos das linhas
    var linhas = gerarNumerosAleatorios();

    // Desenhe cada linha
    for (var i = 0; i < linhas.length; i++) {
        var linha = linhas[i];
        desenharLinha(linha.x1, linha.y1, linha.x2, linha.y2, linha.cor, linha.largura);
    }
};
