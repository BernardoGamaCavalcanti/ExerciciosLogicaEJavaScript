Desenvolver a lógica de respostas / pontuação para um mini-quiz utilizando a estrutura condicional switch/case. O quiz contém 4 perguntas com 4 respostas cada (conforme abaixo). Todas as respostas possuem uma pontuação específica.

Critérios de avaliação:

(1,0) Criar uma tela (janela) inicial de boas vindas, explicando o quiz.
(1,0) Validar para que respostas com letra minúscula (a, b, c, d) também somem os pontos.
(1,0) Incluir uma validação para opções diferentes das alternativas, avisando a soma de 0 pontos.
(1,0) Mostrar os pontos ao final. Se conseguir pontuação máxima (15 pontos), incluir "Parabéns!"


let resposta, nota = 0

alert(`Bem-vindo ao nosso QUIZ temático :D\n\nResponda as perguntas e saiba qual foi sua pontuação`)

resposta = prompt("1 - Quais séries a seguir englobam melhor a temática de vampiros e assombração?\n\nA - Van Helsing\nB - Castlevania\nC - The Vampire Diaries\nD - Blade: The Series").toUpperCase()

switch(resposta){
    case 'A':
           nota += 2
        break
    case 'B':
           nota += 3
        break
    case 'C':
           nota += 2
        break
    case 'D':
           nota += 1
        break

        default: 
        nota =+ 0
        alert(`Opção digitada inválida, nesta pergunta você obteve 0 pontos`)
}

resposta = prompt("2 - Dentre os livros abaixo, quais incluem melhor a temática de fantasia?\n\nA - Alice no País das Maravilhas\nB - O Hobbit\nC - A Fantástica Fábrica de Chocolates\nD - Coraline").toUpperCase()

switch(resposta){
    case 'A':
           nota += 4
        break
    case 'B':
           nota += 2
        break
    case 'C':
           nota += 4
        break
    case 'D':
           nota += 3
        break

        default: 
        nota =+ 0
        alert(`Opção digitada inválida, nesta pergunta você obteve 0 pontos`)
}

resposta = prompt("3 - Quais das franquias listadas, representam melhor a empresa de jogos Nintendo?\n\nA - The Legend of Zelda\nB - Kirby\nC - Metroid\nD - Super Mario Bros").toUpperCase()

switch(resposta){
    case 'A':
           nota += 3
        break
    case 'B':
           nota += 2
        break
    case 'C':
           nota += 2
        break
    case 'D':
           nota += 4
        break

        default: 
        nota =+ 0
        alert(`Opção digitada inválida, nesta pergunta você obteve 0 pontos`)
}

resposta = prompt("3 - Quais dos autores citados, representam melhor o gênero de livros de terror?\n\nA - Stephen King\nB - Edgar Allan Poe\nC - H.P. Lovecraft\nD - Mary Shelley").toUpperCase()

switch(resposta){
    case 'A':
           nota += 3
        break
    case 'B':
           nota += 2
        break
    case 'C':
           nota += 2
        break
    case 'D':
           nota += 4
        break

        
}


if (nota < 15){
    alert(`Obrigado por participar, sua nota foi ${nota}`)
}
     
if (nota == 15){
    alert(`Você é um monstro, sua nota foi ${nota}`)
}
         
  
