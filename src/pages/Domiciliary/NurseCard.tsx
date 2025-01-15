import treatImage from "../../assets/images/nurse_img.png";
import { Image } from "react-bootstrap";

const NurseCard = (props: any) => {
  const { item, habdleBookNow } = props;

  return (
    <div className="nurse-card-list">
      <div className="nurse-card">
        <div className="nurse-image-container">
          <img
            src={item?.image ? item.image : treatImage}
            alt={item.name}
            className="nurse-image"
          />
        </div>
        <h2> {item?.first_name}</h2>

        <p className="certification">{item.specialization}</p>
        <p className="experience">
          {" "}
          <Image src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736500403635.png" /> {item?.years_of_experience ?? "1"} Years
          Experience
        </p>
        <p className="languages">
          {" "}
          <Image src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736500447140.png" /> {item?.languages_known}
        </p>
        <button
          className="book-now"
          //  onClick={() => habdleBookNow(item)}
          onClick={() => habdleBookNow(item[1])}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default NurseCard;
