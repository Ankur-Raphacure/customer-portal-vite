import { useHistory } from "react-router-dom";

const EyecareCatogory = () => {
  const history = useHistory();

  const services = [
    {
      name: "Doctors",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736335690193.png",
      link: "/doctor",
      subText: "Bringing Hope and Health Together",
    },
    {
      name: "Clinics & Hospitals",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736335742620.png",
      link: "/eyecare/allclinics",
      subText: "Innovative Care for a Healthier Community",
    },
    {
      name: "Vision Test & Services",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736335782853.png",
      link: "/eyecare/visiontest",
      subText: "Precision Eye Care, Personalized Service",
    },
    {
      name: "Eye wear & Accessories",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736335823234.png",
      link: "/eyecare/accessories",
      subText: "Experience Clarity and Fashion in Every Frame",
    },
    {
      name: "Read Blogs",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736335858683.png",
      link: "/womenscare/nutritiondiets",
      subText: "Discover Expert Tips and Insights in Our Blog",
    },
  ];

  const handleCardClick = (link: any) => {
    history.push(link);
  };

  return (
    <div className="categoryCardMainDiv">
      {services.map((service, index) => (
        <div
          key={index}
          className="Main"
          onClick={() => handleCardClick(service.link)}
        >
          <div className="image-div">
            <img
              src={service.image}
              alt={service.name}
              className="rounded-circle roundedImages"
            />
          </div>
          <div className="imageName">{service.name}</div>
          <div className="imageSubtitle">{service.subText}</div>
        </div>
      ))}
    </div>
  );
};

export default EyecareCatogory;
