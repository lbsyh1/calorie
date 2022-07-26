import React from "react";
import styled from "@emotion/styled";
import Box from "../components/Box";
import SearchBar from "@/components/SearchBar";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;
const Section = styled.div`
  border: 1px solid black;
  background: #ffe9cf;
`;

const DisplayFlex = styled.div`
  display: flex;
`;
export default function () {
  return (
    <div>
      <p>search1</p>
      <Wrapper>
        <SearchBar />
      </Wrapper>
      <DisplayFlex>
        <Section>
          <Box foodName="" calories="" />
        </Section>
        <Section>
          <Box foodName="" calories="" />
        </Section>
      </DisplayFlex>
      <DisplayFlex>
        <Section>
          <Box foodName="" calories="" />
        </Section>
        <Section>
          <Box foodName="" calories="" />
        </Section>
      </DisplayFlex>
      <DisplayFlex>
        <Section>
          <Box foodName="" calories="" />
        </Section>
        <Section>
          <Box foodName="" calories="" />
        </Section>
      </DisplayFlex>
    </div>
  );
}
