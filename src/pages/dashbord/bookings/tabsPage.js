import { Link, useLocation } from "react-router-dom";

const TabsPages = () => {
  const location = useLocation();
  return (
    <>
      <div class='tabspages'>
        <Link
          class={location.pathname === "/members/bookings" ? "active" : ""}
          to='/members/bookings'
        >
          My Bookings
        </Link>
        <Link
          class={location.pathname === "/members/schedule" ? "active" : ""}
          to='/members/schedule'
        >
          New Booking
        </Link>
        <Link
          class={location.pathname === "/members/bookings-help" ? "active" : ""}
          to='/members/bookings-help'
        >
          Help
        </Link>
        <Link
          class={location.pathname === "/members/bookings-bank" ? "active" : ""}
          to='/members/bookings-bank'
        >
          Payment
        </Link>
      </div>
    </>
  );
};
export default TabsPages;
