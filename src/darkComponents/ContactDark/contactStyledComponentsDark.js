import styled from "styled-components/macro";

export const ContactSection = styled.div`
  padding: 200px 0px;
  display: flex;
  justify-content: center;
  background-color: #212529;
`;

export const ContactForm = styled.div`
  background-color: #343A40;
  width: 90%;
  color: white;
  padding: 50px;
  text-align: center;


  & input {
    border: none;
    border-bottom: 2px solid white;
    background-color: #343A40;
    border-radius: 0;
    font-size: 20px;
    margin-bottom:10px;
    color: white;
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
    border-bottom: 2px solid white;
    background-color: #343A40;
    border-radius: 0;
    color: white;
  }
`;

export const StyledButton = styled.div`
  background-color: white;
  border: none;
  padding: 10px 10px;
  margin-top: 20px;
  width: 100px;
  border-radius: 4px;
  text-align: center;
  color: black;
  &:hover {
    background-color: #212529;
    color: white;
  }
`;
