import { useHistory } from "react-router-dom";

const EquipmentCard = (props: any) => {
  const { item, handleBookNow } = props;
  const history = useHistory();

  console.log(item, "itemMatch");

  const equipmentList = [
    {
      id: 1,
      name: "Manual Wheelchair",
      size: '20" Wheelchair Holds up to 280 lbs',
      price_per_day: 250,
      unit: "Daily",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736501954993.png",
    },
    {
      id: 2,
      name: "Electric Wheelchair",
      size: '22" Wheelchair Holds up to 300 lbs',
      price_per_day: 500,
      unit: "Daily",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736501954993.png",
    },
    {
      id: 2,
      name: "Electric Wheelchair",
      size: '22" Wheelchair Holds up to 300 lbs',
      price_per_day: 500,
      unit: "Daily",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736501954993.png",
    },
    {
      id: 2,
      name: "Electric Wheelchair",
      size: '22" Wheelchair Holds up to 300 lbs',
      description: '22" Wheelchair Holds up to 300 lbs',
      price_per_day: 500,
      unit: "Daily",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736501954993.png",
    },
  ];

  return (
    <div className="equipment-card-list row">
      <div className="col-md-3 col-sm-6 equipment-card">
        <div className="equipment-image-container">
          <img
            src={
              item?.image
                ? item?.image
                : "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736503040591.png"
            }
            alt={item?.name}
            className="equipment-image"
          />
        </div>
        <h3>{item?.name}</h3>
        <p className="size">{item?.description}</p>
        <p className="price">
          {item?.price_per_day} / {item?.unit}
        </p>
        <button className="quick-view" onClick={() => handleBookNow(item)}>
          Quick View
        </button>
      </div>
    </div>
  );
};

export default EquipmentCard;
