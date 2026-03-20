import { descNums } from '@/Components/Shared/Consts';

const DescNums = () => {
  return (
    <div className="
  flex gap-5 mt-10
  overflow-x-auto md:overflow-visible
  px-5 md:px-0
  scrollbar-hide
">
      {descNums.map((descNum, index) => (
        <div
          className="rounded-3xl shadow-xl p-6 md:px-2 lg:w-1/5 w-xl bg-[#edb472]"
          key={index}
        >
          <h3 className="lg:text-4xl text-2xl font-bold mb-2">{descNum.num}</h3>
          <p className="lg:text-base text-sm">{descNum.text}</p>
        </div>
      ))}
    </div>
  );
};

export default DescNums;
