import React, { useState } from "react";
import { BookAppointmentStyled } from "./BookAppointment.styled";
import SideFilterModule from "../../Pharmacy/SideFilterModule";
import { IoIosStar } from "react-icons/io";
import { useHistory } from "react-router-dom";

const appointmentsData = [
  {
    id: 1,
    name: "Dr. Sarah Patel, MD",
    department: "Pediatric Department",
    experience: "5 + Years",
    languages: ["English", "Hindi", "Tamil"],
    inClinicFee: 500,
    videoConsultFee: 300,
    gender: "Female",
    consultantType: "OPD Consultant",
    specialization: "Pediatric",
    slots: 23,
  },
  {
    id: 2,
    name: "Dr. Ramesh Kumar, MD",
    department: "Dental Department",
    experience: "10 + Years",
    languages: ["English", "Kannada", "Hindi"],
    inClinicFee: 400,
    videoConsultFee: 250,
    gender: "Male",
    consultantType: "Online Consultant",
    specialization: "Dentist",
    slots: 15,
  },
  {
    id: 3,
    name: "Dr. Priya Singh, MD",
    department: "General Surgery",
    experience: "8 + Years",
    languages: ["English", "Hindi"],
    inClinicFee: 300,
    videoConsultFee: 200,
    gender: "Female",
    consultantType: "OPD Consultant",
    specialization: "General Surgeon",
    slots: 10,
  },
];

const BookAppointment = (props: any) => {
  const [filters, setFilters] = useState<any>({
    gender: "",
    specialization: "",
    consultantType: "",
    priceRange: [0, 500],
  });

  const history = useHistory();

  const [filteredAppointments, setFilteredAppointments] =
    useState(appointmentsData);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("Recommended");

  const handleFilterChange = (filterType: string, value: string | number[]) => {
    const updatedFilters = { ...filters, [filterType]: value };
    setFilters(updatedFilters);

    const updatedTags = activeTags.filter((tag) => !tag.startsWith(filterType));
    if (value && value !== "") {
      updatedTags.push(`${filterType}: ${value}`);
    }
    setActiveTags(updatedTags);

    let filtered = appointmentsData;
    if (updatedFilters.gender) {
      filtered = filtered.filter(
        (appointment) => appointment.gender === updatedFilters.gender,
      );
    }
    if (updatedFilters.specialization) {
      filtered = filtered.filter(
        (appointment) =>
          appointment.specialization === updatedFilters.specialization,
      );
    }
    if (updatedFilters.consultantType) {
      filtered = filtered.filter(
        (appointment) =>
          appointment.consultantType === updatedFilters.consultantType,
      );
    }
    if (updatedFilters.priceRange) {
      filtered = filterByPriceRange(filtered, updatedFilters.priceRange);
    }

    setFilteredAppointments(filtered);
  };

  const handleFilterSelect = (filter: string) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters((prev) => [...prev, filter]);
    }
  };

  const handleRemoveFilter = (filter: string) => {
    setActiveFilters((prev) => prev.filter((item) => item !== filter));
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
  };

  const removeTag = (tag: string) => {
    const [filterType] = tag.split(":");
    const updatedFilters = { ...filters, [filterType]: "" };
    setFilters(updatedFilters);

    setActiveTags(activeTags.filter((activeTag) => activeTag !== tag));

    const filtered = appointmentsData.filter((appointment) => {
      const matchGender =
        updatedFilters.gender === "" ||
        appointment.gender === updatedFilters.gender;
      const matchSpecialization =
        updatedFilters.specialization === "" ||
        appointment.specialization === updatedFilters.specialization;
      const matchConsultantType =
        updatedFilters.consultantType === "" ||
        appointment.consultantType === updatedFilters.consultantType;

      return matchGender && matchSpecialization && matchConsultantType;
    });

    setFilteredAppointments(filtered);
  };

  const handleSortChange = (sortValue: string) => {
    setSortBy(sortValue);
    const sortedAppointments = [...filteredAppointments].sort((a, b) => {
      if (sortValue === "Experience") {
        return parseInt(b.experience) - parseInt(a.experience);
      } else if (sortValue === "Fee: Low to High") {
        return a.inClinicFee - b.inClinicFee;
      } else if (sortValue === "Fee: High to Low") {
        return b.inClinicFee - a.inClinicFee;
      }
      return 0;
    });

    setFilteredAppointments(sortedAppointments);
  };

  const [range, setRange] = useState<[number, number]>([0, 500]);

  const filterByPriceRange = (appointments: any, priceRange: any) => {
    return appointments.filter(
      (appointment: any) =>
        appointment.inClinicFee >= priceRange[0] &&
        appointment.inClinicFee <= priceRange[1],
    );
  };

  const handleSliderChange = (value: [number, number]) => {
    setRange(value);
    handleFilterChange("priceRange", value);
    try {
      setRange(value);
      if (typeof props.filterPriceRange === "function") {
        props.filterPriceRange(value);
      } else {
        console.warn("filterPriceRange is not provided or is not a function.");
      }
    } catch (error) {
      console.error("Error handling slider change:", error);
    }
  };

  const handleInputChange = (value: [number, number]) => {};

  const Banner = ({ rating }: any) => {
    return (
      <div className="bannerWrapper">
        <div className="rectangle">
          <IoIosStar fill="#252B61" /> {rating}
        </div>
        <div className="triangle"></div>
      </div>
    );
  };

  const clearFilters = () => {
    setFilters({
      gender: "",
      specialization: "",
      consultantType: "",
      priceRange: [50, 500],
    });
    setFilteredAppointments(appointmentsData);
    setActiveTags([]);
  };

  console.log("Dropdown state:", dropdownOpen);
  const handleClearAll = () => {
    // clear all set states
  };
  const handleChangeBrandFilter = () => {};
  const handleChangeCategoryFilter = () => {};
  const handleChangeTypeFilter = () => {};
  const filterPriceRange = () => {};
  return (
    <BookAppointmentStyled>
      <div className="main">
        <div className="heading">
          <h1>Book Appointment</h1>
          <p>
            Do consectetur proident proident id eiusmod deserunt consequat{" "}
            <br />
            pariatur ad ex velit do Lorem reprehenderit.
          </p>
        </div>
        <div className="main-content">
          <div className="filters">
            <SideFilterModule
              handleClearAll={handleClearAll}
              handleChangeBrandFilter={handleChangeBrandFilter}
              handleChangeCategoryFilter={handleChangeCategoryFilter}
              handleChangeTypeFilter={handleChangeTypeFilter}
              filterPriceRange={filterPriceRange}
              handleInputChange={handleInputChange}
              origin={"bookAppointment"}
            />
          </div>
          <div className="appointments">
            <div className="tags">
              {/* <div className="filter-tags">
            {activeTags.map((tag) => (
              <span key={tag} onClick={() => removeTag(tag)}>
                {tag} ×
              </span>
            ))}
          </div> */}
              <div className="sort-dropdown">
                <div className="sort">
                  <label htmlFor="sortBy">Sort By:</label>
                  <select
                    id="sortBy"
                    value={sortBy}
                    onChange={(e) => handleSortChange(e.target.value)}
                  >
                    <option value="Recommended">Recommended</option>
                    <option value="Experience">Experience</option>
                    <option value="Fee: Low to High">Fee: Low to High</option>
                    <option value="Fee: High to Low">Fee: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="appointment-list">
              {filteredAppointments.map((appointment) => (
                <div className="appointment-card" key={appointment.id}>
                  <div className="left-middle">
                    <div className="card-left">
                      <Banner rating={4.5} />
                      <img
                        src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735741676463.png"
                        alt={appointment.name}
                      />
                    </div>
                    <div className="card-right">
                      <h3>{appointment.name}</h3>
                      <p>{appointment.department}</p>
                      <div className="exp">
                        <div className="ex">
                          <img
                            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735651541375.png"
                            alt=""
                          />
                          <span>{appointment.experience} Experience</span>
                        </div>
                        <div className="ex2">
                          <img
                            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735652815819.png"
                            alt=""
                          />
                          <span>{appointment.languages.join(", ")}</span>
                        </div>
                      </div>
                      <div className="fee">
                        <div>
                          <span>₹{appointment.inClinicFee}</span> In-Clinic
                          Consult
                        </div>
                        <img
                          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735740538715.png"
                          alt=""
                        />
                        <div>
                          <span>₹{appointment.videoConsultFee}</span> Video
                          Consult
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="book">
                    <div className="button">
                      <button
                        className="book-now btn"
                        onClick={() =>
                          history.push("/bookappointment/DetailBookAppointment")
                        }
                      >
                        Book Now
                      </button>
                    </div>
                    <div className="sb">
                      <div className="slots">
                        <img
                          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735741456951.png"
                          alt=""
                        />
                        {appointment.slots} Slots For Today
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BookAppointmentStyled>
  );
};

export default BookAppointment;
