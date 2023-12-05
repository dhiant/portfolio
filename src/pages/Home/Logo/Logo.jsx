import ProfilePicture from "../../../assets/images/profile-picture.jpg";
import "./logo.css";

const Logo = () => {
  return (
    <div className="logo-container w-fit lg:relative lg:-top-14">
      <img
        className="w-96 h-96 rounded-full"
        src={ProfilePicture}
        alt="Developer Sushant Dhimal"
      />
    </div>
  );
};

export default Logo;
