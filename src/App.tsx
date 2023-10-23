import "animate.css";
import { Toaster } from "react-hot-toast";

// import "@styles";
import  './styles/global.scss'
import { Router } from "@router";
import { useAppSelector } from "@hooks";

function App() {
  const { theme } = useAppSelector(state => state.appSlice);

  return (
    <div className={`theme-${theme}`}>
      <Toaster />
      <Router />
    </div>
  );
}

export default App;
