import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex-1">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> super</span> Quality
          <span className="text-coral-red"> shoes</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text ">
          Ensuiring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to details and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="view details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoeImage"
          className="object-contain"
          width={570}
          height={522}
        />
      </div>
    </section>
  );
};

export default SuperQuality;
