const Contact = () => {
  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-4xl text-center font-bold font-playFair my-6 lg:mb-10">Contact Us</h2>
      <p>
        Have a question, suggestion, or just want to say hello? We would love to hear from you! Feel free to reach out to us using the following contact information:
      </p>
      <div className="my-6">
        <h2 className="font-bold text-xl mb-2">Social Media:</h2>
        <ul className="list-disc pl-5 underline">
          <li><a>Facebook</a></li>
          <li><a>Instagram</a></li>
          <li><a>Twitter</a></li>
          <li><a>LinkedIn</a></li>
        </ul>
      </div>
      <p>
        Our team is dedicated to providing exceptional customer service and support. Whether you need assistance with your account, have feedback on our website, or just want to chat about your favorite books, we are here to help!
      </p>
    </div>
  );
};

export default Contact;