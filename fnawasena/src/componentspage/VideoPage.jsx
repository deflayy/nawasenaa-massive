import BackgroundVideo from "../img/1.png"; // Import gambar latar belakang

const VideoPage = () => {
  return (
    <div className="video-page">
      <div
        className="w-100 min-vh-100 video-container"
        style={{
          backgroundImage: `url(${BackgroundVideo})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="video-wrapper">
          <iframe
            width="760"
            height="515"
            src="https://www.youtube.com/embed/SjCMh5KfDAo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h2 className="video-title">
          Budidaya Maggot Black Soldier Fly Cara Ampuh Atasi Sampah Organik
        </h2>
      </div>
      <div className="small-video-container">
        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index} className="small-video-wrapper">
            <iframe
              width="200"
              height="150"
              src="https://www.youtube.com/embed/SjCMh5KfDAo"
              title={`Small YouTube video player ${index}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
