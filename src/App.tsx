// Import necessary modules and styles.

// React core modules for managing component lifecycle and state.
import { useEffect, useState } from 'react';

// Custom hook to access app state using Redux.
import { useAppSelector } from './hooks/useAppSelector';

// The main application routing component.
import Router from './router/Router';

// A toast notification component from the "react-hot-toast" library.
import { Toaster } from 'react-hot-toast';

// Function to configure and validate environment variables.
import configureAndValidateENV from './config/config';

// Custom error modal component for displaying validation errors.
import ErrorModal from './components/Modals/ErrorModal';

// Global SCSS styles for consistent styling throughout the app.
import './styles/global.scss';

// Define the main App component.
function App() {
  // Use the theme from the app state using the custom hook.
  const { theme } = useAppSelector(state => state.theme);

  // State to hold validation errors from environment configuration.
  const [validationError, setValidationError] = useState<string[] | null>(null);

  // Run environment configuration and validation on component mount.
  useEffect(() => {
    // Call the configuration and validation function.
    const errors = configureAndValidateENV();

    // If there are validation errors, set them to the state.
    if (errors) {
      setValidationError(errors);
    }
  }, []);

  return (
    // Apply the theme-specific class to the app container.
    <div className={`theme-${theme}`}>
      {/* Render an error modal if validation errors are present. */}
      {validationError && (
        <ErrorModal button='Dismiss' heading='Env Validation Error' message={validationError.join(',')} />
      )}

      {/* Display global toasts using the React Hot Toast library. */}
      <Toaster />

      {/* Render the main application router. */}
      <Router />
    </div>
  );
}

export default App;
