import { Link, useLocation } from "react-router-dom";

const TabsPages = () => {
  const location = useLocation();
  return (
    <>
      <div class='tabspages'>
        <Link
          class={
            location.pathname === "/members/edit-info-personal" ? "active" : ""
          }
          to='/members/edit-info-personal'
        >
          Personal<span class='mobno'>&nbsp;Info</span>
        </Link>
        <Link
          class={
            location.pathname === "/members/edit-info-account" ? "active" : ""
          }
          to='/members/edit-info-account'
        >
          Password
        </Link>
        <Link
          class={location.pathname === "/members/purchases" ? "active" : ""}
          to='/members/purchases'
        >
          My Clients
        </Link>
        <Link
          class={location.pathname === "/members/privacy" ? "active" : ""}
          to='/members/privacy'
        >
          Privacy
        </Link>
      </div>
    </>
  );
};

export default TabsPages;
