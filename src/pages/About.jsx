// src/pages/About.jsx

import "./css/about.css";

const About = () => {
  const authors = [
    {
      name: "Hyago Colares",
      photoLink: "", // link da foto do autor 1
      professionalInfo: "Estudante de SI e estagiário da UOL Dev WEB|AWS.",
    },
    {
      name: "David Adonai",
      photoLink: "", // link da foto do autor 2
      professionalInfo:
        "Estudante de SI, membro da SBC e estagiário na PortalAgro. ",
    },
    {
      name: "Lucas Cassiano",
      photoLink: "", // link da foto do autor 3
      professionalInfo: "Estudante de SI e membro do NPCA.",
    },
    {
      name: "Renato Silva",
      photoLink: "", // link da foto do autor 4
      professionalInfo: "Estudante de SI e CTO da oBoticário.",
    },
  ];
  return (
    <div>
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
      {authors.map((author, index) => (
        <div key={index}>
          <h3>{author.name}</h3>
          <img src={author.photoLink} alt={`Foto de ${author.name}`} />
          <p>{author.professionalInfo}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
