import React from "react";

function Footer() {
  const [name, setName] = React.useState("Mazen Fayez");

  return (
    <div className="footer">
      <p>{name}</p>
    </div>
  );
}

export default Footer;
