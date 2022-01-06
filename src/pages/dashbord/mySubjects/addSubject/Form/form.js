import SubjectCategory from "./subjectCategory";
import Subject from "./subject";
import SkillLevel from "./skillLevel";
import SubjectAreasCovered from "./subjectCovered";
import NonAcademicPrice from "./nonAcademicPrice";
import AcademicPrice from "./academicPrice";
import {useState} from "react";
import {AddCommision} from "./addCommision";
import {Loader} from "../../../common/loader";

const Form = (props) => {
  const { register, errors, handleSubmit, onSubmit,loading,handleSubjectCategoryChange,
    subjects,isAcademic } = props
  const [priceSet,setPriceSet]=useState({
    lessonprice:null,
    primary_lessonprice:null,
    ks3_lessonprice:null,
    gcse_lessonprice:null,
    a_level_lessonprice:null,
    degree_lessonprice:null,
    adult_learner_lessonprice:null,
  })
  const updatelessonprice=(e,name)=> {
    const {value} = e.target
    let profileRate=AddCommision(Number.parseInt(value), 0.25)
    setPriceSet((prevState) => ({
      ...prevState,
      [name]: profileRate,
    }));
  }
  return (
   <form onSubmit={handleSubmit(onSubmit)} id='signupform'>
      <div class='columnsplit'>
        <SubjectCategory register={register} errors={errors} handleSubjectCategoryChange={handleSubjectCategoryChange}
                         />
      <Subject register={register} errors={errors} subjects={subjects}  />
      </div>
      <SubjectAreasCovered register={register} errors={errors}/>
      {isAcademic!==null &&(
          <>
            {isAcademic?
              <AcademicPrice register={register} errors={errors} updatelessonprice={updatelessonprice} priceSet={priceSet} />
              : <>
                  <SkillLevel register={register} errors={errors} />
                  <NonAcademicPrice register={register} errors={errors} updatelessonprice={updatelessonprice} priceSet={priceSet}/>
                </>
            }


        </>
      )}
     <div className='row'>
       <div className='cardbtncontainer col-lg-3'>
         <input
             disabled={loading ? true : false}
             type='submit'
             className='btn btnsuccess'
             style={{"margin-top": "20px"}}
             value='Add Subject'
         />

       </div>
       <div className='col-lg-3'>
         {loading && (
             <Loader/>
         )}
       </div>
     </div>
    </form>
  );
};
export default Form;
