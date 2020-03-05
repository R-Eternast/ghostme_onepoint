import React from 'react';
import 'react-dom';

export default function MapComment() {
  const arraySquare = [
    { title: "Créez votre compte", text: "Procurez-vous votre Ghost pass en ligne ou dans un commerce."},
    { title: "Déplacez-vous", text: "Grâce aux services de mobilités partenaires."},
    { title: "Rechargez votre pass", text: "Du montant souhaité dés que votre solde n'est plus créditeur."}
  ];

  return (
    <div className="ItemMap">
      { arraySquare.map((item) => {
        return (
          <div class="comment-page_square">
            <div class="comment-page_square_text">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
