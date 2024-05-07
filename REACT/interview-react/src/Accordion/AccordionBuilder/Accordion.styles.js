import styled from "styled-components";

export const Title = styled.h1`
  font-size: 60px;
  text-align: center;
  color: #BF4F74;
`;

export const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export const Header = styled.header`
  font-size: 40px;
  text-align: center;
  color: green;
  border: 2px solid black;
  display:flex;
  justify-content:center;
  cursor: pointer;
`;

export const ItemContent = styled.div`
  font-size: 25px;
  text-align: center;
  color: red;
  display:flex;
`

export const Item = styled.div`
color: white;
margin: auto;
margin-bottom: 2px;
max-width: 500px;
width: 100%;
&:first-of-type {
margin-top: 3em;
}
&:last-of-type {
margin-bottom: 0;
}
`;