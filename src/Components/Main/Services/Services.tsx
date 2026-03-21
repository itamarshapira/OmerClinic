import { ServicesData } from '@/Components/Shared/Consts';
import Button from '@/Components/UI/Button';
import Service from './Service';
import { useState } from 'react';
import ListItem from './ListItem';
// import Banner1 from './Banner1';
import SectionWrapper from '../SectionWrapper';

const Services = () => {
  // WHY:
  // We store the selected service id in state.
  // When the user clicks a different service, we update this value
  // and show the matching content on the right.
  const [SelectService, setSelectService] = useState<string>('acupuncture');

  // WHY:
  // We find the full object of the currently selected service
  // so we can display its heading + bullet texts.
  const selectedServiceData = ServicesData.find(
    (service) => service.id === SelectService
  );

  return (
    <SectionWrapper id="טיפולים">
      <h2 className="text-4xl font-bold text-center mb-10 text-[#ab3b07ff]">
        טיפולים
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
        {/* Left side: services selector grid */}
        <div className="w-full lg:w-[48%]">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {ServicesData?.map((service) => (
              <Service
                key={service.id}
                service={service}
                SelectService={SelectService}
                setSelectService={setSelectService}
              />
            ))}
          </div>
        </div>

        {/* Right side: selected service details card */}
        <div
          key={SelectService}
          className="w-full lg:w-[52%] bg-white rounded-[28px] border border-[#f1e3d3] shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-6 sm:p-8 animate-fade-in-up"
        >
          <h3 className="text-2xl font-bold mb-6 text-[#1d4d85]">
            {selectedServiceData?.heading}
          </h3>

          <ul className="min-h-[260px] sm:min-h-[220px] lg:min-h-[320px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 text-[#1d4d85]">
            {selectedServiceData?.texts.map((text, index) => (
              <ListItem key={index} text={text} />
            ))}
          </ul>

          <div className="mt-6">
            <a href="#contact">
              <Button>קביעת תור</Button>
            </a>
          </div>
        </div>
      </div>

      {/* <Banner1 /> */}
    </SectionWrapper>
  );
};

export default Services;