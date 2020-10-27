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
  padding: 100px;

  & input {
    border: none;
    border-bottom: 2px solid #295151;
    background-color: #819c8b;
    border-radius: 0;
  }
`;

export const NameAndEmail = styled.div`
  & input {
    font-size: 16px;
  }
`;

export const Name = styled.div`
  margin-right: 5px;
  display: inline-grid;
  & label {
    float: left;
  }
`;

export const Email = styled.div`
  display: inline-grid;
`;

export const Subject = styled.div`
  display: inline-grid;
`;

export const Message = styled.div`
  display: inline-grid;
`;

export const StyledButton = styled.div`
  background-color: #295151;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  width: 100px;
  border-radius: 4px;
  text-align: center;

  &:hover {
    background-color: #805858;
  }
`;
