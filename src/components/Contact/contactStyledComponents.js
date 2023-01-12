import styled from "styled-components/macro";

export const ContactSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0;
  padding: 20px 80px 0 80px;
`;

export const ContactHead = styled.div`
  padding-top: 40px;
  color: black;
  margin: 0;
  width: 100%;
  font-size: 18px;
`;

export const ContactForm = styled.div`
  padding-top: 40px;
  color: black;
  margin: 0;
  width: 100%;
  font-size: 18px;

  & input {
    border: none;
    border-bottom: 1px solid black;
    font-size: 15px;
    margin: 0;
    width: 100%;
    padding: 20px 0 3px 0;
  }

  & label {
    float: left;
    margin: 0;
  }
`;

export const Title = styled.div`
  margin: 20px 0;
  width: 100%;
  & h1 {
    font-size: 60px;
    color: black;
  }
`;
export const HelloNote = styled.div`
  margin: 30px 0;
  width: 100%;
  & p {
    text-align: left;
    font-weight: bold;
  }
`;

export const NameAndEmail = styled.div`
  display: flex;
  margin: 30px 0;
  width: 100%;
`;

export const Name = styled.div`
  width: 50%;
  margin: 0 5px 0 0;

  @media (max-width: 950px) {
    width: 100%;
    padding: 25px 0px;
  }
`;

export const Email = styled.div`
  width: 50%;
  margin: 0 0 0 5px;

  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const Subject = styled.div`
  width: 100%;
  margin: 50px 0;
`;

export const Message = styled.div`
  width: 100%;
  margin: 50px 0;

  & textarea {
    border: none;
    border-bottom: 1px solid black;
    font-size: 15px;
    margin: 0;
    width: 100%;
    padding: 20px 0 3px 0;
    height: 150px;
  }
`;

export const StyledButton = styled.div`
  cursor: pointer;
  color: black;
  font-size: 22px;
  float: right;
  margin: 0;
  text-decoration: none;
  background-image: linear-gradient(black, black);
  background-size: 0 1px, auto;
  background-repeat: no-repeat;
  background-position: center bottom;
  transition: all 0.2s ease-out;

  &:hover {
    background-size: 100% 1px, auto;
  }
  & .fa {
    margin: 0;
  }
  & .fa:hover {
    font-size: 25px;
  }
`;
