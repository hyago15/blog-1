// src/pages/About.jsx

import React from "react";
import "./css/about.css";

// Importe as fotos dos autores
import hyagoColaresPhoto from "./authors/hyagoColares.jpeg";
import davidAdonaiPhoto from "./authors/davidAdonai.jpeg";
import lucasCassianoPhoto from "./authors/lucasCassiano.jpeg";
import renatoSilvaPhoto from "./authors/renatoSilva.jpeg";

const About = () => {
  const authors = [
    {
      name: "Hyago Colares",
      photo: hyagoColaresPhoto,
      professionalInfo: "Estudante de SI e estagiário da AWS.",
    },
    {
      name: "David Adonai",
      photo: davidAdonaiPhoto,
      professionalInfo:
        "Estudante de SI, membro da SBC e estagiário na PortalAgro.",
    },
    {
      name: "Lucas Cassiano",
      photo: lucasCassianoPhoto,
      professionalInfo: "Estudante de SI e membro do NPCA.",
    },
    {
      name: "Renato Silva",
      photo: renatoSilvaPhoto,
      professionalInfo: "Estudante de SI e CTO da oBoticário.",
    },
  ];

  return (
    <div className="about-container">
      <h1>Grupo Penumbra</h1>
      <p>
        Este projeto é dedicado a disciplina de Laboratório de Produção de
        Software do curso de Sistemas de Informação da UFRA Paragominas.
      </p>
      <p>
        O desafio desse projeto era utilizar um API para carregar posts em blog
        e que cada nova página carregada, teria mais posts para acessar.
      </p>

      <h2>Autores:</h2>
      <div className="authors-container">
        {authors.map((author, index) => (
          <div className="author-card" key={index}>
            <h3>{author.name}</h3>
            <img
              className="author-photo"
              src={author.photo}
              alt={`Foto de ${author.name}`}
            />
            <p className="professional-info">{author.professionalInfo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
