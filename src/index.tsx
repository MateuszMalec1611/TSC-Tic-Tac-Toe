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
        <AuthProvider>
            <TicTacToeProvider>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </TicTacToeProvider>
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
