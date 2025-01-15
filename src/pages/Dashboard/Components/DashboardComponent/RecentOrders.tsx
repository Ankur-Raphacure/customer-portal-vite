// RecentOrders.jsx
import React, { useEffect, useState } from "react";
import OrderItem from "./OrderItem";
import { RecentOrdersStyled } from "./RecentOrders.styled";
import { useSelector } from "react-redux";

let docMaleImage =
  "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736338140063.png";
let docFeMaleImage =
  "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736338333932.png";

const RecentOrders = () => {
  const { myBookings } = useSelector((ReduxState: any) => ReduxState.dashboard);
  console.log("myBookings in recent orders : ", myBookings);
  const [items, setItems] = useState([]);

  function formatType(type: any) {
    return type
      .toLowerCase()
      .split("_")
      .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  function transformBookings(bookingsObj: any) {
    const bookings = bookingsObj?.bookings;

    // Custom function to format the date
    function formatDate(timestamp: any) {
      const date = new Date(parseInt(timestamp));
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const day = date.getDate();
      const month = monthNames[date.getMonth()];
      const year = date.getFullYear();
      return `${month} ${day}, ${year}`;
    }

    // Map through the bookings to create the items array service_code
    const items = bookings?.map((booking: any) => {
      return {
        image:
          booking.medicines.length > 0
            ? booking.medicines[0].image
            : booking.user && booking.user.image
            ? booking.user.image
            : booking.user.gender === "male"
            ? docMaleImage
            : docFeMaleImage, // Assuming the first medicine image or empty string
        name: `${booking.user.first_name} ${booking.user.last_name}`,
        type: formatType(booking.type),
        schDate: formatDate(booking.collection_1_date),
        bookDate: formatDate(booking.created_at),
        price: booking.final_amount,
        status: booking.status,
        orgBookingObj: booking,
        service_code:
          booking.medicines.length > 0
            ? booking.medicines[0].service_code
            : null,
      };
    });

    return items;
  }

  useEffect(() => {
    const filteredItems = transformBookings(myBookings);
    setItems(filteredItems);
    console.log("filteredItems : ", filteredItems);
  }, [myBookings]);

  return (
    <RecentOrdersStyled>
      {items &&
        items.map((item: any, index: any) => (
          <OrderItem key={index} item={item} />
        ))}
    </RecentOrdersStyled>
  );
};

export default RecentOrders;
