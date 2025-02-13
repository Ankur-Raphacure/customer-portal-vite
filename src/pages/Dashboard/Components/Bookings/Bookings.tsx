import React, { useEffect, useState } from "react";
import { BookingsStyled } from "./Bookings.styled";
import { FaSearch } from "react-icons/fa";
import AppointmentCard from "./AppointmentCard";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, Input } from "antd";
import BookingCard from "./BookingCard";
import { getAllBookingsAPI } from "../../../../redux/slices/dashboard/dashboardService";
import Loader from "../../../../components/Loader/Loader";

const Bookings = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((ReduxState: any) => ReduxState.auth);
  const { cartItems } = useSelector((ReduxState: any) => ReduxState.checkout);
  const { userDependents, userAddress } = useSelector(
    (ReduxState: any) => ReduxState.profile,
  );
  const { myBookings, allBookings } = useSelector(
    (ReduxState: any) => ReduxState.dashboard,
  );
  const [isLoader, setIsLoader] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [pageSize, setPageSize] = useState(5); // Items per page
  const [totalBookings, setTotalBookings] = useState(0); // Total bookings count
  const [startDate, setStartDate] = useState<any>(null);
  const [endDate, setEndDate] = useState<any>(null);

  // Calculate the current items to show based on the page and pageSize
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  // const currentItems = allBookings?.bookings?.slice(
  //   indexOfFirstItem,
  //   indexOfLastItem
  // );

  // Initial fetch on component mount (or when user.id changes)

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (!user?.id) return;
      setIsLoader(true);
      setCurrentPage(1); // Reset to first page for new search
      const payload = {
        filters: {
          from: "patient",
          page: 1,
          count: pageSize,
          id: `${user?.id}`,
          searchText: searchText,
        },
      };
      dispatch(getAllBookingsAPI(payload));
      setIsLoader(false);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchText, user?.id, pageSize, dispatch]);

  useEffect(() => {
    setTotalBookings(allBookings?.totalCount);
  }, [allBookings]);

  const handlePageChange = (page: number, pageSize: number) => {
    if (!user?.id) {
      return;
    }
    setIsLoader(true);
    setCurrentPage(page);
    setPageSize(pageSize);
    const payload = {
      filters: {
        from: "patient",
        page: page, // Page starts from 1
        count: pageSize,
        id: `${user?.id}`,
        // Uncomment and set dateRange if needed:
        // dateRange: {
        //   dateType: "scheduled",
        //   from: startDate,
        //   to: endDate,
        // },
      },
    };
    dispatch(getAllBookingsAPI(payload));
    setIsLoader(false);
  };

  const getBookings = (
    page = currentPage,
    count = pageSize,
    from = startDate,
    to = endDate,
    dateType: "scheduled" | "created" = "scheduled",
  ) => {
    if (!user?.id) {
      return;
    }
    setIsLoader(true);
    const payload = {
      filters: {
        from: "patient",
        page, // Page starts from 1
        count,
        id: `${user?.id}`,
        dateRange: {
          dateType,
          from,
          to,
        },
      },
    };
    dispatch(getAllBookingsAPI(payload));
    setIsLoader(false);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const today = new Date();
    let fromDate: string;
    const toDate = today.toISOString().split("T")[0]; // YYYY-MM-DD format

    switch (event.target.value) {
      case "30days":
        const thirtyDaysAgo = new Date(today);
        thirtyDaysAgo.setDate(today.getDate() - 30);
        fromDate = thirtyDaysAgo.toISOString().split("T")[0];
        break;

      case "6months":
        const sixMonthsAgo = new Date(today);
        sixMonthsAgo.setMonth(today.getMonth() - 6);
        fromDate = sixMonthsAgo.toISOString().split("T")[0];
        break;

      case "year":
        const oneYearAgo = new Date(today);
        oneYearAgo.setFullYear(today.getFullYear() - 1);
        fromDate = oneYearAgo.toISOString().split("T")[0];
        break;

      default:
        fromDate = toDate;
    }

    console.log("Date Range:", { fromDate, toDate });
    if (fromDate && toDate) {
      setStartDate(fromDate);
      setEndDate(toDate);
      getBookings(currentPage, pageSize, fromDate, toDate, "scheduled");
    }
  };

  // New search handler using antd's Input.Search
  const handleSearch = (value: string) => {
    if (!user?.id) {
      return;
    }
    setIsLoader(true);
    // Reset to page 1 when performing a new search
    setCurrentPage(1);
    const payload = {
      filters: {
        from: "patient",
        page: 1,
        count: pageSize,
        id: `${user?.id}`,
        searchText: value, // Pass the entered search text
      },
    };
    dispatch(getAllBookingsAPI(payload));
    setIsLoader(false);
  };

  return (
    <BookingsStyled>
      {isLoader && <Loader />}

      <div className="orders-header">
        <h3>Your Orders</h3>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <Input
          placeholder="Search Bookings"
          allowClear
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ width: 300, marginBottom: "1rem" }}
        />
      </div>

      {allBookings?.bookings?.length > 0 ? (
        <>
          <div className="bookings-container">
            <div className="bookings-header">
              <h3>
                {allBookings?.bookings?.length} of {totalBookings} Bookings
              </h3>
            </div>

            <div className="filters-container">
              <div className="filter-dropdown">
                <select className="filter-select">
                  <option value="consultation">Consultation</option>
                  <option value="labtest">LabTest</option>
                  <option value="radiology">Radiology</option>
                  <option value="pharmacy">Pharmacy</option>
                </select>
              </div>

              <div className="filter-dropdown">
                <select className="filter-select">
                  <option value="completed">Completed</option>
                  <option value="pending">Ongoing</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>

            <div className="filter-dropdown sort-dropdown">
              <select className="filter-select" onChange={handleSortChange}>
                <option value="30days">Last 30 Days</option>
                <option value="6months">Last 6 Months</option>
                <option value="year">Last Year</option>
              </select>
            </div>
          </div>

          {allBookings?.bookings?.map((item: any, index: number) => (
            <BookingCard key={index} item={item} />
          ))}

          <div className="text-center">
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={totalBookings}
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
