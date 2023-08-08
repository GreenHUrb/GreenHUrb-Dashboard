import { useEffect, useState } from 'react';
import { useAppSelector } from './hooks/useAppSelector';
import Router from './router/Router'
import './styles/_color-palette.scss';
import { Toaster } from 'react-hot-toast';
import configureAndValidateENV from './config/config';
import ErrorModal from './components/Modals/ErrorModal';

function App() {
  const { theme } = useAppSelector(state => state.theme)
  const [validationError, setValidationError] = useState<string[] | null>(null)

  useEffect(() => {
    const errors = configureAndValidateENV()
    if (errors) {
      setValidationError(errors)
    }
  }, [])

  return (
    <div className={`theme-${theme}`}>
      {validationError && (
        <ErrorModal button='Dismiss' heading='Env Validation Error' message={validationError.join(',')} />
      )}
      <Toaster />
      <Router />
    </div>
  )
}

export default App
