import React, { useState } from "react";
import ButtonLIst from "../DNDComponets/ButtonList";
import { Divider } from "./Divider";

const Demo = () => {
  const [state, setstate] = useState("");

  const onDragEnd = (result, provided) => {
    console.log(result);
    if (result.reason === "CANCEL") {
      provided.announce("Your cancel message");
      return;
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable-1" type="PERSON">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={{
              backgroundColor: snapshot.isDraggingOver ? "blue" : "grey",
            }}
            {...provided.droppableProps}
          >
            <Draggable draggableId="draggable-1" index={0}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <ButtonLIst />
                </div>
              )}
            </Draggable>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Demo;
