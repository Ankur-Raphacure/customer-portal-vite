// CategoryCards.js
import React from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { Descriptions } from "antd";

const cards = [
  {
    id: 1,
    title: "Fitness centres",
    text: "Gym, Yoga, Zumba, Aerobic.. etc",
  },
  {
    id: 2,
    title: "Game zone",
    text: "Football, Tennis, badminton Etc",
  },
  {
    id: 3,
    title: "Rapha Mart",
    text: "Gymwear, workout equipments,",
  },
  {
    id: 4,
    title: "Virtual Fitness",
    text: "workout from anywhere ",
  },
];

// const CategoryCards = () => (
//   <div className="category-wrapper">
//     <h2 className="headingcat">Category</h2>
//     <div className="categoryCardMainDiv">
//       {cards.map((item) => (
//         <Link to="" key={item.id} className="card-link">
//           <div className="catCardDiv">
//             <div className="imageDiv">
//               <Image src={bg} />
//             </div>
//             <p className="imageName">{item.text}</p>
//           </div>
//         </Link>
//       ))}
//     </div>
//   </div>
// );
const CategoryCards = () => (
  <>
    <div style={{ padding: "0 5% 0 5%" }}>
      <div>
        <h2>Category</h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {cards.map((item) => {
          return (
            <>
              <div
                style={{
                  borderRadius: "15px",
                  backgroundColor: "white",
                  width: "250px",
                  padding: "15px 15px 0 15px",
                }}
                key={item?.title}
              >
                <h5>{item?.title}</h5>
                <p>{item?.text}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  </>
);

export default CategoryCards;
