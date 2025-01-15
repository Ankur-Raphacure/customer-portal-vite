import homebanner1 from "../../assets/images/home-banner-1.webp";
import homebanner2 from "../../assets/images/home-banner-2.webp";
import dentalcarebanner from "../../assets/images/dentalcarebanner.png";
import pharmacy from "../../assets/images/pharmacy.png";
import ctmri1 from "../../assets/images/ctmri1.png";
import ayurveda2 from "../../assets/images/ayurveda2.png";
import mentalwellness2 from "../../assets/images/mentalwellness2.png";

import womens1 from "../../assets/images/womens1.png";


import eldercare from "../../assets/images/eldercare1.png";

const banners = {
  labtest: [homebanner1, homebanner2],
  doctor: ["https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736424148728.png", "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736426162942.png"],
  dentalcarebanner: [dentalcarebanner, false],
  eyecarebanner: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736423317465.png",
  pharmacy: [pharmacy],

  ctmri: [ctmri1, "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736425228517.png"],
  ayurveda: ["https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736423528721.png", ayurveda2],
  mentalwellness: ["https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736425814297.png", mentalwellness2],
  womens: [womens1, "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736425652336.png"],

  eldercare: [eldercare],
};

const TopBanner = ({ screenType }) => {
  const images = banners[screenType] || [];

  return (
    <div
      className="flex overflow-x-visible space-x-2 py-4 justify-content-sm-center"
      style={{ height: "200px" }}
    >
      {/* Banner 1 */}
      {images[0] && (
        <img
          src={images[0]}
          alt="Banner 1"
          className="object-contain h-full rounded-lg"
        />
      )}
      {/* Banner 2 */}
      {images[1] && (
        <img
          src={images[1]}
          alt="Banner 2"
          className="object-contain h-full rounded-lg"
        />
      )}
    </div>
  );
};

export default TopBanner;
