import React from 'react';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import store, { persistor } from './redux/store'; 
import { PersistGate } from 'redux-persist/integration/react'; 
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const theme = createTheme({
  palette: {
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Open Sans Condensed, sans-serif', 
  },
});

function App() {
  return (
    //provides the Redux store to all components in the app.
    // wraps the app content and manages the persistence process. 
    //apply the created theme to the app.
    //provides a base layer of global styles.
    <Provider store={store}> 
      <PersistGate loading={null} persistor={persistor}> 
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="App">
            <header>
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
