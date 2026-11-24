 // Dados dos flashcards (você pode adicionar quantos quiser aqui)
 const dadosFlashcards = [
    {
      categoria: "Conceito",
      pergunta: "O que é um Agente de IA?",
      resposta: "É um sistema autônomo que usa modelos de linguagem (LLMs) para planejar, tomar decisões e executar tarefas usando ferramentas externas."
    },
    {
      categoria: "Ferramenta",
      pergunta: "Para que serve o Google AI Studio?",
      resposta: "É um ambiente de prototipagem rápida do Google para testar prompts, ajustar modelos Gemini e gerar chaves de API para aplicações."
    },
    {
      categoria: "Alura",
      pergunta: "Quem é a Luri na Alura?",
      resposta: "É a assistente de inteligência artificial integrada à plataforma da Alura para tirar dúvidas, revisar código e auxiliar nos estudos."
    },
    {
      categoria: "Engenharia de Prompt",
      pergunta: "O que é Few-Shot Prompting?",
      resposta: "É a técnica de fornecer alguns exemplos de entrada e saída desejada dentro do prompt para guiar melhor a resposta da IA."
    }
  ];

  const container = document.getElementById('lista-cards');

  // Função que gera o HTML de cada card automaticamente
  dadosFlashcards.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('flashcard');

    card.innerHTML = `
      <div class="flashcard-inner">
        <div class="flashcard-front">
          <span class="categoria">${item.categoria}</span>
          <h2>${item.pergunta}</h2>
        </div>
        <div class="flashcard-back">
          <p>${item.resposta}</p>
        </div>
      </div>
    `;

    container.appendChild(card);
  });