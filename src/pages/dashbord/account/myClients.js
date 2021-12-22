import TabsPages from "./tabsPage";

const MyClients = () => {
  return (
    <>
      <div class='card'>
        <div class='cardheader'>
          <h2 class='cardtitle'>My Clients</h2>
        </div>
        <TabsPages />
        <div class='tabcontent active'>
          <p></p>
          <p class='important'>
            Below are a list of clients connected to your account
          </p>
          <p></p>
          <p class='important'>
            No students have purchased your details so far.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default MyClients;
