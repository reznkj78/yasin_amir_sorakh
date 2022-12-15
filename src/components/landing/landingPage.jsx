import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

import "../../styles/landing.css";

const Landing = () => {
  const navigate = useNavigate();
  const [audioStatus, changeAudioStatus] = useState(false);
  const [AudioData, SetAudioData] = useState();

  const loadedAudio = async () => {
    const audio = new Audio(
      "https://dl.newsong.ir/music/97/03/Abdolbaset%20Hamd%20Surah_(www.new-song.ir).mp3"
    );
    audio.load();
    console.log("hh");
    SetAudioData(audio, audio.load());
  };

  const startAudio = () => {
    AudioData.play();
    changeAudioStatus(true);
  };

  const pauseAudio = () => {
    console.log("here");
    AudioData.pause();
    changeAudioStatus(false);
  };

  useEffect(() => {
    loadedAudio();
  }, []);

  return (
    <>
      <div className="landingContainer ">
        {
          audioStatus ?
          <>
        <div className="landing-inner-Container d-flex justify-content-center align-items-center flex-column  flex-sm-row">
          <div className="landing-hive-Container">
            <span class="iconify" data-icon="ph:soccer-ball-duotone"></span>
          </div>

          <div className=" landingTitle-conatiner justify-content-center">
            <h1
              onClick={(e) => startAudio()}
              className="text-center text-muted "
            >
              مراسم ختم گنده گوز pes
              <strong className="landing-title">یاسن و رفیقش امیر</strong>
            </h1>
            <p className="text-center text-muted m-0">
              در این صفحه مراسمی به رسم یاد بود از داستان 152 هزارتومن و گنده
              گوز اصغری و امیر خواهید شنید تا اخر مطالب را بخوانید :)))
            </p>
          </div>
        </div>
        <div className="  justify-content-center">
          <img
            class="img-fluid rounded mx-auto d-block"
            src="./img/yasin.jpg"
          />
          <h5 className="text_center qamm">
            این عکس مرحومه مغفوره{" "}
            <strong className="landing-title">یاسین</strong> هستش البته خودش
            نیست شبیه خودشه (لاشی سگ کپی برابر اصله) ادعاش تو پی اس باسن
            مبارک خرو پاره میکنه چهارشنبه رفیقشم اورد اسمش امیر بود باعث شد 152
            فاکینگ هزارتومن تو پاچشون بره امیر یک لحظه خواست یاسنو ابستن کنه ولی
            رضا و اروین نزاشتن سلاطین گنده گوز امروز با یک باخت و پاره شدن
            تیمشون سر به پایین با چشمانی پر از اشک و گلویی پر بغض میادین را ترک
            کردند باشد که با تمرین بیشتر حریفی بهتر برای اروین و رضا شوند
          </h5>

          <h1 className="qamm2">
            این ضایعه بزرگ رو در غم از دست دادن 152 هزار تومن و باخت سنگین به
            شما تسلیت عرض میکنیم و مارو در غم خود شریک بدارید
          </h1>
          <p
            style={{
              fontFamily: "FarsiTehran",
              fontSize: "1.5em",
              textAlign: "center",
            }}
          >
            از طرف رضا و اروین و جمعی از کسبه گیم نت الفا
          </p>
        </div>
        </>
        :
        <button onClick={e=>startAudio()} className="startPlayer">برای ورود به مراسم ختم یاسین و رفیقش امیر کلیک کنید</button>
        }
      </div>
    </>
  );
};

export default Landing;
