import React, { useEffect } from 'react';
import * as Styled from './style';

export const Contact = () => {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwASp5cYVJLiJZ5C5coDbSzdYu3fsAAMuXnzWl2plpJn1N6lfwGvYBIix8i3iR8d8vhdQ/exec';

  useEffect(() => {
    const form = document.forms['submit-to-google-sheet'];

    const handleSubmit = (e) => {
      e.preventDefault();
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
          console.log('Success!', response);
          form.reset(); // Reset the form fields after successful submission
        })
        .catch(error => console.error('Error!', error.message));
    };

    form.addEventListener('submit', handleSubmit);

    // Cleanup event listener on unmount
    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, []);

  return (
    <div>
      <Styled.FormSection>
        <Styled.Touch>
          <div className="touch">
            <h2 className="touchwith">Let's Get in Touch</h2>
            <p className="message">Write a message</p>
            <p className="para">
              Thank you for visiting my portfolio! If you have any questions, project inquiries, or just want to say hello, I’d love to hear from you. Feel free to reach out through the contact form, or connect with me on social media. I’m always open to new opportunities and collaborations. Let’s create something amazing together!
            </p>
          </div>
        </Styled.Touch>
        <Styled.Form>
          <div className="mainForm">
            <Styled.MainForm name="submit-to-google-sheet">
              {/* <div className="nameAddress"> */}
                <Styled.Input placeholder="Full Name" type="text" name="Name" />
              
              <Styled.InputLocation placeholder="Email Address" type="text" name="Email" />
              <Styled.TextArea placeholder="Write a message" type="text" name="Message" />
     
                <Styled.BtnDark  type="submit">
                  <p>Send Message</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none">
                    <path d="M11.6801 14.62L14.2401 12.06L11.6801 9.5" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M4 12.0601H14.17" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </Styled.BtnDark>
            </Styled.MainForm>
          </div>
        </Styled.Form>
      </Styled.FormSection>
    </div>
  );
};
