import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ButtonElement = () => {
  const [activeEdit, setActiveEdit] = useState(false);
  return (
    <div>
      <Button onClick={setActiveEdit(true)}>Button</Button>
    </div>
  );
};

export default ButtonElement;
