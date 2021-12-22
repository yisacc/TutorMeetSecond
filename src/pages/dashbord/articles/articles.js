import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <>
      <div class='card'>
        <div class='cardheader'>
          <h2 class='cardtitle'>My Articles</h2> &nbsp;&nbsp;
          <span style={{ "font-size": "12px" }}>
            &nbsp;&nbsp;
            <i
              class='fas fa-lg fa-plus-circle'
              style={{ position: "relative", left: "0px" }}
            ></i>
            &nbsp;<Link to='/members/create-resource'>Add an Article </Link>
          </span>
        </div>
        <div class='cardcontent'>
          <p>
            Many of our students discover tutors by reading through our articles
            library, we recommend that tutors upload articles to improve their
            visibility on Tutor Ethiopia. Please submit your academic articles
            here, they must be original, all articles will go through our
            approval process before being posted on Tutor Ethiopia.
          </p>
          <p class='important'>
            Articles are educational resources which can help our students learn
            about a topic you teach.{" "}
          </p>
        </div>
        <div class='cardtable tablewrap'>
          <p>You have not uploaded any articles. </p>
        </div>
      </div>
    </>
  );
};
export default Articles;
