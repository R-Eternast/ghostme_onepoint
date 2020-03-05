import React, { Component } from 'react';
import { render } from 'react-dom';
import './style-mobile.css';
import './style-desktop.css';
import MapComment from './map123.js';
import ReseauxLink from './reseauxlink';

class App extends Component {

  render() {
    return (
      <section>
        <div class="first-page">
          <img src="https://cdn.zeplin.io/5e2eb887ab1ad87f9471a1c6/assets/0950C17B-44A2-4344-A1AB-505C829227B6.png" class="logo first-page_text" alt="ghost.me"></img>
          <h2 class="hide-your-personal first-page_text">Hide your personal mobility data</h2>
          <a href="second-page.html"><div class="parlons-en">
            <div>
            <img src="https://cdn.zeplin.io/5e2eb887ab1ad87f9471a1c6/assets/EE29E0F4-BE84-484B-9543-D7731147583A.svg" alt="Paris"></img>
            <span>Parlons-en</span>
            </div>
            <span class="line"></span>
          </div></a>
        </div>


        <div class="second-page">
          <img class="second-page_img" src="https://cdn.zeplin.io/5e2eb887ab1ad87f9471a1c6/assets/9FD421CA-9C1B-44D4-AAD4-615D0D36E6D5.png" alt="flyer"></img>
          <div class="second-page_text">
          <h3 class="second-page_title">Notre promesse</h3>
          <p>
            Sans facture, sans engagement, sans tracking, à recharger à volonté. 5$ de pour vous déplacer.
          </p><p>
            Transports francilliens illimités de 7h à 10h et de 17h à 20h, rechargement illimité sur les bornes électriques EDF
          </p>
          </div>
        </div>

        <div class="third-page">
          <img class="button-play" src="https://cdn.zeplin.io/5e2eb887ab1ad87f9471a1c6/assets/71E32897-A01C-468C-95BC-17E8B7C4BA50.svg" alt="Paris"></img>
          <span class="button-play_text">Lancer la vidéo</span>
        </div>


        <div class="evenement-participation">
          <h3 class="evenement-participation_title">Lancement du service le 31 janvier</h3>
          <img class="evenement-participation_img" src="https://cdn.zeplin.io/5e2eb887ab1ad87f9471a1c6/assets/060E3A6B-EFAF-46E7-AFB0-31599E67BAFA.png" alt="man manking thing on a computer"></img>
          <a href="#"><button class="evenement-participation_button"><p>Je veux participer à l'évènement</p></button></a>
        </div>


        <div class="comment-page">
          <h2 class="comment-page_title">Comment ça fonctionne ?</h2>
            <MapComment />
        </div>

        <div class="image-display">
          <div class="image-display_transition">
            <div class="image-display_rectangle"></div>
            <img class="image-display_picture" src="https://cdn.zeplin.io/5e2eb887ab1ad87f9471a1c6/assets/D3973724-2264-4962-BFB2-D61D5FB9FFDD.png" alt="happy teen girl"></img>
            <h4>Notre team</h4>
          </div>

          <div class="image-display_text">
            <p>
              Située au cœur de l’énergique métropole francilienne, notre équipe de jeunes enthousiastes vient du monde entier. 
            </p><p>
              Nous croyons aux hiérarchies plates, à la collaboration et à l'ouverture aux nouvelles idées, d'où qu'elles viennent.
            </p>
          </div>
        </div>


        <div class="ghost-text">
            <h4 class="hidden-desktop"> Ils l'ont testé</h4>
          <div class="ghost-text_text">
            <h4 class="hidden-mobile">Ils l'ont testé</h4>
            <p>« C’est une carte qui sera faite pour se déplacer. Nous misons avant tout sur la simplicité d'utilisation et un excellent rapport qualité-prix ». 
            </p>
            <p>
            Confirme au journal L’Échos du Nord Billy Sallah, le directeur produit à l'origine du projet
            </p>
          </div>
          <div class="ghost-text_app">
            <img src="https://cdn.zeplin.io/5e2eb887ab1ad87f9471a1c6/assets/8BE4211C-86A2-4F0F-99A6-E5B1FFE0B2C6.png" alt="app with the QR code">
            </img>
            <div class="ghost-text_comment1">
              <h5>La liberté</h5>
              <p>« Ghost me a bloqué toutes les pubs! Ça m'est très utile, surtout pour le tram depuis La Défense… »</p>
            </div>
            <div class="ghost-text_comment2">
              <h5>Merci !</h5>
              <p>« Enfin un moyen simple et économique d'utiliser tous les moyens de transport en un seul clic »</p>
            </div>
          </div>
          <div class="ghost-text_politique hidden_politique_desktop">
          <span class="ghost-text_politique_title">Politique de confidentialité</span>
          <span class="ghost-text_politique_text">onepoint 2020 - Ghost.me est un service fictif créé pour interpeler sur les impacts de l'agrégation multi-modale des services de mobilités. Ceci est un design fiction réalisé par une équipe onepoint.</span>
          </div>
        </div>


        <nav class="sticky-gradient_line"></nav>

        <footer class="footer-ghostme">
        <div class="ghost-text_politique hidden_politique_mobile">
          <span class="ghost-text_politique_title">Politique de confidentialité</span>
          <span class="ghost-text_politique_text">onepoint 2020 - Ghost.me est un service fictif créé pour interpeler sur les impacts de l'agrégation multi-modale des services de mobilités. Ceci est un design fiction réalisé par une équipe onepoint.</span>
          </div>
          <ReseauxLink />
          <img class="footer-ghostme_logo"
          src="https://cdn.zeplin.io/5e2eb887ab1ad87f9471a1c6/assets/45B44D09-E427-4A22-93E2-0794E38DFEAA.png" alt="ghost.me">
          </img>
        </footer>
     </section>
    );
  }
}

render(<App />, document.getElementById('root'));