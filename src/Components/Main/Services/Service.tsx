type Props = {
  SelectService: string;
  setSelectService: (value: string) => void;
  service: {
    img: string;
    title: string;
    id: string;
  };
};

const Service = ({ SelectService, setSelectService, service }: Props) => {
  return (
    <div
      onClick={() => setSelectService(service.id)}
      className={`${
        SelectService === service.id
          ? 'bg-[#e6d5c3] rounded-ss-[25px] xs:rounded-ss-[50px] sm:rounded-ss-[75px]'
          : 'bg-[#fffaf6] hover:bg-[#f3e7dc] rounded-lg'
      } cursor-pointer transition-all rounded-lg flex flex-col items-center gap-4 p-2 xs:p-4 lg:p-10 shadow-md`}
    >
      <img
        className="max-w-[30px] xs:max-w-[50px] md:max-w-[75px] lg:max-w-[60px]"
        src={service.img}
        alt={service.title}
      />
      <p className="text-[10px] font-bold sm:text-sm lg:text-xl text-[#ab3b07ff] text-center">
        {service.title}
      </p>
    </div>
  );
};

export default Service;