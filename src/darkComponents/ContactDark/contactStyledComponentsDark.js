import styled from "styled-components/macro";

export const ContactSection = styled.div`
  padding: 200px 0px;
  display: flex;
  justify-content: center;
`;

export const ContactForm = styled.div`
  background-color: #819c8b;
  width: 90%;
  color: #f2e8cf;
  padding: 50px;
  text-align: center;

  & input {
    border: none;
    border-bottom: 2px solid #295151;
    background-color: #819c8b;
    border-radius: 0;
    font-size: 20px;
    margin-bottom:10px;
  }


  & label {
    text-align: left;
  }

  & h1{

  }

  & p {
    padding: 50px;
   
  }
  @media (max-width: 950px){
    p {
      padding:20px 0;
    }
  }
`;

export const NameAndEmail = styled.div`
    margin-bottom: 20px;
`;

export const Name = styled.div`
  margin-right: 30px;
  display: inline-grid;
  width: 48%;;
  & label {
    float: left;
  }
  @media (max-width: 950px){
    width: 100%;
    padding: 25px 0px;
  }
`;

export const Email = styled.div`
  display: inline-grid;
  width: 48%;
  margin-bottom: 20px;
  @media (max-width: 950px){
    width:100%;
  }
`;

export const Subject = styled.div`
  display: inline-grid;
  width: 100%;
  margin-bottom: 20px;
`;

export const Message = styled.div`
  display: inline-grid;
  width: 100%;
  height: 100px;

  & textarea {
    border: none;
    border-bottom: 2px solid #295151;
    background-color: #819c8b;
    border-radius: 0;
  }
`;

export const StyledButton = styled.div`
  background-color: #295151;
  border: none;
  padding: 10px 10px;
  margin-top: 20px;
  width: 100px;
  border-radius: 4px;
  text-align: center;

  &:hover {
    background-color: #805858;
  }
`;
