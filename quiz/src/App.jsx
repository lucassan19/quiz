//react, componentes, estáticos
import { useContext } from "react";
import { QuizContext } from "./context/quiz"; // Importando o contexto

import Welcome from "./components/Welcome.jsx";
import {Question} from "./components/Question.jsx"; 



import "./App.css"

function App() {
  const [quizState, dispatch] = useContext(QuizContext);
 

  return (
         <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "start" && <Welcome />}   
      {quizState.gameStage === "playing" && <Question />}   

      </div>
  )
}

export default App
