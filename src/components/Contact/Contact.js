import React from "react";
import { useForm } from "react-hook-form";
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
 const { register, handleSubmit, reset } = useForm();
  const submitForm = (data) => console.log(data);
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
        <form netlify name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contactForm" />
          <NameAndEmail>
            <Name>
              <label type="name">name:</label>
              <input
                type="text"
                name="name"
                placeholder="who are you?"
                ref={register({ required: true, maxLength: 200 })}
              />
            </Name>
            <Email>
              <label type="email">email:</label>
              <input
                type="text"
                name="email"
                placeholder="where can I reach you?"
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
              />
            </Email>
          </NameAndEmail>
          <Subject>
            <label type="subject">subject:</label>
            <input
              type="text"
              name="subject"
              placeholder="what are we chatting about?"
              ref={register({ required: true, maxLength: 200 })}
            />
          </Subject>
          <Message>
            <label type="Message">message:</label>
            <textarea
              type="text"
              name="message"
              placeholder="tell me more..."
              ref={register({ required: true, maxLength: 5000 })}
            ></textarea>
          </Message>
          <StyledButton
            type="submit"
            name="submit"
          >
            SEND <i class="fa fa-send-o"></i>
          </StyledButton>
        </form>
      </ContactForm>
    </ContactSection>
  );
};
export default Contact;
