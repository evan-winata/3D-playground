import React, { PropsWithChildren, useState } from "react";
import classes from "./Sidebar.module.scss";
import { DraggableCore, DraggableEvent, DraggableData } from "react-draggable";
import ChevronLeft from "./assets/ChevronLeft";

export type Props = {
  /**
   * the max width for the sidebar
   */
  maxWidth?: number;

  /**
   * sets sidebar to the left or right side of the screen
   */
  position?: "left" | "right";
};

/**
 * Resizeable side bar component that allows draggable sidebar width
 */
export const Sidebar = ({ children, position = "left", maxWidth = 350 }: PropsWithChildren<Props>) => {
  const MIN_WIDTH = 12;
  const [width, setWidth] = useState<number>(maxWidth);
  const isCollapsed = width === MIN_WIDTH;
  const isPointingRight = (position === "left" && isCollapsed) || (position === "right" && !isCollapsed);

  const handleDrag = (e: DraggableEvent, ui: DraggableData) => {
    const factor = position === "left" ? -1 : 1;
    let newWidth = Math.min(width - ui.deltaX * factor, maxWidth);
    setWidth(Math.max(MIN_WIDTH, newWidth));
  };

  const dragHandlers = {
    onDrag: handleDrag
  };

  const toggleView = () => {
    if (width === MIN_WIDTH) {
      setWidth(maxWidth);
    } else {
      setWidth(MIN_WIDTH);
    }
  };

  const content = [
    <div
      key="content"
      className={`${classes.content} ${isCollapsed ? classes.collapsed : ""}`}
      style={{ width: `${width}px` }}
    >
      {children}
    </div>
  ];

  const dragSection = (
    <DraggableCore key="dragSection" {...dragHandlers}>
      <div className={classes.resizeBar}>
        <button className={classes.iconWrapper} onClick={toggleView} data-testid="toggleButton">
          <ChevronLeft className={`${classes.icon} ${isPointingRight ? classes.pointRight : ""}`} />
        </button>
      </div>
    </DraggableCore>
  );

  if (position === "left") {
    content.push(dragSection);
  } else {
    content.unshift(dragSection);
  }

  return (
    <div className={`${classes.wrapper} ${position === "left" ? classes.borderRight : classes.borderLeft}`}>
      {content}
    </div>
  );
};

export default Sidebar;
