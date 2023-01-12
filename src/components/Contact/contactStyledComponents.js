import styled from "styled-components/macro";

export const ContactSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0;
  padding: 20px 80px 0 80px;
`;

export const ContactForm = styled.div` 
padding-top: 40px;
  color: black;
  margin: 0;
  width: 100%;

  & input {
    border: none;
    border-bottom: 1px solid #295151;
    font-size: 20px;
    margin-bottom: 10px;
  }

  & label {
    float: left;
  }
/* 
  & p {
    margin: 20px 0;
  }
  @media (max-width: 950px) {
    p {
      padding: 20px 0;
    } */
  }
`;

export const Title = styled.div`
    margin: 20px 0;
    width: 100%;
& h1 {
    font-size: 60px;
    color: black;
  }
`
export const HelloNote= styled.div`
    margin: 30px 0;
    width: 100%;
& p {
    font-size: 18px;
    text-align: left;
    font-weight: bold;
  }
`

export const NameAndEmail = styled.div`
  display: flex;
  margin: 30px 0;
  width: 100%;
`;

export const Name = styled.div`
  width: 50%;
  margin: 0;

  @media (max-width: 950px) {
    width: 100%;
    padding: 25px 0px;
  }
`;

export const Email = styled.div`
  width: 50%;
  margin: 0;

  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const Subject = styled.div`
  display: inline-grid;
  width: 100%;
  margin: 30px 0;
`;

export const Message = styled.div`
  display: inline-grid;
  width: 100%;
  height: 100px;
  margin: 30px 0;

  & textarea {
    border: none;
    border-bottom: 1px solid #295151;
  }
`;

export const StyledButton = styled.div`
  border: none;
  padding: 10px 10px;
  margin-top: 20px;
  width: 300px;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #805858;
  }
`;
