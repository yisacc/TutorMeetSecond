import TabsPages from "./tabsPage";

const Help = () => {
  return (
    <>
      <div class='card'>
        <div class='cardheader'>
          <h2 class='cardtitle'>How the Bookings System Works</h2>
        </div>
        <TabsPages />
        <div class='tabcontent active'>
          <br />
          <p class='alert'>
            <em>
              Please take your time to carefully read the important information
              below, as it explains exactly how our system works in terms of
              booking lessons and getting paid.
            </em>
          </p>
          <p>
            Once your profile is live, students will be able to locate and send
            a message to you directly through Tutor Ethiopia. We will send you a
            SMS and email as soon as you receive any new enquiries from
            students.
          </p>
          <h2>Responding to Enquiries within a timely manner</h2>
          <p>
            It is important that you respond to all enquiries as soon as you
            receive them, as this will alert students as quickly as possible as
            to your availability, and your suitability to be their tutor. For
            this reason, we will improve your ranking within our search results
            if you respond promptly to any message you receive from students,
            even if it is to inform them that you are unavailable.
          </p>
          <p></p>
          <h2>Booking lessons with students</h2>
          <p>
            Once you've sent enquiries to a student and are ready to start
            tuition you must book the sessions using our scheduling system. This
            can only be done by you the tutor. Once the booking is made, we
            alert the student in order to confirm the booking. The student can
            only confirm bookings once they have entered their payment details
            for the pending lesson.
          </p>
          <p>
            Lessons which are not confirmed 12 hours before the lesson takes
            place will be cancelled. You should not turn up to any cancelled or
            unconfirmed bookings.
          </p>
          <h2>All lessons must be booked through Tutor Ethiopia</h2>
          <p>
            All lessons with students{" "}
            <strong>must be booked through Tutor Ethiopia</strong>. We contact
            students routinely to ensure that lessons are not being booked
            outside Tutor Ethiopia. We also log the amount of lessons each
            student books through you: a higher number of total lessons booked
            per student will improve your search placement, and make your
            profile more prominent on Tutor Ethiopia.
          </p>
          <h2>Getting paid</h2>
          <p>
            Students will be charged 24 hours after each lesson has taken place.
            Please consider that the more lessons you teach, the higher your
            profile will appear within Tutor Ethiopia search results pages. This
            will ensure that your profile is seen by more students, and you
            receive a greater number of student enquiries.
          </p>
          <p>
            <strong>Do not accept cash payments</strong>. We will have already
            collected the money from the student, and will ensure you are paid
            directly to your bank account each week the following Friday. For
            example, all lessons you have on a given week (Monday to Sunday)
            will be paid the following week on Friday.
          </p>
          <h2>How much to I get paid?</h2>
          <p>
            We give our tutors freedom to set their own hourly rate. If you set
            your rate as £25 per hour that is the amount you will receive for
            each hour of tuition. We charge the student your hourly rate plus
            commission, which will be between 20% and 25%. This percentage will
            depend on the total number of hours you have booked through Tutor
            Ethiopia.
          </p>
          <p></p>
        </div>
      </div>
    </>
  );
};
export default Help;
