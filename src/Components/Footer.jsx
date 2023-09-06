import React from 'react';

import GithubLogo from '../assets/github.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div class="footer-container">
        <div class="upper">
          <div class="categoria-footer">
            <h6>Créditos</h6>
            <a target="-blank" href="https://www.flaticon.com/br/icones-gratis/rede-social"
              title="rede social ícones">Ícones
              rede sociais por riajulislam - Flaticon</a>
          </div>
          <div class="categoria-footer">
            <h6>Navegação</h6>
            <Link to={'./'}>Home</Link>
            <Link to={'./product'}>Aparelhos</Link>
          </div>
          <div class="categoria-footer">
            <h6>Autor - RM</h6>
            <a target="_blank" href="https://github.com/Asteriuz">Augusto Barcelos Barros - 98078</a>
          </div>
        </div>
        <div class="middle">
          <hr />
          <a target="-blank" href="https://github.com/Asteriuz"><img class="grayscale"
            src={GithubLogo} alt="logo do github" /></a>
        </div>
      </div>
      <div class="bottom">
        <a id="copyright" target="-blank" href="https://github.com/Asteriuz">
          <p>Copyright © 2023. Guinchei Celulares.</p>
        </a>
      </div>
    </footer>
  );
}
