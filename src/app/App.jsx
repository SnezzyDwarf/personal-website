import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

import "../styles/App.css";

import ChooseLanguage from "./components/sections/LandingPageSections/ChooseLanguage/ChooseLanguage";
import { useLanguage } from "./components/context/LanguageContext";

function App() {
  const language = useLanguage();
  return (
    <>
      {!language && <ChooseLanguage />}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
