import React, { useState } from "react";
import { BookingsStyled } from "./Bookings.styled";
import { FaSearch } from "react-icons/fa";
import AppointmentCard from "./AppointmentCard";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "antd";

const Bookings = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((ReduxState: any) => ReduxState.auth);
  const { cartItems } = useSelector((ReduxState: any) => ReduxState.checkout);
  const { userDependents, userAddress } = useSelector(
    (ReduxState: any) => ReduxState.profile
  );
  const { myBookings } = useSelector((ReduxState: any) => ReduxState.dashboard);

  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [pageSize, setPageSize] = useState(5); // Items per page

  // Calculate the current items to show based on the page and pageSize
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentItems = myBookings?.bookings?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  return (
    <BookingsStyled>
      <div className="orders-header">
        <h3>Your Orders</h3>
      </div>

      {myBookings?.bookings?.length > 0 ? (
        <>
          <div className="orders-dropdown">
            <span> {myBookings?.bookings?.length} Order Placed in </span>
            <select title="Select Year" className="year-select">
              <option value="Select">Select Year</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
            <select title="Select Status" className="year-select">
              <option value="Select">Select Status</option>
              <option value="On Going">On Going</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          {/* Render paginated Appointment Cards */}
          {currentItems?.map((item: any, index: any) => (
            <AppointmentCard key={index} item={item} />
          ))}
          <div className="text-center">
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={myBookings?.bookings?.length}
              onChange={handlePageChange}
              showSizeChanger
              pageSizeOptions={["5", "10", "20", "50"]}
            />
          </div>
        </>
      ) : (
        <p>No Orders Available</p>
      )}
    </BookingsStyled>
  );
};

export default Bookings;
