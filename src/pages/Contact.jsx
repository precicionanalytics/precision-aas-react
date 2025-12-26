import { useState } from 'react';
import PageHeader from '../components/PageHeader';

function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    
    if (window.emailjs) {
      try {
        // Log for debugging
        console.log("Sending email with EmailJS...");
        
        const result = await window.emailjs.sendForm(
          "service_d7z1ziq",
          "template_uahy44b",
          e.target,
          "bzt043SqfyPCt646u"
        );
        
        console.log("EmailJS Success:", result);
        alert("Message sent successfully! We'll get back to you soon.");
        setFormData({ from_name: '', from_email: '', subject: '', message: '' });
      } catch (error) {
        console.error("EmailJS Error Details:", error);
        
        // Show specific error message
        let errorMsg = "Sorry, there was an issue sending your message.";
        if (error.text) {
          errorMsg += "\nError: " + error.text;
        }
        errorMsg += "\n\nPlease email us directly at: precisionanalyticsas@gmail.com";
        
        alert(errorMsg);
      }
    } else {
      alert("Email service not loaded. Please email us at: precisionanalyticsas@gmail.com");
    }
  };

  return (
    <>
      <PageHeader title="Contact" />

      {/* Contact Start */}
      <div className="container-xxl py-3">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <h1 className="display-5 mb-4">If You Have Any Query, Please Contact Us</h1>
              <p className="mb-4">We're here to help! If you have any questions, need assistance, or just want to get in touch, feel free to reach out. Our team is always ready to provide support and answer any queries you may have. Simply fill out the form below, and we'll get back to you as soon as possible. If you want us to call you, please leave your phone number and preferred time, we will call you.</p>
              <form onSubmit={sendEmail}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        name="from_name"
                        id="name"
                        placeholder="Your Name"
                        value={formData.from_name}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        name="from_email"
                        id="email"
                        placeholder="Your Email"
                        value={formData.from_email}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="title">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        name="message"
                        style={{ height: '100px' }}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary py-3 px-5" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{ minHeight: '450px' }}>
              <div className="position-relative rounded overflow-hidden h-100">
                <div style={{ position: 'relative', width: '100%', height: '450px', overflow: 'hidden' }}>
                  <iframe
                    className="position-relative w-100 h-100"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53500.8!2d-96.7498!3d33.0617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19df77b7bfcf%3A0x8d644daa60778a0!2sPlano%2C%20TX%2075023!5e0!3m2!1sen!2sus!4v1735000000000!5m2!1sen!2sus"
                    frameBorder="0"
                    style={{ minHeight: '450px', border: '0' }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                  ></iframe>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '200px',
                    height: '200px',
                    border: '3px solid #0d6efd',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(13, 110, 253, 0.1)',
                    pointerEvents: 'none'
                  }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </>
  );
}

export default Contact;
