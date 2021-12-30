import { useEffect, useState } from "react"
import axiosInstance from "../../../utils/axios"
import FormattedDate from "../../../common/formatedDate"
import { useDispatch } from "react-redux"
import { addCities } from "../../../redux/actions/addCityAction"
import { useSelector } from "react-redux"
import FormatPhoneNumber from "./form/phoneNumberFormat"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { PersonalInfoSchema } from "./personalInfoSchema"
import PersonalInfoForm from "./form/PersonalInfoForm"
import {HandleErrors} from "../../../common/handle_api_errors";

const PersonalInformation = (props) => {
  const { setActiveTab } = props
  const dispatch = useDispatch()
  const [apiError, setApiError] = useState(false)
  const [loading, setloading] = useState(false)
  const [errorMessage, setErrorMessage] = useState([])

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PersonalInfoSchema),
  })
  const counter = useSelector((data) => data)

  const userID = counter.user[counter.user.length - 1].userId

  useEffect(() => {
    axiosInstance
      .get("/api/lookups/all/cities")
      .then((response) => {
        dispatch(addCities(response.data.cities))
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const submitPersonalInfo = (e) => {
    setloading(true)
    setApiError(false)
    setErrorMessage(null)
    setloading(true)

    let requestBody = {
      firstName: getValues("firstname"),
      lastName: getValues("lastName"),
      title: getValues("title"),
      gender: getValues("gender"),
      userId: userID,
      addressOne: getValues("address1"),
      addressTwo: getValues("address2"),
      availablity: getValues("availablity"),
      subCityId: getValues("subCity"),
      cityId: getValues("city"),
      phoneNumber: FormatPhoneNumber(getValues("phoneNumber")),
      dob: FormattedDate(
        getValues("dobday"),
        getValues("dobmonth"),
        getValues("dobyear")
      ),
    }
    axiosInstance
      .post("/api/users/information", requestBody)
      .then((todo) => {
        setActiveTab("PROFILEInfo")
        setloading(false)
      })
      .catch((error) => {
        setErrorMessage(HandleErrors(error))
        setloading(false)
        setApiError(true)
      })
  }
  return (
    <>
      {loading ? (
        <div id='js-preloader' class='js-preloader'>
          <div class='preloader-inner'>
            <span class='dot'></span>
            <div class='dots'>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      ) : (
        <PersonalInfoForm
          apiError={apiError}
          errorMessage={errorMessage}
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          submitPersonalInfo={submitPersonalInfo}
        />
      )}
    </>
  )
}
export default PersonalInformation
