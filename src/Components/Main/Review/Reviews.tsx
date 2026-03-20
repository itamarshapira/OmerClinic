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
    href="PUT_YOUR_GOOGLE_LINK_HERE"
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
