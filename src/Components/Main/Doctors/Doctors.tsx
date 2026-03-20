import { DoctorsData } from '@/Components/Shared/Consts';
import SectionWrapper from '../SectionWrapper';
import Doctor from './Doctor';
import { useState } from 'react';

const Doctors = () => {
  // Selected image for gallery (modal)
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <SectionWrapper id="תמונות">
      <h3 className="text-4xl font-bold text-center mb-20">
        {DoctorsData.heading}
      </h3>

      {/* GALLERY STRIP */}
      <div className="flex gap-6 overflow-x-auto px-5 md:p-0 cursor-pointer">
        {DoctorsData.doctors.map((doctor, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(doctor.img)}
            className="min-w-[200px] hover:scale-105 transition"
          >
            <Doctor doc={doctor} />
          </div>
        ))}
      </div>

      {/* MODAL (IMAGE VIEW) */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)} // close on click outside
        >
          <img
            src={selectedImage}
            alt="doctor"
            className="max-w-[90%] max-h-[80%] rounded-2xl shadow-2xl"
          />
        </div>
      )}

      {/* TEXT SECTION */}
      <h4 className="text-3xl tracking-wider font-bold text-center my-10 md:mt-20">
        {DoctorsData.heading2}
      </h4>

      <div className="mb-5 m-auto text-center max-w-2xl text-xs sm:text-base md:text-lg">
        {DoctorsData.desc}
      </div>

      <img className="m-auto" src={DoctorsData.img} />
    </SectionWrapper>
  );
};

export default Doctors;