import React from "react";
import { useForm } from "react-hook-form";
import {
  ContactSection,
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
      <ContactForm>
        <h1>CONTACT</h1>
        <h1>ME</h1>
        <p>
          I would love to hear from you! Send me feedback or ask me anything.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}  data-netlify="true">
          <NameAndEmail>
            <Name>
              <input
                type="text"
                name="name"
                ref={register({ required: true, maxLength: 200 })}
              />
              <label for="name">who are you?</label>
            </Name>
            <Email>
              <input
                type="text"
                name="email"
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
              />
              <label for="email">what email can I reach you at?</label>
            </Email>
          </NameAndEmail>
          <Subject>
            <input
              type="text"
              name="subject"
              ref={register({ required: true, maxLength: 200 })}
            />
            <label for="subject">what are we chatting about?</label>
          </Subject>
          <Message>
            <textarea
              type="text"
              name="message"
              ref={register({ required: true, maxLength: 1000 })}
            ></textarea>
            <label for="Message">tell me more</label>
          </Message>
          <StyledButton type="submit" onClick={() => reset({ name: "", email: "", subject: "", message: "" }) }>Submit</StyledButton>
        </form>
      </ContactForm>
    </ContactSection>
  );
};
export default Contact;
