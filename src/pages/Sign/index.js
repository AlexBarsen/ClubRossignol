import React, { useRef } from "react";

import { connect } from "react-redux";

import {
  SignContainer,
  Container,
  CollapsibleContainer,
  Content,
} from "./SignElements";

import SignIn from "../../components/RentalApp/SignIn/index";

import SignUp from "../../components/RentalApp/SignUp/index";

import { createStructuredSelector } from "reselect";
import { selectUserSignUpHidden } from "../../redux/user/user.selectors";

const Sign = ({ userSignUpHidden }) => {
  const parentRef = useRef();

  return (
    <>
      <SignContainer>
        <Container>
          <SignIn />

          <CollapsibleContainer>
            <Content
              ref={parentRef}
              style={
                userSignUpHidden
                  ? {
                      width: parentRef.current.scrollHeight + "px",
                    }
                  : { width: "0px" }
              }
            >
              <SignUp />
            </Content>
          </CollapsibleContainer>
        </Container>
      </SignContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  userSignUpHidden: selectUserSignUpHidden,
});

export default connect(mapStateToProps)(Sign);
