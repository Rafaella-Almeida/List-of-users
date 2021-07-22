import React from "react";
import "./style.css";

const ProfileUser = (props) => {
  const { name, image, bio, followers, repositories, linkProfile, linkReposi } =
    props;

  return (
    <div className="container-info-profile">
      <div className="container-profile">
        <img className="image-profile" src={image}></img>

        <div className="person-information">
          <p className="paragrafos">{name}</p>
          <p className="paragrafos">{bio}</p>
          <p className="paragrafos">Seguidores: {followers}</p>
          <p className="paragrafos">Repositorios: {repositories} </p>
        </div>

        <div className="container-buttons-git">
          <button className="button-perfil">
            <a href={linkProfile}> Ver perfil no Github</a>
          </button>
        </div>
        <div className="container-repository">{props.children}</div>
      </div>
    </div>
  );
};

export default ProfileUser;
