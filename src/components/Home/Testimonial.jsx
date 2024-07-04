import reviewData from "../../assets/data/review.json";
import { FaStar } from "react-icons/fa6";
import "../../assets/style/style.css";

//slide
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Testimonial = () => {
  return (
    <div className="px-3 md:px-20 my-20 space-y-7">
      <span className="border border-primary-navy py-2 px-4 rounded-full">
        Testimonial
      </span>
      <h1 className="text-4xl font-semibold text-primary-navy">
        What they say about us
      </h1>
      {/* slide for testimonial */}
      <Swiper
        slidesPerView={3}
        loop={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper mt-10"
      >
        {reviewData.map((review, index) => (
          <SwiperSlide key={index} className="mt-5">
            <div className="space-y-5">
              <h1 className=" font-semibold text-lg text-primary-navy">
                {review.title}
              </h1>
              <p className="text-primary-gray text-xs">{review.reviewText}</p>
              <div className="flex gap-3">
                <img src={review.image} alt="" className="h-11 w-11" />
                <div className="flex flex-col justify-center">
                  <p className="text-xs">
                    <span className="font-semibold">{review.name}</span>,{" "}
                    {review.profession}
                  </p>
                  <div className="inline-flex gap-1">
                    <FaStar className="text-[#FFE03D]" />
                    <FaStar className="text-[#FFE03D]" />
                    <FaStar className="text-[#FFE03D]" />
                    <FaStar className="text-[#FFE03D]" />
                    <FaStar className="text-[#FFE03D]" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
