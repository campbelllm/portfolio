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
} from "./contactStyledComponentsDark";
import NavbarDark from '../NavbarDark/NavbarDark';
import FooterDark from '../FooterDark/FooterDark';

const Contact = () => {
  const { register, handleSubmit, reset} = useForm({
    defaultValues: {
      name: ""
    },
  });
  const onSubmit = (data, e) => {
    
    console.log(data, e);}
  return (
    <div>
    <NavbarDark/>
    <ContactSection>
      <ContactForm>
        <h1>Contact Me</h1>
        <p>
          I would love to hear from you! Send me feedback or ask me anything.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}  data-netlify="true">
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
          <StyledButton type="submit" onClick={() => reset({ name: "", email: "", subject: "", message: "" }) }>Submit</StyledButton>
        </form>
      </ContactForm>
    </ContactSection>
    <FooterDark/>
    </div>
  );
};
export default Contact;
