import { FeedbackData } from '@/Components/Shared/Consts';
import SectionWrapper from '../SectionWrapper';
import Review from './Review';

const Reviews = () => {
  return (
    <SectionWrapper id="המלצות">
      
      <h3 className="text-3xl font-bold text-center mb-10 md:mb-20">
        {FeedbackData.heading}
      </h3>
      <div className="items-center flex flex-col md:flex-row justify-center gap-5">
        {FeedbackData.feedbacks.map((user, index) => (
          <Review key={index} index={index} user={user} />
        ))}
 <div className="mt-10 text-center">
  {/* RATING */}
  <div className="flex justify-center items-center gap-2 mb-3">
    <span className="text-2xl text-[#edb472]">★★★★★</span>
    <span className="text-[#edb472] font-semibold">5 / 5</span>
  </div>

  {/* TEXT */}
  <p className="text-[#edb472] mb-4">
    מבוסס על ביקורות מטופלים בגוגל
  </p>

  {/* BUTTON */}
  <a
    href="https://www.google.com/search?q=%D7%A2%D7%95%D7%9E%D7%A8+%D7%A9%D7%9E%D7%99%D7%93%D7%98&sca_esv=ea5941a1fd0faf3f&udm=1&biw=1745&bih=828&sxsrf=ANbL-n6ilSA2YguawAbQ6VySMxUjiQrwjQ%3A1774004346451&ei=eii9acyYG8yExc8PupDGCQ&ved=0ahUKEwjMvZmXqa6TAxVMQvEDHTqIMQEQ4dUDCBE&uact=5&oq=%D7%A2%D7%95%D7%9E%D7%A8+%D7%A9%D7%9E%D7%99%D7%93%D7%98&gs_lp=EhZnd3Mtd2l6LW1vZGVsZXNzLWxvY2FsIhPXoteV157XqCDXqdee15nXk9eYMggQABiABBjLATIFEAAY7wUyCBAAGIAEGKIEMggQABiABBiiBDIFEAAY7wUyBRAAGO8FSPsKUABY1glwAHgAkAEAmAHdAaABlAyqAQUwLjkuMbgBA8gBAPgBAZgCCqACwgzCAgUQABiABMICBhAAGBYYHsICCBAAGBYYChgemAMAkgcFMC45LjGgB5wzsgcFMC45LjG4B8IMwgcFMC4zLjfIByGACAA&sclient=gws-wiz-modeless-local&lqi=ChPXoteV157XqCDXqdee15nXk9eYSNTMh4j3vYCACFodEAAQARgAGAEiE9ei15XXnteoINep157XmdeT15iSARdjaGluZXNlX21lZGljaW5lX2NsaW5pYw#lkt=LocalPoiReviews&rlimm=3321428098449491352"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-block
      bg-[#edb472] hover:bg-[#edb472]
      text-white font-bold
      px-6 py-3
      rounded-2xl
      shadow-md
      transition
    "
  >
    לצפייה בכל הביקורות בגוגל
  </a>
</div>
      </div>
      
    </SectionWrapper>
  );
};

export default Reviews;
