import React, { useState } from "react";
import { Card } from "react-bootstrap";

export const Divider = () => {
  const [enableEdit, setEnableEdit] = useState(false);

  return (
    <div>
      {enableEdit ? (
        <div>
          <div>Change Size</div>
          <button>+</button>
          {}
          <button>-</button>
        </div>
      ) : (
        <Card onClick={() => setEnableEdit(!enableEdit)} className="main-cont">
          <div className=" btn-cont">
            <div className="btn-shape"></div>
            <div className="btn-name">DIVIDER</div>
          </div>
        </Card>
      )}
    </div>
  );
};
