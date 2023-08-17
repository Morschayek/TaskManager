import React from 'react';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import store from './redux/store';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const theme = createTheme({
  palette: {
    background: {
      default: '#ffffff', // Set the background color to white
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <header className="App-header">
            <h1>Todo List App</h1>
          </header>
          <main>
            <TaskForm />
            <TaskList />
          </main>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
