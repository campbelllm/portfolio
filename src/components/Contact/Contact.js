import React from "react";
import {
  ContactSection,
  Title,
  HelloNote,
  ContactHead,
  ContactForm,
  NameAndEmail,
  Subject,
  Message,
  Email,
  Name,
  StyledButton,
} from "./contactStyledComponents";



const Contact = () => {
    const submitMessage = function (e) {
        alert("Thank you for your message!")
    }
  return (
    <ContactSection>
      <ContactHead>
        <Title>
          <h1>CONTACT</h1>
          <h1>ME</h1>
        </Title>
        <HelloNote>
          <p>hello, I'm excited to connect with you!</p>
          <a href="/">return home</a>
        </HelloNote>
      </ContactHead>
      <ContactForm>
        <form name="contact" method="post" onSubmit={submitMessage}>
          <input type="hidden" name="form-name" value="contact" />
          <NameAndEmail>
            <Name>
              <label type="name">name:</label>
              <input
                type="text"
                name="name"
                placeholder="who are you?"
                maxLength="200"
                required
              />
            </Name>
            <Email>
              <label type="email">email:</label>
              <input
                type="email"
                name="email"
                placeholder="where can I reach you?"
                required
              />
            </Email>
          </NameAndEmail>
          <Subject>
            <label type="subject">subject:</label>
            <input
              type="text"
              name="subject"
              placeholder="what are we chatting about?"
              maxLength="200"
              required
            />
          </Subject>
          <Message>
            <label type="Message">message:</label>
            <textarea
              type="text"
              name="message"
              placeholder="tell me more..."
              maxLength="5000"
              required
            ></textarea>
          </Message>
          <StyledButton>
            <button type="submit" name="submit">SEND</button> 
          </StyledButton>
          <Message
            success
            header="Form completed"
            content="Thank you for your contribution."
        />
        </form>
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;
