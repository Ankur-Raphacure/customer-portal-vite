import React, { useEffect, useRef, useState } from "react";
import { SkinCareStyled } from "./SkinCares.styled";
import { useHistory } from "react-router-dom";
import { ReactComponent as Scanicon } from "../../../assets/icons/layer1.svg";

interface AnalysisResults {
  pimples: number;
  fairness: number;
  darkness: number;
  oiliness: number;
  darkCircles: number;
  text: string;
}
const delay = 2000;
const articles = [
  {
    id: 1,
    img_1:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736399215988.png",
    step: "step 1",
    title: "Scan Your Face",
    sub_title: "Use your phone's camera to scan your skin.",
  },
  {
    id: 2,
    img_1:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736399266834.png",
    step: "step 2",
    title: "Get Analysis",
    sub_title: "Receive a detailed analysis of your skin condition.",
  },
  {
    id: 3,
    img_1:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736399302665.png",
    step: "step 3",
    title: "Receive Recommendations",
    sub_title: (
      <>
        Get personalized skincare advice and product
        <br />
        suggestions.
      </>
    ),
  },
];

const Skinarticles = [
  {
    id: 1,
    img_1:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736399353500.png",
    title: "Accurate Diagnosis",
    sub_title: "Detect skin issues early with precise analysis",
  },
  {
    id: 2,
    img_1:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736399405972.png",
    title: "Personalized Treatments",
    sub_title: "Tailor skincare routines to your unique needs",
  },
  {
    id: 3,
    img_1:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736399430309.png",
    title: "Track Progress",
    sub_title: "Monitor changes and improvements over time",
  },
  {
    id: 4,
    img_1:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736399467185.png",
    title: "Preventative Care",
    sub_title: "Identify potential problems before they surface",
  },
  {
    id: 5,
    img_1:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736399487806.png",
    title: "Informed Decisions",
    sub_title: "Choose the right products based on real data",
  },
  {
    id: 6,
    img_1:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736399506757.png",
    title: "Boost Confidence",
    sub_title: "Gain insights for healthier, glowing skin",
  },
];
interface Medication {
  name: string;
  description: any;
}

const SkinCares = () => {
  const history = useHistory();
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState<any>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [loading, setLoading] = useState(false);
  const canvasRef = useRef(null);
  const [results, setResults] = useState<AnalysisResults | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [show, setShow] = useState(false);
  const [medications, setMedications] = useState<Medication[]>([]);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const captureImage = () => {
    const canvas = canvasRef.current as HTMLCanvasElement | null;
    const video = videoRef.current as HTMLVideoElement | null;

    if (canvas && video) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext("2d");

      if (context) {
        context.drawImage(video, 0, 0);
        const imageDataUrl = canvas.toDataURL("image/jpeg");
        setImage(imageDataUrl);
      }

      if (video.srcObject && video.srcObject instanceof MediaStream) {
        video.srcObject
          .getTracks()
          .forEach((track: MediaStreamTrack) => track.stop());
      }
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target?.result) {
          setImage(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
      setShow(true);
    }
  };

  const analyzeImage = () => {
    setLoading(true);
    setShow(false);
    setTimeout(() => {
      setResults({
        pimples: Math.floor(Math.random() * 10),
        fairness: Math.floor(Math.random() * 100),
        darkness: Math.floor(Math.random() * 100),
        oiliness: Math.floor(Math.random() * 100),
        darkCircles: Math.floor(Math.random() * 100),
        text: "Sample text detected in the image",
      });
      setLoading(false);
    }, 5000);
  };

  const analysisResults: AnalysisResults = {
    pimples: 10,
    oiliness: 80,
    darkCircles: 70,
    fairness: 35,
    darkness: 0,
    text: "",
  };

  const suggestMedications = (results: AnalysisResults) => {
    const suggestions: Medication[] = [];

    if (results.pimples > 5) {
      suggestions.push({
        name: "Pimples ",
        description: [
          { suggest: "Benzoyl peroxide" },
          { suggest: "Salicylic acid" },
        ].map((item) => item.suggest),
      });
    }

    if (results.oiliness > 70) {
      suggestions.push({
        name: "Oiliness ",
        description: [
          { suggest: "Benzoyl peroxide" },
          { suggest: "Salicylic acid" },
        ].map((item) => item.suggest),
      });
    }

    if (results.darkCircles > 60) {
      suggestions.push({
        name: "Dark circles",
        description: [
          { suggest: "Vitamin C" },
          { suggest: "Hyaluronic acid" },
        ].map((item) => item.suggest),
      });
    }

    if (results.fairness < 40) {
      suggestions.push({
        name: "Firmness",
        description: [
          { suggest: "Vitamin C" },
          { suggest: "Retinol" },
          { suggest: "Kojic acid" },
        ].map((item) => item.suggest),
      });
    }
    if (results.darkness < 80) {
      suggestions.push({
        name: "Darkness",
        description: [
          { suggest: "Vitamin C" },
          { suggest: "Retinoids" },
          { suggest: "Kojic acid" },
        ].map((item) => item.suggest),
      });
    }

    setMedications(suggestions);
  };

  useEffect(() => {
    suggestMedications(analysisResults);
  }, [analysisResults]);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === articles.length - 1 ? 0 : prevIndex + 1,
        ),
      delay,
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <SkinCareStyled>
      <div className="ayurvedaWrapper">
        <header className="header">
          <div className="header-content">
            <div>
              <button
                className="btn btn-outline custom-btn"
                onClick={() => history.push("/womenscare")}
              >
                Back
              </button>
            </div>
            <h1>Your skin’s Best Friend</h1>
            <p>
              Download{" "}
              <span>
                {" "}
                <br />
                RaphaCure
              </span>{" "}
              App Now
            </p>
            <div className="btn-Wrapper">
              <button className="explore-btn btn btn-outline me-5">
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736398605307.png"
                  alt=""
                  className="me-3"
                />
                Google Play
              </button>
              <button className="explore-btn btn btn-outline">
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736398306279.png"
                  alt=""
                  className="me-3"
                />
                App Store
              </button>
            </div>
          </div>
          <div className="img-div">
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736398888240.png"
              alt=""
            />
          </div>
        </header>

        <div className=" scan-work-div">
          <div className="title-div">
            <h1>How It Works</h1>
            <p>Follow these simple steps to get started.</p>
          </div>
          <div className="img-div mt-5">
            <div className="slideshow">
              <div
                className="slideshowSlider "
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
              >
                {articles.map((item, idx) => (
                  <div className="slide" key={idx}>
                    <div className="slider-div">
                      <div>
                        <img src={item.img_1} alt="" />
                      </div>
                      <div className="titles-div">
                        <p>{item.step}</p>
                        <h1>{item.title}</h1>
                        <h6>{item.sub_title}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="d-flex scan-buts-div">
                <button
                  className="btn scan-btn me-5"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Scanicon />
                  Scan Now
                </button>
                {show && (
                  <button onClick={analyzeImage} className="btn scan-btn">
                    Analyze Image
                  </button>
                )}
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileUpload}
                />
              </div>
            </div>

            <div className="scan-phone d-flex">
              <div className="card me-4">
                {loading && <div className="line"></div>}
                <div className="img-divs">
                  {!image && (
                    <div className="mb-4">
                      <video ref={videoRef} />
                      <canvas ref={canvasRef} className="hidden" />
                      {videoRef.current?.srcObject && (
                        <button
                          onClick={captureImage}
                          className="bg-red-500 text-white px-4 py-2 rounded mt-2"
                        >
                          Capture
                        </button>
                      )}
                    </div>
                  )}
                  {image && (
                    <div className="mb-4">
                      <img src={image} alt="Captured" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container p-5">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4">
              {results && (
                <div className="scanned-img-result-div">
                  <img src={image} alt="Captured" className="img-fluid" />
                </div>
              )}
            </div>
            <div className="col-lg-6 col-md-12">
              {results && (
                <>
                  <div className="scan-content-div">
                    <h5>Scanning result</h5>
                    <div className="scan-btn-div">
                      <button className="btn btn-outline-secondary mb-2">
                        Pimples: {results.pimples}
                      </button>
                      <button className="btn btn-outline-secondary mb-2">
                        Fairness: {results.fairness}%
                      </button>
                      <button className="btn btn-outline-secondary mb-2">
                        Darkness: {results.darkness}%
                      </button>
                      <button className="btn btn-outline-secondary mb-2">
                        Oil Skin: {results.oiliness}%
                      </button>
                      <button className="btn btn-outline-secondary mb-2">
                        Dark circles: {results.darkCircles}%
                      </button>
                    </div>
                    <div className="scan-content-div">
                      <h4>Over-the-Counter Options</h4>
                      <p>
                        Note: While these over-the-counter options can be
                        helpful for many, it's essential to consult a
                        dermatologist for a personalized diagnosis and treatment
                        plan, especially if the dark circles are severe or
                        persistent.
                      </p>
                    </div>
                    <div className="ScanSuggestionMainCardDiv ">
                      {medications.map((medication, index) => (
                        <div className="ScanSuggestionCardDiv" key={index}>
                          <h5>{medication.name}</h5>
                          <ul>
                            {Array.isArray(medication.description) &&
                              medication.description.map((desc, i) => (
                                <li key={i}>{desc}</li>
                              ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          {results && (
            <div className="text-center scan-contact-btn-div mt-4">
              <button
                className="btn btn-primary"
                onClick={() => history.push("/doctor?q=Dermatologist")}
              >
                Doctor
              </button>
            </div>
          )}
        </div>

        <div className="Benefits-work-div">
          <div className="container text-center my-5 ">
            <div className="row">
              <div className="col-12 mb-4">
                <h1 className="heading-text">
                  Benefits of Advanced Skin Analysis
                </h1>
                <p className="heading-sub-text">
                  Unveil the Benefits of Advanced Skin Analysis
                </p>
              </div>
            </div>
            <div className="row">
              {Skinarticles.map((item) => (
                <div
                  className="col-md-4  d-flex justify-content-center"
                  key={item.id}
                >
                  <div className="custom-card p-4">
                    <img
                      src={item.img_1}
                      className="card-img-top"
                      alt={item.title}
                    />
                    <div className="card-body text-center">
                      <h5 className="custom-card-title">{item.title}</h5>
                      <p className="custom-card-text">{item.sub_title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      ;
    </SkinCareStyled>
  );
};

export default SkinCares;
