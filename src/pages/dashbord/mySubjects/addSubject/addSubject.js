import AddSubjectView from "./addSubjectView";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {AddSubjectSchema} from './addSubjectSchema'
import {useEffect, useState} from "react";
import axiosInstance from "../../../../utils/axios";
import {addSubjects} from "../../../../redux/actions/addSubjects";
import {useDispatch, useSelector} from "react-redux";
import {HandleErrors} from "../../../../common/handle_api_errors";
const AddSubject = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        axiosInstance
            .get("/api/lookups/all/subject-category")
            .then(response => {
                dispatch(addSubjects(response.data.subjectCategory))
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState(false)
    const [errorMessage, setErrorMessage] = useState([])
    const [subjects, setSubjects] = useState([])
    const [isAcademic,setIsAcademic]=useState(null)
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(AddSubjectSchema),
    })
    const counter = useSelector((data) => data)
    const subjectCategories = counter.Subjects[counter.Subjects.length - 1]
    const handleSubjectCategoryChange = (e) => {
        setIsAcademic(null);
        setSubjects([])
        const { value } = e.target
        let selectedSubjectCategorySubjects = subjectCategories.filter((subjectCategory) => subjectCategory.subjectCategoryId === value)
        if (selectedSubjectCategorySubjects) {
            setSubjects(selectedSubjectCategorySubjects[0]?.subjects)
        }
        let checkIfAcademic=selectedSubjectCategorySubjects[0]?.name==='Academics'?true:false;
        setIsAcademic(checkIfAcademic);
    }
    const onSubmit = () => {
        setLoading(true)
        setApiError(false)
        setErrorMessage(null)
        let prices={}
        if(getValues("primary")){
            prices.primary=getValues("primary_rate")
        }
        if(getValues("ks3")){
            prices.ks3=getValues("ks3_rate")
        }
        if(getValues("gcse")){
            prices.gcse=getValues("gcse_rate")
        }
        if(getValues("a_level")){
            prices.a_level=getValues("a_level_rate")
        }
        if(getValues("degree")){
            prices.degree=getValues("degree_rate")
        }
        if(getValues("adult_learner")){
            prices.adult_learner=getValues("adult_learner_rate")
        }
        let requestBody = {
            subjectCategoryId: getValues("category"),
            categoryLevelId: getValues("subject_list"),
            subjectAreaCovered: getValues("specialists"),
        }
        if(isAcademic){
            requestBody.hourlyRate=getValues("rate");
            requestBody.skillLevelId=getValues("Level");
        }else {
            requestBody.prices=prices;
        }
        axiosInstance
            .post('/api/lookups/add/subject', requestBody)
            .then((response) => {
                setLoading(false)
            })
            .catch((error) => {
                setErrorMessage(HandleErrors(error))
                setLoading(false)
                setApiError(true)
            })
    }
  return (
    <>
      <AddSubjectView register={register}
                      errors={errors}
                      handleSubmit={handleSubmit}
                      onSubmit={onSubmit}
                      loading={loading}
                      apiError={apiError}
                      errorMessage={errorMessage}
                      handleSubjectCategoryChange={handleSubjectCategoryChange}
                      subjects={subjects}
                      isAcademic={isAcademic}/>
    </>
  );
};

export default AddSubject;
