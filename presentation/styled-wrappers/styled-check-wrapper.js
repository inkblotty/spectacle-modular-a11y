import styled from "styled-components";

const StyledCheckWrapper = styled("div")`
  color: ${(props) => props.dark ? "#333" : "#faf9ed"};

  label {
    & > div {
      height: 30px;

      span:first-of-type {
        height: 30px;
      }
    }
  }
`;

export default StyledCheckWrapper;
