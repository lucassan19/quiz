import { useContext } from "react";
import { QuizContext } from "../context/quiz"; // Importando o contexto

import Quiz from "../img/categoria.svg";

import "./Welcome.css";

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext); // Usando o contexto
    // const [quizState, dispatch] = useContext(QuizContext); // Usando o contexto
  return (
    <div>
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE" })}>Iniciar</button>
        <img src={Quiz} alt="Início do Quiz" />
    </div>
  );
};

export default Welcome  