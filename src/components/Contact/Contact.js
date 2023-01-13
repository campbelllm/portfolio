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
  const onSubmit = (data) => console.log(data);
  return (
    <ContactSection>
      <ContactHead>
        <Title>
          <h1>CONTACT</h1>
          <h1>ME</h1>
        </Title>
        <HelloNote>
          <p>hello, I'm excited to connect with you!</p>
        </HelloNote>
        </ContactHead>
        <ContactForm>
        <form name="contact" netlify contact="campbelllm@gmail.com">
          <NameAndEmail>
            <Name>
              <label for="name">name:</label>
              <input
                type="text"
                name="name"
                placeholder="who are you?"
                ref={register({ required: true, maxLength: 200 })}
              />
            </Name>
            <Email>
              <label for="email">email:</label>
              <input
                type="text"
                name="email"
                placeholder="where can I reach you?"
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
              />
            </Email>
          </NameAndEmail>
          <Subject>
            <label for="subject">subject:</label>
            <input
              type="text"
              name="subject"
              placeholder="what are we chatting about?"
              ref={register({ required: true, maxLength: 200 })}
            />
          </Subject>
          <Message>
            <label for="Message">message:</label>
            <textarea
              type="text"
              name="message"
              placeholder="tell me more..."
              ref={register({ required: true, maxLength: 5000})}
            ></textarea>
          </Message>
          <StyledButton
            type="submit"
            onClick={() =>
              reset({ name: "", email: "", subject: "", message: "" })
            }
          >
            
           SEND  <i class="fa fa-send-o"></i>
          </StyledButton>
        </form>
      </ContactForm>
    </ContactSection>
  );
};
export default Contact;
