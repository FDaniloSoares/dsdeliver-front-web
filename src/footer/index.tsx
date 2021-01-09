import { ReactComponent as InstaIcon } from './instagram.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as YoutubeIcon } from './youtube.svg';

import './styles.css';

const Footer = () => (
  <footer className="main-footer">
    App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
    <div className="footer-icons">
      <a href="youtube" target="_new">
        <YoutubeIcon />
      </a>
      <a href="linkeedin" target="_new">
        <LinkedinIcon />
      </a>
      <a href="instagram" target="_new">
        <InstaIcon />
      </a>
    </div>
  </footer>
);

export default Footer;
