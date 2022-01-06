import Form from './Form/form'
import ApiErrorMessage from "../../../register/accountInformation/apiErrorMessage";

const AddSubjectView = (props) => {
  const {
    register,
    errors,
    handleSubmit,
    onSubmit,
    loading,
    apiError,
    errorMessage,
    handleSubjectCategoryChange,
    subjects,
    isAcademic
  } = props
  return (
    <div class='card'>
      <div class='cardheader'>
        <h2 class='cardtitle'>Add a Subject</h2>
      </div>
      <div class='cardcontent'>
        <p>
          Here you can add a subject, these will be viewable in your profile. It
          is important that you add each subject you wish to teach otherwise
          students will not be able to find you while searching.
        </p>
        <p class='highlight' style={{ "font-size": "13px" }}>
          Please do not enter email addresses/urls/websites/home addresses (or
          any other <u>information that can allow contact</u>) within your
          profile. Users who do so will immediately be removed from Tutor
          Ethiopia.
        </p>
        {apiError ? <ApiErrorMessage errorMessage={errorMessage} /> : null}
        <Form register={register}
              errors={errors}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              loading={loading}
              handleSubjectCategoryChange={handleSubjectCategoryChange}
              subjects={subjects}
              isAcademic={isAcademic}
        />

        <p style={{ "margin-top": "20px" }}>
          <i class='fas fa-times-circle' style={{ position: "relative" }}></i>
          &nbsp;<a href='/members/my-subjects.asp'>Cancel Add Subject</a>-
          Return to My Subjects
        </p>
      </div>
    </div>
  );
};
export default AddSubjectView;
