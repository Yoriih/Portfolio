import React from 'react';                                                          // importa a biblioteca React, que é necessária para criar componentes React
import { createRoot } from 'react-dom/client';                                      // importa a ferramenta que conecta os componentes React
import App from './App';                                                            // importa o componente principal da aplicação
import './index.css';                                                               // importa o arquivo de estilos CSS para a aplicação

const elementoRaiz = document.getElementById('root');                               // obtém o elemento HTML com o id "root" para renderizar a aplicação React

if (!elementoRaiz) {                                                                // verifica se o elemento HTML com o id "root" não existe, o "!" significa "não" e é usado para negar a condição
    throw new Error('Não foi encontrado o elemento HTML com o id "root"'); 
}

createRoot(elementoRaiz).render(                                                    // cria a raiz da aplicação React e renderiza o componente App dentro do elemento HTML com o id "root"

    <React.StrictMode> 
        <App /> 
    </React.StrictMode>
);
