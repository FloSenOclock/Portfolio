import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Header = ({ toggleTheme, isDark }) => {
  return (
    <header className="flex flex-col items-center gap-2 md:flex-row justify-between px-2 py-1 text-sm footer-center bg-light-bgsecondary dark:bg-dark-bgsecondary text-light-txtsecondary dark:text-dark-txtsecondary py-2">
      <p>FlorianSenor.com</p>
      <div>
        <ul className="flex gap-2 ">
          <li className="hover:rotate-6 hover:text-light-txthover dark:hover:text-dark-txthover">
            <button onClick={toggleTheme} aria-label="Toggle Dark Mode">
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </button>
          </li>
          <li className="hover:rotate-6 hover:text-light-txthover dark:hover:text-dark-txthover">
            <a
              aria-label="LinkedIn"
              target="_blank"
              href="https://www.linkedin.com/in/florian-senor"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li className="hover:rotate-6 hover:text-light-txthover dark:hover:text-dark-txthover">
            <a
              aria-label="GitHub"
              target="_blank"
              href="https://github.com/FloSenOclock"
            >
              <GitHubIcon />
            </a>
          </li>
          <li className="hover:rotate-6 hover:text-light-txthover dark:hover:text-dark-txthover">
            <a aria-label="Email" href="mailto:floriansenor@gmail.com">
              <EmailIcon />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
