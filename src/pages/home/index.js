import { useState, useEffect } from "react";
import "./style.css";
import request from "../../services/request";
import ProfileUser from "../../Components/ProfileUser";

function Home() {
  const [user, setUser] = useState("");
  const [getUser, setGetUser] = useState("");
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const responseData = async () => {
      const responseUserData = await request(getUser);
      setUserData(responseUserData);
      return responseUserData;
    };

    responseData();
  }, [getUser]);

  const { avatar_url, bio, followers, name, public_repos, repos_url, blog } =
    null || userData || [];

  return (
    <div className="main-container">
      <header>
        <h1 className="title">📝LIST OF USERS👥</h1>
        <h3 className="sub-title">
          Encontre aqui repositórios de amigos do Github!
        </h3>
      </header>

      <div className="input-container">
        <input className="input" onChange={(e) => setUser(e.target.value)} />
        <button className="button" onClick={() => setGetUser(user)}>
          🔍
        </button>
      </div>
      {getUser && (
        <ProfileUser
          name={name}
          bio={bio}
          followers={followers}
          repositories={public_repos}
          image={avatar_url}
          linkReposi={repos_url}
          linkProfile={blog}
        />
      )}
    </div>
  );
}

export default Home;
