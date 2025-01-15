import { PatientEngagementStyled } from "./PatientEngagement.styled";

const PatientEngagement = () => {
  return (
    <PatientEngagementStyled>
      <div className="wrapper">
        <div className="content">
          <h2>Patient Engagement</h2>
          <p>Enhance Patient Engagement and Satisfaction</p>
          <ul>
            <li>Patient feedback and surveys</li>
            <li>Automated appointment reminders</li>
            <li>Personalized communication channels</li>
            <li>Boost patient retention with timely updates</li>
            <li>Enhance Patient Engagement and Satisfaction</li>
          </ul>
        </div>
        <div className="video">
          <video
            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/videos/demovideo.mp4"
            autoPlay
            muted
            loop
          />
        </div>
      </div>
    </PatientEngagementStyled>
  );
};

export default PatientEngagement;
