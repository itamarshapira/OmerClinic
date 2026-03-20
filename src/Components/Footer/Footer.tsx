// import { FooterData } from '../Shared/Consts';
// import ContactDiv from './ContactDiv';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div id='contact' className="mt-20 px-5 md:px-0">
     
    <form className="w-full max-w-2xl mx-auto bg-[#fffaf6] rounded-3xl shadow-lg p-6 md:p-8 mt-6  "
    action="https://formspree.io/f/mkoqerov"
  method="POST"
 
    >
  <h3 className="text-2xl md:text-3xl font-bold text-[#3e2f25] text-center mb-2">
    יצירת קשר
  </h3>
  <div className="mt-6 flex justify-center items-center gap-6"> {/*WHATSAPP & INSTAGRAM ICONS*/}
  
  {/* WHATSAPP */}
  <a
    href="https://wa.me/972523972840"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#25D366] hover:scale-110 transition"
  >
    <FaWhatsapp size={28} />
  </a>

  {/* INSTAGRAM */}
  <a
    href="https://instagram.com/YOUR_USERNAME"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#c89b6d] hover:scale-110 transition"
  >
    <FaInstagram size={28} />
  </a>

</div>

  {/* <p className="text-center text-[#6b5b4d] mb-6">
    אפשר להשאיר פרטים ונחזור אליכם בהקדם
  </p> */}

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
    <div className="flex flex-col">
      <label className="mb-2 text-[#3e2f25] font-medium">שם מלא</label>
      <input
        type="text"
        name="fullName"
        placeholder="שם מלא "
        className="w-full rounded-2xl border border-[#e6d5c3] bg-white px-4 py-3 text-right text-[#3e2f25] outline-none focus:border-[#c89b6d]"
      />
    </div>

    <div className="flex flex-col">
      <label className="mb-2 text-[#3e2f25] font-medium">טלפון</label>
      <input
        type="tel"
        name="phone"
        placeholder="מספר טלפון"
        className="w-full rounded-2xl border border-[#e6d5c3] bg-white px-4 py-3 text-right text-[#3e2f25] outline-none focus:border-[#c89b6d]"
      />
    </div>

    <div className="flex flex-col md:col-span-2">
      <label className="mb-2 text-[#3e2f25] font-medium">אימייל</label>
      <input
        type="email"
        name="email"
        placeholder="כתובת אימייל"
        className="w-full rounded-2xl border border-[#e6d5c3] bg-white px-4 py-3 text-right text-[#3e2f25] outline-none focus:border-[#c89b6d]"
      />
    </div>

    <div className="flex flex-col md:col-span-2">
      <label className="mb-2 text-[#3e2f25] font-medium">הודעה</label>
      <textarea
        name="message"
        rows={5}
        placeholder="איך אפשר לעזור?"
        className="w-full rounded-2xl border border-[#e6d5c3] bg-white px-4 py-3 text-right text-[#3e2f25] outline-none resize-none focus:border-[#c89b6d]"
      />
    </div>
  </div>

  <div className="mt-6 text-center">
    <button
      type="submit"
      className="inline-block bg-[#c89b6d] hover:bg-[#b88a5f] text-white font-bold px-8 py-3 rounded-2xl shadow-md transition"
    >
      שליחת פרטים
    </button>
  </div>
</form>

  </div>

  );
};

export default Footer;
