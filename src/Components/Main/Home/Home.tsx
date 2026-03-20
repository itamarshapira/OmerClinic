import Button from '@/Components/UI/Button';
import hero from "@/assets/Images/hero.png";
//import DescNums from './DescNums' ddd 
import SectionWrapper from '../SectionWrapper';

const Home = () => {
  return (
    <SectionWrapper id="בית">
      <div className="flex flex-col-reverse  md:flex-row items-center justify-between gap-1 text-center md:text-left">
        <div className="tracking-wider md:tracking-normal max-w-md lg:max-w-2xl">
         <h1 className="lg:text-3xl text-3xl font-bold text-[#ab3b07ff]">
  עומר שמידט 
</h1>

  <h1 className="lg:text-3xl text-3xl font-bold text-[#ab3b07ff]">
  רפואה סינית
</h1>

<p className="text-lg md:text-base lg:text-xl my-10 text-[#6b5b4d] leading-relaxed">
  טיפול אישי ומקצועי המבוסס על עקרונות הרפואה הסינית,
  לאיזון הגוף והנפש, הפחתת כאבים ושיפור איכות החיים.
</p>

<a href="#contact">
  <Button>צור קשר</Button>
</a>
        </div>
       <div className="w-100 sm:w-72 md:w-1/2 lg:w-2/5">
          <img src={hero} alt="hero" className="w-full h-auto object-contain" />
        </div>
      </div>
      {/* <DescNums /> */}
    </SectionWrapper>
  );
};

export default Home;
