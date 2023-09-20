import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import "./styles.scss";

const MyySwiper = ({ fotos }) => {
  console.log(fotos);

  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="Myswiper"
      >
        {fotos.map((imagen, ind) => (
          <SwiperSlide key={ind}>
            <div className="imagen-cont">
              <Image
                src={imagen.image}
                alt="portugal"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="card-img"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export { MyySwiper };
