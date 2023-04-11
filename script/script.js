// Função para verificar o tamanho do valor de um input
function checksize(e, min, max, errorId) {
  // Imprime o valor do input no console
  console.log(`Valor do elemento com ID ${e.target.id}: ${e.target.value}`);
  const description = e.target.value;
  const errorElement = document.getElementById(errorId);

  // Verifica se o tamanho da descrição está dentro dos limites especificados
  if (description.length <= min || description.length > max) {
    console.log(`ERRO: Tamanho inválido do elemento com ID ${e.target.id};`);
    // Exibe a mensagem de erro
    errorElement.style.display = "block";
  } else {
    console.log(`Check: Tamanho válido do elemento com ID ${e.target.id};`);
    // Esconde a mensagem de erro
    errorElement.style.display = "none";
  }
}

// Função para validar se apenas um radio button de um grupo está selecionado
function validateRadioButtons(groupName) {
  const radioButtons = document.getElementsByName(groupName);
  let checkedCount = 0;

  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      checkedCount++;
    }
  }

  // Retorna true se apenas um radio button estiver selecionado, false caso contrário
  return checkedCount === 1;
}

// Elementos do formulário
const subjectSelect = document.getElementById("subject");
const subjectError = document.getElementById("subject-error");
const questionLevel = document.getElementById("questionlevel");
const levelError = document.getElementById("level-error");
const rightQuestion = document.getElementById("rightQuestion");
const correctoptionError = document.getElementById("correctoption-error");

// Event listener para o botão de finalizar o formulário
document
  .getElementById("finish-button")
  .addEventListener("click", function (event) {
    // Testando lista de matérias:
    if (subjectSelect.value === "") {
      console.log("ERROR: Matéria não selecionada.");
      subjectError.style.display = "block";
    } else {
      console.log("Check: Matéria Selecionada.");
      subjectError.style.display = "none";
      // Continue com a lógica de finalização do formulário aqui
    }
    // Testando o radio Button de nível da questão:
    if (validateRadioButtons("questionlevel") == true) {
      console.log("Check: Nível de dificuldade selecionado.");
      levelError.style.display = "none";
    } else {
      console.log("ERROR: Nível de dificuldade não selecionado.");
      levelError.style.display = "block";
    }

    // Testando a questão correta:
    if (validateRadioButtons("rightQuestion") == true) {
      console.log("Check: Questão correta selecionada.");
      correctoptionError.style.display = "none";
    } else {
      console.log("ERROR: Questão correta não selecionada.");
      correctoptionError.style.display = "block";
    }
  });

// Event listeners para verificar o tamanho dos inputs
document
  .getElementById("questiontitle")
  .addEventListener("input", function (e) {
    checksize(e, 0, 100, "questiontitle-error");
  });

document
  .getElementById("question-description")
  .addEventListener("input", function (e) {
    checksize(e, 0, 2048, "textarea-error");
  });

document.getElementById("optionA").addEventListener("input", function (e) {
  checksize(e, 0, 100, "optionA-error");
});

document.getElementById("optionB").addEventListener("input", function (e) {
  checksize(e, 0, 100, "optionB-error");
});

document.getElementById("optionC").addEventListener("input", function (e) {
  checksize(e, 0, 100, "optionC-error");
});

document.getElementById("optionD").addEventListener("input", function (e) {
  checksize(e, 0, 100, "optionD-error");
});

document.getElementById("optionE").addEventListener("input", function (e) {
  checksize(e, 0, 100, "optionE-error");
});
