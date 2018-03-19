import styled from "styled-components";

const StyledColumnWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  & > div {
    width: 49%;

    &:first-of-type {
      margin-right: 2%;
    }
  }
`;

export default StyledColumnWrapper;
