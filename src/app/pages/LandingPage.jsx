import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/LandingPage.css";
import LandingIntro from "../components/sections/LandingPageSections/LandingIntro/LandingIntro";
import LandingLoading from "../components/sections/LandingPageSections/LandingLoading/LandingLoading";
import LandingBug from "../components/sections/LandingPageSections/LandingBug/LandingBug";
import ChooseLanguage from "../components/sections/LandingPageSections/ChooseLanguage/ChooseLanguage";
import { useLanguage } from "../components/context/LanguageContext";

export default function LandingPage() {
  const { setLanguage } = useLanguage();
  const [step, setStep] = useState("chooseLanguage");

  function handleLanguage(lang) {
    setLanguage(lang);
    setStep("base");
  }

  const navigate = useNavigate();

  const handleLoading = () => {
    setStep("isLoading");
  };

  const handleBug = () => {
    setStep("isBugged");
  };
  const handleNext = () => {
    navigate("/Mypage");
  };
  return (
    <>
      <main>
        <section className="section-landing">
          {step === "chooseLanguage" && (
            <ChooseLanguage handleLanguage={handleLanguage} />
          )}
          {step === "base" && <LandingIntro handleLoading={handleLoading} />}
          {step === "isLoading" && <LandingLoading handleBug={handleBug} />}
          {step === "isBugged" && <LandingBug handleNext={handleNext} />}
        </section>
      </main>
    </>
  );
}
