import React from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as Adicon } from "../../assets/icons/icon1.svg";
import { ReactComponent as Anger } from "../../assets/icons/icon2.svg";
import { ReactComponent as Anxi } from "../../assets/icons/icon3.svg";
import { ReactComponent as Dep } from "../../assets/icons/icon4.svg";
import { ReactComponent as Trauma } from "../../assets/icons/icon5.svg";
import { ReactComponent as Bipolar } from "../../assets/icons/icon6.svg";


const Category = () => {
  const history = useHistory();

  const services = [
    {
      name: "ADHD",
      description: "Understanding and Managing Focus, Energy, and Impulsivity",
      icon: (
        <Adicon />
      ),
      link: "/mentalwellness/adhd",
    },
    {
      name: "Anger",
      description: "Emotional response to perceived threats or frustration.",
      icon: (
       <Anger />
      ),
      link: "/mentalwellness/anger",
    },
    {
      name: "Anxiety",
      description: "Mood disorder involving excessive worry and fear",
      icon: (
        <Anxi />
      ),
      link: "/mentalwellness/anxiety",
    },
    {
      name: "Depression",
      description: "Mood disorder with persistent sadness and loss of interest",
      icon: (
        <Dep />
      ),
      link: "/mentalwellness/depression",
    },
    {
      name: "Trauma/PTSD",
      description: "Stress-related disorder triggered by traumatic experiences",
      icon: (
        <Trauma />
      ),
      link: "/mentalwellness/trauma",
    },
    {
      name: "Bipolar Test",
      description: "A mental illness causing extreme mood, energy, and activity shifts",
      icon: (
       <Bipolar />
      ),
      link: "/mentalwellness/bipolar",
    },
  ];

  const handleCardClick = (link:any) => {
    history.push(link);
  };

  return (
    <div className="category-container">
      <h2 className="category-title">Comprehensive Mental Wellness Assessments</h2>
      <div className="d-flex flex-wrap ">
        {services.map((service, index) => (
          <div
            key={index}
            className="card category-card mb-4"
            onClick={() => handleCardClick(service.link)}
          >
            <div className="icon-container">
              {service.icon}
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">{service.name}</h5>
              <p className="card-text">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
