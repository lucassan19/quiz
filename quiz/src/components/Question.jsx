import { useContext } from "react";
import { QuizContext } from "../context/quiz"; // Importando o contexto


 const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext); // Usando o contexto
  console.log(quizState);

  return <div id="question">
    <p>
      Pergunta {quizState.currentQuestion} de {quizState.questions.length}
    </p>
    <p>Pergunta de 0 a 10</p>
    <h2>Pergunta Atual</h2>
    <div id="options-container">
      <p>Opções</p>
  </div>
  <button>Continuar</button>
  </div>
};
  
export { Question };