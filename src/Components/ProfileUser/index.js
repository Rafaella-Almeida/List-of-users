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
          <p>{name}</p>
          <p>{bio}</p>
          <p>seguidores: {followers}</p>
          <p>repositorios: {repositories} </p>
        </div>

        <div className="container-buttons-git">
          <button>
            <a href={linkProfile}> ver perfil</a>
          </button>
          <button>
            <a href={linkReposi}>ver respositórios</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
