import "./style.css";

const InputButton = () => {
  return (
    <div className="input-container">
      <input className="input" onChange={(e) => setUser(e.target.value)} />
      <button className="button" onClick={() => setGetUser(user)}>
        🔍
      </button>
    </div>
  );
};
export default InputButton;
