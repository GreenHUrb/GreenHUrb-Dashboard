// Import necessary modules and components.

// The main React library.
import React from 'react';

// The ReactDOM module for rendering components into the DOM.
import ReactDOM from 'react-dom/client';

// The main App component of the application.
import App from './App.tsx';

// Redux Provider to provide the Redux store to components.
import { Provider } from 'react-redux';

// PersistGate from redux-persist for managing persisted state.
import { PersistGate } from 'redux-persist/integration/react';

// The Redux store and persistor configuration.
import { store, persistor } from './redux/store.ts';

// Use the createRoot API from ReactDOM to enable concurrent mode rendering.
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // Wrap the entire application in a strict mode for enhanced development checks.
  <React.StrictMode>
    {/* Provide the Redux store to the entire app using the Provider. */}
    <Provider store={store}>
      {/* Use PersistGate to ensure the persisted state is loaded before rendering. */}
      <PersistGate persistor={persistor}>
        {/* Render the main App component. */}
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
