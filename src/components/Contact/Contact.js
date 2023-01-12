import React from "react";
import { useForm } from "react-hook-form";
import {
  ContactSection,
  Title,
  HelloNote,
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
        <Title>
          <h1>CONTACT</h1>
          <h1>ME</h1>
        </Title>
        <HelloNote>
          <p>
            Can't wait to get your message!
          </p>
        </HelloNote>

        <form onSubmit={handleSubmit(onSubmit)} data-netlify="true">
          <NameAndEmail>
            <Name>
              <label for="name">Name:</label>
              <input
                type="text"
                name="name"
                placeholder="who are you?"
                ref={register({ required: true, maxLength: 200 })}
              />
            </Name>
            <Email>
              <label for="email">what email can I reach you at?</label>
              <input
                type="text"
                name="email"
                placeholder="email"
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
              />
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
          <StyledButton
            type="submit"
            onClick={() =>
              reset({ name: "", email: "", subject: "", message: "" })
            }
          >
            ready... set... SEND
          </StyledButton>
        </form>
      </ContactForm>
    </ContactSection>
  );
};
export default Contact;
