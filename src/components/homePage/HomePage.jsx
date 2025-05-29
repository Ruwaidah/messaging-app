import "./HomePage.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { isLoading } = useSelector((state) => state.user);

  useGSAP(() => {
    gsap.set(".welcome-h4", { visibility: "visible" });
    // gsap.from(".welcome-h4", {
    //   transformOrigin: "center center",
    //   visibility: 0,
    //   ease: "power1.inOut",
    // });
    gsap.to(".welcome-h4", {
      opacity: 1,
      duration: 3,
      ease: "power1.inOut",
    });
  }, {});

  console.log(isLoading)

  return (
    <div className="HomePage">
      <div>
        <h4 className="welcome-h4">Welcome To Connect Messaging</h4>
      </div>
    </div>
  );
};

export default HomePage;
