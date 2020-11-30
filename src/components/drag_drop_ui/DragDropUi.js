import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import ButtonElement from "./DNDComponets/ButtonElement";
import ButtonLIst from "./DNDComponets/ButtonList";
import "./dragDrop.css";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const DragDropUi = () => {
  const displayElemnt = { BUTTON: 0, DIVIDER: 0, COLUMNS: 0 };
  const [renderElement, setRenderElement] = useState(false);
  const [display, setDisplay] = useState(displayElemnt);

  const onDragEnd = (result) => {
    const index = result.draggableId;
    if (result.reason === "CANCEL") {
      const cancel = `
      Movement cancelled.
     returnedToStart${result.source}
    `;
      return cancel;
    }
    if (!result.destination) {
      return;
    }
    console.log(result);
    setRenderElement(true);
    setDisplay({ ...display, [index]: display[index] + 1 });
  };

  console.log(renderElement);
  console.log(display);
  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Row>
          <Col md={10}>
            <div className="left-com">
              <Droppable droppableId={"droppable-2"}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={{
                      backgroundColor: snapshot.isDraggingOver
                        ? "blue"
                        : "white",
                    }}
                    {...provided.droppableProps}
                  >
                    <div className="canvas-self">
                      <div className="canvas-child">
                        {renderElement && <Button>button</Button>}
                        <div>
                          <Button>button</Button>
                        </div>
                      </div>
                    </div>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </Col>
          <Col md={2}>
            <div className="rigth-com">
              <Row>
                <Col md={10}>
                  <Droppable droppableId="droppable-1">
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        style={{
                          backgroundColor: snapshot.isDraggingOver
                            ? "blue"
                            : "white",
                        }}
                        {...provided.droppableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className="left-btn-cont">
                          <ButtonLIst onDragEnd={onDragEnd} />
                        </div>
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </Col>
                <Col md={2}>
                  <div className="right-btn-cont">
                    <div>+</div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </DragDropContext>
    </div>
  );
};

export default DragDropUi;
