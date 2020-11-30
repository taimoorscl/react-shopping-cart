import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Card } from "react-bootstrap";

const elementList = [
  { id: "1", shape: "_", name: "COLUMNS" },
  { id: "2", shape: "_", name: "BUTTON" },
  { id: "3", shape: "_", name: "DIVIDER" },
  { id: "4", shape: "_", name: "HTML" },
  { id: "5", shape: "_", name: "IMAGE" },
  { id: "6", shape: "_", name: "MENU" },
  { id: "7", shape: "_", name: "SOCIAL" },
  { id: "8", shape: "_", name: "TEXT" },
  { id: "9", shape: "_", name: "TIMER" },
  { id: "10", shape: "_", name: "VIDEO" },
];

const ButtonLIst = ({ onDragEnd }) => {
  return (
    <>
      {elementList.map((item, index) => {
        return (
          <Draggable draggableId={item.name} index={index} key={item.id}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <Card className="left-btn">
                  <div>
                    <div>{item.shape}</div>
                    <div>{item.name}</div>
                  </div>
                </Card>
              </div>
            )}
          </Draggable>
        );
      })}
    </>
  );
};

export default ButtonLIst;
