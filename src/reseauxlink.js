import React from 'react';
import 'react-dom';

export default function ReseauxLink() {

    const arrayRes = [
        "https://cdn.zeplin.io/5e2eb887ab1ad87f9471a1c6/assets/C6312827-1E23-4884-8DF9-2357AE7EADB1.svg",
        "https://cdn.zeplin.io/5e2eb887ab1ad87f9471a1c6/assets/CE9DD630-A4B6-4703-807D-2C76950950EE.svg",
        "https://cdn.zeplin.io/5e2eb887ab1ad87f9471a1c6/assets/A9F5AD46-7C91-4CB0-95F4-3862AB80D469.svg",
        "https://cdn.zeplin.io/5e2eb887ab1ad87f9471a1c6/assets/27C275AC-4CC0-489D-A6FF-44E887B725DE.svg"];
    
      return (
        <div className="footer-ghostme_reseaux">
          { arrayRes.map((item) => {
            return (
                <img src={item} alt="reseaux link"></img>
            );
          })}
        </div>
      );
}