import React from "react";
import "./WhyChoose.css";
import MapImg from "../../../assets/images/mapimg.png";

const VimeoVideo = () => {
  return (
    <section className="whychoose">
      <div className="container">
        <div className="whychoose-wrapper">
          <div className="whychoose-in-center">
            <img className="whychoose-img" src={MapImg} alt="map image" />
            <p className="whychoose-text">
              Ko‘plab kompaniyalar{" "}
              <span className="whychoose-subtext">
                "eng yaxshisini quramiz"
              </span>{" "}
              deyishadi, lekin yakunda siz chala ishlangan loyihalar va
              kechikkan muddatlar bilan qolasiz.
            </p>
            <h3 className="whychoose-title">Natija ?</h3>
            {/* Videooo */}

            <div className="video-container">
              <iframe
                className="whychoose-video"
                src="https://player.vimeo.com/video/1030357406?autoplay=1&loop=1&muted=1&controls=0&background=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Vimeo Video"
              ></iframe>
            </div>

            <p className="whychoose-text mb-5">
              Ko‘ngilsizlik va vaqt yo‘qotish. Bizda esa ishni boshqacha
              qilamiz.
            </p>
            <p className="whychoose-text mb-5">
              Biz har bir detalni{" "}
              <span className="whychoose-emp">puxta o‘ylaymiz</span>, murakkab
              jihatlarni oson va tushunarli qilyapmiz.
            </p>
            <p className="whychoose-text mb-5">
              Sizning <em className="text-[#E9674E]">loyihangizning</em> har bir
              bosqichi biz uchun mas'uliyat va mukammallikni anglatadi.
            </p>
            <p className="whychoose-text">
              Kelajakdagi binolaringizni sifat, ishonch va innovatsiya bilan
              quryapmiz. Birgalikda boshlaylik!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VimeoVideo;
