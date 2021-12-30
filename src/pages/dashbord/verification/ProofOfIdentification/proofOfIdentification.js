import { ProofOfIdentificationSchema } from "./Form/ProofOfIdentificationSchema"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import ProofOfIdentificationView from "./ProofOfIdentificationView"
import { useState } from "react"
import axiosInstance from "../../../../utils/axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addIDTypes } from "../../../../redux/actions/addIDType"
import { getToken } from "../../../../common/Common"
import axios from "axios"
import FormattedDate from "../../../../common/formatedDate"
import { useHistory } from "react-router-dom"
import {HandleErrors} from "../../../../common/handle_api_errors";

const ProofOfIdentification = () => {
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState(false)
  const [errorMessage, setErrorMessage] = useState([])
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ProofOfIdentificationSchema),
  })
  let history = useHistory()
  useEffect(() => {
    axiosInstance
      .get("/api/lookups/all/idtypes")
      .then((response) => {
        dispatch(addIDTypes(response.data.idTypes))
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  const onSubmit = async (data) => {
    setLoading(true)
    setApiError(false)
    setErrorMessage(null)
    let requestBody = {
      firstName: getValues("firstname"),
      lastName: getValues("lastname"),
      middleName: getValues("lastname"),
      idType: getValues("idtype"),
      expiryDate: FormattedDate(
        getValues("expiryyear"),
        getValues("expirymonth"),
        getValues("expiryday")
      ),
      fileLink: "",
    }
    const file = data.file[0]
    const url = "https://tutoret.herokuapp.com/api/files/uploadimage"
    const accessToken = getToken()
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: "Bearer " + accessToken,
      },
    }
    const formData = new FormData()
    formData.append("image", file)
    try {
      const response = await axios.post(url, formData, config)
      if (response?.data?.imageUrl) {
        requestBody.fileLink = response.data.imageUrl
        axiosInstance
          .post("/api/users/proofOfIdentity", requestBody)
          .then((response) => {
            history.push("/members")
          })
          .catch((error) => {
            setErrorMessage(HandleErrors(error))
            setLoading(false)
            setApiError(true)
          })
      }
    } catch (error) {
      setErrorMessage(HandleErrors(error))
      setLoading(false)
      setApiError(true)
    }
  }
  return (
    <>
      <ProofOfIdentificationView
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        loading={loading}
        apiError={apiError}
        errorMessage={errorMessage}
        setValue={setValue}
      />
    </>
  )
}
export default ProofOfIdentification
