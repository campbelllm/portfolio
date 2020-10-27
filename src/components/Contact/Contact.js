import React from 'react';
import { useForm } from 'react-hook-form';
import { ContactSection, ContactForm, NameAndEmail, Subject, Message }from './contactStyledComponents'


const Contact = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <ContactSection>
      <ContactForm>
        <h1>Contact Me</h1>
        <p>I would love to hear from you! Send me feedback or ask me anything.</p>
    <form onSubmit={handleSubmit(onSubmit)}>
      <NameAndEmail>
      <input type="text" placeholder="Your Name" name="Name" ref={register({required: true, maxLength: 80})} />
      <input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
      </NameAndEmail>
      <Subject>
      <input type="text" placeholder="Subject" name="Subject" ref={register({required: true,  maxLength: 200})} />
      </Subject>
      <Message>
      <input type="text" placeholder="Message" name="Message" ref={register({required: true,  maxLength: 1000})} />
      </Message>

      <button type="submit">Submit</button>
    </form>
    </ContactForm>
    </ContactSection>
  );
}
 export default Contact;