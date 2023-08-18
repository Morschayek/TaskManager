import React from 'react';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import store, { persistor } from './redux/store'; 
import { PersistGate } from 'redux-persist/integration/react'; 
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

// Create your theme here
const theme = createTheme({
  palette: {
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Open Sans Condensed, sans-serif', // Set your desired font here
  },
});

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="App">
            <header className="App-header">
              <h1 style={{ textAlign: 'center' }}>Todo List App</h1>
            </header>
            <main>
              <TaskForm />
              <TaskList />
            </main>
          </div>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
