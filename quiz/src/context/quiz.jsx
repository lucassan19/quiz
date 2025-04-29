import { children, createContext, useReducer } from "react";
import questions from "../data/questions";

const STAGES = ["start", "playing", "end"];
const initialState = {
    gameStage: STAGES[0],
    questions: questions, // vai puxar as perguntas do arquivo questions.js
    currentQuestion: 0, // pergunta atual
};

const quizReducer = (state, action) => { // executa uma função baseada em 2 parâmetros: o estado atual e a ação que está sendo executada
    console.log(state, action);

    switch (action.type) {
        case "CHANGE_STATE": // quando o usuário clicar no botão "Iniciar", o estado do jogo muda para "playing"
       return {
        ...state, // mantém o estado atual
        gameStage: STAGES[1], // muda o estado do jogo para "playing"
       };
            default: // se não houver nenhuma ação, o estado atual é retornado
                return state;
    }
};
export const QuizContext = createContext(); // onde eu consumo o contexto

export const QuizProvider = ({ children}) => { // onde eu habilito o contexto
    const value = useReducer(quizReducer, initialState); // Usando o useReducer para gerenciar o estado do quiz
    return (
        <QuizContext.Provider value={value}>
            {children}
        </QuizContext.Provider>

    ) };