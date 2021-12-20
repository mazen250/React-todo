import React from "react";

function Footer() {
  const [name, setName] = React.useState("Mazen-Hania-salman");

  return (
    <div className="footer">
      <p>{name}</p>
    </div>
  );
}

export default Footer;
