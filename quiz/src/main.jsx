import { StrictMode } from 'react' // Importando o StrictMode
import { createRoot } from 'react-dom/client' // Importando o createRoot
import './index.css' // Importando o CSS
import App from './App.jsx' // Importando o componente App

import { QuizProvider } from "./context/quiz"; // Importando o contexto

createRoot(document.getElementById('root')).render( // Renderizando o componente 
  <StrictMode> 
    <QuizProvider>
      <App />
   </QuizProvider>
  </StrictMode>,
); 
