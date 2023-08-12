import { styled } from 'styled-components';

export const Thumb = styled.section`
  color: midnightblue;

  h2 {
    border: 1px solid midnightblue;
    border-radius: 22px;
    max-width: max-content;
    padding-left: 8px;
    padding-right: 8px;
    margin: auto;
    margin-bottom: 44px;
    background-color: blanchedalmond;
  }

  b {
    border-bottom: 2px dashed midnightblue;
  }

  button {
    font-weight: bold;
    margin-bottom: 44px;
    padding: 8px 13px;
    border-radius: 22px;
    text-transform: uppercase;
    background-color: antiquewhite;
  }

  button:hover,
  button:focus {
    background-color: black;
    color: white;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 13px;
  }

  li p {
    color: black;
    font-size: larger;
    font-style: oblique;
  }

  li span {
    font-weight: bold;
    font-size: large;
    font-style: normal;
  }
`;
