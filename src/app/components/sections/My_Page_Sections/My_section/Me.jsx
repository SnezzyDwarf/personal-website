import Box from "../../../ui/Box/Box";
import Button from "../../../ui/Button/Button";
import { useLanguage } from "./../../../context/LanguageContext";
import { translations } from "../../../../../translations";

import "./Me.css";
import LinkedInLogoNoColor from "../../../../../assets/ui/LinkedInLogoNoColor";
import GitHubIcon from "../../../../../assets/ui/GitHibubIcon";
import InstagramLogo from "../../../../../assets/ui/InstagramLogo";
import FacebookIcon from "../../../../../assets/ui/FacebookIcon";

export default function Me() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  return (
    <>
      <section id="profile" className="section_me">
        <div className="section_me-content">
          <Box variant="quartenary" title={t.aboutTitle}>
            <div style={{ whiteSpace: "pre-line" }}>{t.description}</div>

            <div className="text_base">
              <div className="text_base-content">
                <p className="text_base-content-left">{t.status}</p>
                <p className="text_base-content-right">{t.ready}</p>
              </div>
            </div>
            <div className="links_base">
              <Button
                variant="logo"
                to="https://www.linkedin.com/in/bruno-pern%C3%A3o-3b4465155/"
              >
                <LinkedInLogoNoColor className="linkedinIcon" size={60} />
              </Button>
              <Button variant="logo" to="https://github.com/SnezzyDwarf">
                <GitHubIcon size={60} className="gitHub" />
              </Button>
              <Button
                variant="logo"
                to="https://www.instagram.com/brunopernao/"
                className="instagram"
              >
                <InstagramLogo size={60} />
              </Button>
              <Button
                variant="logo"
                to="https://www.facebook.com/bruno.pernao.1"
                className="facebook"
              >
                <FacebookIcon size={60} />
              </Button>
            </div>
          </Box>
        </div>
      </section>
    </>
  );
}
