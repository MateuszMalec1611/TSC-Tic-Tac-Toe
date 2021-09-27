import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme from './config/theme';
import './index.css';
import App from './App';
import AuthProvider from './store/Auth/Auth.context';
import TicTacToeProvider from './store/TicTacToe/TicTacToe.context';

ReactDOM.render(
    <React.StrictMode>
        <TicTacToeProvider>
            <AuthProvider>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </AuthProvider>
        </TicTacToeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
