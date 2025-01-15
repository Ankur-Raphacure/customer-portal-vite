import { useHistory } from "react-router-dom";

const VaccineCard = (props: any) => {
  const history = useHistory();
  return (
    <div className="nurse-card-list">
      {props?.list?.map((nurse: any, index: any) => (
        <div key={index} className="nurse-card">
          <div className="nurse-image-container image">
            <img
              src={nurse?.image ? nurse?.image : "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736502119141.png"}
              alt={nurse?.name}
              className="nurse-image2"
            />
          </div>
          <h2>{nurse?.service_name}</h2>
          <p className="certification">{nurse?.description}</p>
          <p className="price">{nurse?.price?.discounted_price}</p>
          <div className="btn-container">
            <button className="book-now view">View Details</button>
            <button
              className="book-now"
              onClick={() => {
                history.push(`/labTestDetils/${nurse?.service_code}`);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VaccineCard;
