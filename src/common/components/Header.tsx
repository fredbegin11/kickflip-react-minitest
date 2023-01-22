import kickflip from "../../kickflip.jpg";

import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={kickflip} className="header__logo" alt="logo" />
      <h2>Kickflip - Test React</h2>
    </div>
  );
};

export default Header;
