import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
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
                    <Router>
                        <App />
                    </Router>
                </ThemeProvider>
            </TicTacToeProvider>
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
