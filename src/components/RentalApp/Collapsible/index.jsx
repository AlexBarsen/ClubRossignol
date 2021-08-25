import React, { useState, useRef } from "react";

import {
  CollapsibleContainer,
  ContentContainer,
  Content,
} from "./CollapsibleElements";

const Collapsible = () => {
  const [isOpen, setIsOpen] = useState(false);

  const parentRef = useRef();

  return (
    <>
      <CollapsibleContainer>
        <button onClick={() => setIsOpen(!isOpen)}>toggle</button>
        <ContentContainer
          ref={parentRef}
          style={
            isOpen
              ? {
                  height: parentRef.current.scrollHeight + "px",
                }
              : { height: "0px" }
          }
        >
          <Content></Content>
        </ContentContainer>
      </CollapsibleContainer>
    </>
  );
};

export default Collapsible;
