import { useState } from 'react'
import axiosInstance from '../../../utils/axios'
import { useDispatch } from 'react-redux'
import { addUser } from '../../../redux/actions/setUserAction'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from './schema'
import { useForm } from 'react-hook-form'
import AccountInfoView from './AccountInfoView'
import { setRefereshToken, setUserSession } from '../../../common/Common'
import {HandleErrors} from "../../../common/handle_api_errors";

const AccountInformation = (props) => {
  const { setActiveTab } = props
  const dispatch = useDispatch()
  const [loading, setloading] = useState(false)
  const [apiError, setApiError] = useState(false)
  const [errorMessage, setErrorMessage] = useState([])
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = () => {
    setloading(true)
    setApiError(false)
    setErrorMessage(null)
    let requestBody = {
      password: getValues('password'),
      accountType: Number.parseInt(getValues('accountType')),
      username: getValues('username'),
      email: getValues('email'),
    }
    axiosInstance
      .post('/api/users/account/create', requestBody)
      .then((todo) => {
        if (todo?.data) {
          let userData = {
            userId: todo.data.userId,
            accountType: todo.data.accountType,
          }
          setUserSession(todo.data.accessToken)
          setRefereshToken(todo.data.refreshToken)
          dispatch(addUser(userData))
          setActiveTab('PERSONALInfo')
        }
        setloading(false)
      })
      .catch((error) => {
        setErrorMessage(HandleErrors(error))
        setloading(false)
        setApiError(true)
      })
  }

  return (
    <AccountInfoView
      register={register}
      errors={errors}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      loading={loading}
      apiError={apiError}
      errorMessage={errorMessage}
    />
  )
}
export default AccountInformation
