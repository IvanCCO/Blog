import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/modules";

export function SkillsCycle() {
  const javaIcon = (
    <img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Flogos-and-brands-adobe%2F512%2F181_Java-512.png&f=1&nofb=1&ipt=2dc819782713e42d357e3795ab8b952dfa9f154b6a66d63186a173d4b5712c50&ipo=images"
      className="h-20 w-10"
      alt=""
    />
  );

  return (
    <div className="h-36 w-full bg-gradient-to-r from-he-background via-he-cycle to-he-background opacity-30 place-items-center">
      <Swiper spaceBetween={20} slidesPerView={1} autoplay={true} zoom={true}>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  );
}
