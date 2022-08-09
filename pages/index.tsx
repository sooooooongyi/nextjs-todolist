import { NextPage } from "next";
import styled from "styled-components";

const Container = styled.div`
  font-style: italic;
`;

const index: NextPage = () => (
  <Container>
    <h1>hello styled-components</h1>
    <h2>hello styled-components</h2>
  </Container>
);

export default index;
