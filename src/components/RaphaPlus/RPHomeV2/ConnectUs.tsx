import React, { useEffect, useState } from "react";
import { ConnectUsStyled } from "./ConnectUs.styled";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { MAP_KEY } from "../../../config";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addBookDemoRequestAPI } from "../../../redux/slices/hypersite/hypersiteService";

const containerStyle = {
  width: "100%",
  height: "350px",
};

const MapComponent = () => {
  const [currentPosition, setCurrentPosition] = useState<any>(null);

  // Load the Google Maps JavaScript API
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: MAP_KEY, // Replace with your API key
  });

  // Get user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error fetching geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mapWrapper">
      {currentPosition ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={currentPosition}
          zoom={15}
        >
          <Marker position={currentPosition} />
        </GoogleMap>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
};

const ConnectUs = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<any>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    if (id === "phone" && (!/^\d*$/.test(value) || value.length > 10)) {
      return; // Restrict phone input to digits and limit length to 10
    }

    // Dynamically set state based on the `id` of the input
    switch (id) {
      case "firstName":
        setFirstName(value);
        setErrors((prev: any) => ({ ...prev, firstName: "" }));
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        setErrors((prev: any) => ({ ...prev, email: "" }));
        break;
      case "phone":
        setPhone(value);
        setErrors((prev: any) => ({ ...prev, phone: "" }));
        break;
      case "message":
        setMessage(value);
        setErrors((prev: any) => ({ ...prev, message: "" }));
        break;
      default:
        break;
    }
  };

  const validate = () => {
    const newErrors: any = {};

    if (!firstName.trim()) newErrors.firstName = "First name is required.";
    if (!lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    if (!phone.trim()) newErrors.phone = "Phone number is required.";
    if (!message.trim()) newErrors.message = "Message is required.";

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      const payload = {
        email,
        phone,
        message,
        date: "2024-12-24",
        time: "06:00",
        type: "demorequests",
      };
  
      const res = await createBookDemoRequest(payload);
      if (res) {
        // Reset the form fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
      }
    }
  };
  

  const createBookDemoRequest = async (payload: any) => {
    try {
      const res = (await dispatch(addBookDemoRequestAPI(payload))) as any;
      const resp = res?.payload?.data?.demoRequest || {};
      if (res?.error) {
        toast.error(res.error.message || "Something went wrong");
        return false;
      } else {
        toast.success("Request submitted successfully");
        return true;
      }
    } catch (error) {
      console.error("Error submitting request:", error);
      toast.error("Something went wrong");
      return false;
    }
  };

  return (
    <ConnectUsStyled>
      <div className="contact-container">
        <div className="heading-section">
          <h2>Get in touch</h2>
          <p>
            Need assistance or have questions? Reach out to us—we're here to
            help!
          </p>
        </div>
        <div className="content-section">
          <div className="left-panel">
            <div className="map-section">
              <MapComponent />
              <div className="map-details">
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735128944716.png"
                  alt=""
                  className="icon"
                />
                <p>
                  38/3, 6th Cross, Vibgyor High School Road, opp. Thomas Square,
                  HSR Extension, Reliable Tranquil Layout, Bengaluru,
                  Karnataka-560102.
                </p>
              </div>
            </div>

            <div className="contact-details">
              <div className="contact">
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735128253824.png"
                  alt=""
                  className="icon"
                />
                <p>
                  <strong>Office Timings:</strong> Monday - Saturday (9:00am to
                  5pm), <br />
                  Sunday (Closed)
                </p>
              </div>
              <div className="contact">
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735128944716.png"
                  alt=""
                  className="icon"
                />
                <p>
                  <strong>Email:</strong> <br />
                  raphaplus.gmail.in
                </p>
              </div>
              <div className="contact">
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735129091355.png"
                  alt=""
                  className="icon"
                />
                <p>
                  <strong>Phone:</strong> <br />
                  +91 9999999999
                </p>
              </div>
            </div>
          </div>

          <div className="form-section">
            <form>
              <div className="name-group">
                <div className="name-item">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Vimal"
                    value={firstName}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.firstName && (
                    <span className="error">{errors.firstName}</span>
                  )}
                </div>
                <div className="name-item">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Anand"
                    value={lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="vimalanand@gmail.com"
                  value={email}
                  onChange={handleInputChange}
                  required
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  placeholder="+91 9473020100"
                  onChange={handleInputChange}
                  required
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={handleInputChange}
                  required
                  placeholder="Save me ! Rapha+"

                ></textarea>
                {errors.message && (
                  <span className="error">{errors.message}</span>
                )}
              </div>

              <button type="submit" onClick={handleSubmit}>
                Contact Us Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </ConnectUsStyled>
  );
};

export default ConnectUs;
