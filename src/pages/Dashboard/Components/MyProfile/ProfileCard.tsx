import { FiMail } from "react-icons/fi";
import { MdPhone, MdEdit } from "react-icons/md";
import { capitalizeWords, formatDate } from "../../../../Scenes/common";

// interface User {
//   name: string;
//   image: string;
//   self: string;
//   gender: string;
//   age: number;
//   dob: string;
//   phone: string;
//   email: string;
// }

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  head_id: any;
  relation: string;
  dob: string;
  age: number;
  image: string;
  client: {
    id: string;
    name: string;
    type: string;
    logo_url: string | null;
    dependent_per_user: any;
  };
  dependents: Array<any>;
}

interface ProfileCardProps {
  user: User;
  handleEditUser: (user: User) => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user, handleEditUser }) => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="avatar-section">
          {user.image ? (
            <img src={user.image} alt={user.first_name} className="avatar" />
          ) : (
            <div className="avatar" />
          )}
        </div>
        <div className="user-info">
          <h1>
            {user.first_name || ""} {user.last_name || ""}
          </h1>
          <div className="user-meta">
            {user.relation} | {capitalizeWords(user.gender)} | {user.age}
          </div>
          <div className="user-dob">DOB: {formatDate(user?.dob || "")}</div>
        </div>
        <button
          className="edit-button"
          onClick={() => {
            // console.log("user : ", user);
            handleEditUser(user);
          }}
        >
          <MdEdit className="edit-icon" />
          Edit
        </button>
      </div>
      <div className="contact-info">
        <div className="contact-item">
          <MdPhone className="contact-icon" />
          {user?.phone || "N/A"}
        </div>
        <div className="contact-item">
          <FiMail className="contact-icon" />
          {user?.email || "N/A"}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
