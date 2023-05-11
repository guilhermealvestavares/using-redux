import styled from "styled-components";

export const Image = styled.img`
  animation: App-logo-spin infinite 20s linear;
  animation-play-state: ${(props) => (props.rotating ? "running" : "paused")};
`;
