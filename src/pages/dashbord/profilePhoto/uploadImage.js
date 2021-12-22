import UploadImageView from './UploadImageView'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { UploadImageSchema } from './UploadImageSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import axiosInstance from '../../../utils/axios'

const UploadImage = () => {
  const [loading, setloading] = useState(false)
  const [apiError, setApiError] = useState(false)
  const [errorMessage, setErrorMessage] = useState([])
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UploadImageSchema),
  })
  const [state, setState] = useState({ files: null })

  const onChange = (e) => {
    let files = e.target.files[0]
    setState({ files: files })
  }
  const RemoveFile = () => {
    setState({ files: null })
  }
  const onSubmit = () => {
    setloading(true)
    setApiError(false)
    setErrorMessage(null)
    let requestBody = {
      firstname: getValues('firstname'),
      lastname: getValues('lastname'),
      idtype: getValues('idtype'),
      expiryyear: getValues('expiryyear'),
      expirymonth: getValues('expirymonth'),
      expiryday: getValues('expiryday'),
      file: getValues('file'),
    }

    axiosInstance
      .post('/api/users/account/create', requestBody)
      .then((todo) => {
        if (todo?.data) {
        }
        setloading(false)
      })
      .catch((error) => {
        if (
          error?.response?.status === 401 ||
          error?.response?.status === 409 ||
          error?.response?.status === 406
        ) {
          setErrorMessage(error?.response?.data?.error)
        } else {
          setErrorMessage(['Something went wrong. Please try again later.'])
        }
        setloading(false)
        setApiError(true)
      })
  }
  return (
    <UploadImageView
      register={register}
      errors={errors}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      loading={loading}
      apiError={apiError}
      errorMessage={errorMessage}
      state={state}
      onChange={onChange}
      RemoveFile={RemoveFile}
    />
  )
}
export default UploadImage
