import UIUX_ICON from "../assets/uiux-icon.png";
import WEB_ICON from "../assets/web-icon.png";
import MOBILE_ICON from "../assets/mobile-icon.png";

export const Services = () => {
  return (
    <>
      <header className="service-header">
        <p>SERVICES</p>
        <h1>Expertise Services Let&apos;s check it out !</h1>
        <p>
          As a software engineer and UI/UX designer, I pride myself on being a
          versatile and passionate individual. With a strong technical
          background in software engineering
        </p>
      </header>
      <main className="service-container">
        <div className="container-1">
          <img src={UIUX_ICON} alt="icon" />
          <h1>UI UX Design</h1>
          <p>
            Expertise in UI/UX design, with various key aspects such as
            conducting user research, creating wireframes, and developing
            interactive prototypes and more.
          </p>
        </div>
        <div className="container-1">
          <img src={MOBILE_ICON} alt="icon" />
          <h1>Mobile Development</h1>
          <p>
            Extensive expertise in mobile app development, focusing on Android
            development using Java and cross-platform development using Flutter
            and Dart.
          </p>
        </div>
        <div className="container-1">
          <img src={WEB_ICON} alt="icon" />
          <h1>Web Development</h1>
          <p>
            Expertise in web development using technology like HTML5, CSS3,
            SASS, Tailwind CSS, JavaScript, ReactJS, NodeJS, ExpressJS, Mongoose
            and MongoDB
          </p>
        </div>
      </main>
    </>
  );
};
