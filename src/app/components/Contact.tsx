// components/Contact.js
export default function Contact() {
    return (
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h3 data-aos="fade-up" className="text-3xl font-bold text-center text-blue-600 mb-8">Contact</h3>
          <form data-aos="fade-up"className="space-y-4 max-w-md mx-auto">
            <input data-aos="fade-up" type="text" placeholder="Name" className="w-full p-3 border rounded"/>
            <input data-aos="fade-up" type="email" placeholder="Email" className="w-full p-3 border rounded"/>
            <textarea data-aos="fade-up" placeholder="Message" className="w-full p-3 border rounded"></textarea>
            <button data-aos="fade-up" className="w-full bg-blue-500 text-white font-bold py-3 rounded">Send Message</button>
          </form>
        </div>
      </section>
    );
  }
  