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
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <ContactSection>
      <ContactForm data-netlify="true">
        <h1>Contact Me</h1>
        <p>
          I would love to hear from you! Send me feedback or ask me anything.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <NameAndEmail>
            <Name>
              <input
                type="text"
                name="name"
                ref={register({ required: true, maxLength: 80 })}
              />
              <label for="name">Name</label>
            </Name>
            <Email>
              <input
                type="text"
                name="email"
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
              />
              <label for="email">Email</label>
            </Email>
          </NameAndEmail>
          <Subject>
            <input
              type="text"
              name="subject"
              ref={register({ required: true, maxLength: 200 })}
            />
            <label for="subject">Subject</label>
          </Subject>
          <Message>
            <textarea
              type="text"
              name="message"
              ref={register({ required: true, maxLength: 1000 })}
            ></textarea>
            <label for="Message">Message</label>
          </Message>
          <StyledButton type="submit">Submit</StyledButton>
        </form>
      </ContactForm>
    </ContactSection>
  );
};
export default Contact;
