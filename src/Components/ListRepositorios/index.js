import React from "react";
import "./style.css";

function ListRepositorios(props) {
  const { nameRepo, descriptionRepo } = props;
  return (
    <div className="container-principal">
      <div className="container-respositories">
        <p className="nome-repositorio">{nameRepo}</p>
        <p className="data-repositorio">{descriptionRepo}</p>
      </div>
    </div>
  );
}

export default ListRepositorios;
