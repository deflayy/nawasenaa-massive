import BackgroundVideo from "../img/1.png"; // Import gambar latar belakang
import "../css/Vidio.css";
const VideoPage = () => {
  return (
    <div className="video-page">
      <div
        className="w-100 min-vh-100 video-container d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${BackgroundVideo})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="video-wrapper mb-4">
          <iframe
            width="760"
            height="515"
            src="https://www.youtube.com/embed/SjCMh5KfDAo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="main-video"
          ></iframe>
        </div>
        <h2 className="video-title text-center text-white">
          Budidaya Maggot Black Soldier Fly Cara Ampuh Atasi Sampah Organik
        </h2>
      </div>
      <div className="small-video-container container mt-4">
        <div className="row">
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="small-video-wrapper">
                <iframe
                  width="100%"
                  height="150"
                  src="https://www.youtube.com/embed/SjCMh5KfDAo"
                  title={`Small YouTube video player ${index}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="small-video"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
