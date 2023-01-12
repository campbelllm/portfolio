import styled from "styled-components/macro";

export const ContactSection = styled.div`
   padding-top: 40px;
  display: flex;
  flex-direction: row ;
  flex-wrap: wrap;
  margin: 0 ;
`;

export const ContactForm = styled.div`
  color: black;
  margin:0;
  width: 100%;

  & input {
    border: none;
    border-bottom: 2px solid #295151;
    border-radius: 0;
    font-size: 20px;
    margin-bottom:10px;
  }


  & label {
    text-align: left;
  }

  & h1{
    font-size: 30px;
  color: black;
  margin: 20px 0;
  width: 100%;
  }

  & p {
    margin: 20px 0;
   
  }
  @media (max-width: 950px){
    p {
      padding:20px 0;
    }
  }
`;

export const NameAndEmail = styled.div`
    display: flex;
  margin: 0;
  width: 100%;
`;

export const Name = styled.div`
  width: 48%;
  margin: 0;
  & label {
    float: left;
  }
  @media (max-width: 950px) {
    width: 100%;
    padding: 25px 0px;
  }
`;

export const Email = styled.div`
  width: 48%;
  margin: 0;
  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const Subject = styled.div`
  display: inline-grid;
  width: 100%;
`;

export const Message = styled.div`
  display: inline-grid;
  width: 100%;
  height: 100px;
  padding-top: 30px;

  & textarea {
    border: none;
    border-bottom: 1px solid #295151;
  }
`;

export const StyledButton = styled.div`
  border: none;
  padding: 10px 10px;
  margin-top: 20px;
  width: 100px;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #805858;
  }
`;
