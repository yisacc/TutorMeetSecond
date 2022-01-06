import { useForm } from 'react-hook-form'
import { useState } from 'react'
import axiosInstance from '../../utils/axios'
import { setUserSession, setRefereshToken } from '../../common/Common'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import LoginView from './LoginView/LoginView'
import { useHistory } from 'react-router-dom'
import {HandleErrors} from "../../common/handle_api_errors";

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required()

const Login = () => {
  let history = useHistory()
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState([])
  const [apiError, setApiError] = useState(false)

  // handle button click of login form
  const handleLogin = (props) => {
    setLoading(true)
    setApiError(false)
    setErrorMessage(null)
    let requestBody = {
      username: getValues('username'),
      password: getValues('password'),
    }
    axiosInstance
      .post('/api/users/login', requestBody)
      .then((response) => {
        setLoading(false)
        setUserSession(response.data.accessToken)
        setRefereshToken(response.data.refreshToken)
        history.push('/members')
      })
      .catch((error) => {
        setErrorMessage(HandleErrors(error))
        setLoading(false)
        setApiError(true)
      })
  }
  return (
    <LoginView
      loading={loading}
      register={register}
      errors={errors}
      handleSubmit={handleSubmit}
      handleLogin={handleLogin}
      apiError={apiError}
      errorMessage={errorMessage}
    />
  )
}

export default Login
