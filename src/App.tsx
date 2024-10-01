import { configureAndValidateENV } from "@config";
import { Router } from "@router";
import "animate.css";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { ErrorModal } from "./components";
import { useAppSelector } from "./hooks/useAppSelector";
import "./styles/global.scss";

function App() {
  const { theme } = useAppSelector(state => state.appSlice);

  const [validationError, setValidationError] = useState<string[] | null>(null);

  useEffect(() => {
    const errors = configureAndValidateENV();

    if (errors) {
      setValidationError(errors);
    }
  }, []);

  return (
    // Apply the theme-specific class to the app container.
    <div className={`theme-${theme}`}>
      {validationError && (
        <ErrorModal
          button=""
          heading="Env Validation Error"
          message={validationError.join(",")}
        />
      )}

      <Toaster />

      <Router />
    </div>
  );
}

export default App;
