import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <img
        src={imgURL}
        alt="reviewImage"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-3 flex justify-center items-centergap-2.5">
        <img
          src={star}
          alt="reviewStar"
          width={24}
          height={24}
          className="object-contain m-0.5"
        />
        <p className="text-xl font-montserrat">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-center font-bold text-3xl">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
