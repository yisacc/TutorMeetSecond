import { useForm } from 'react-hook-form'
import axiosInstance from '../../../utils/axios'
import {HandleErrors} from "../../../common/handle_api_errors";

const ClientInformation = (props) => {
  const { setloading, userID, setErrorMessage, setApiError, history } = props
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm()
  const handleClientProfileInfoSubmit = () => {
    let requestBody = {
      userId: userID,
      tuition: getValues('requirements'),
    }
    if (requestBody.tuition !== '') {
      setloading(true)
      axiosInstance
        .post('/api/users/profile/information/student', requestBody)
        .then((todo) => {
          setloading(false)
          history.push('/members')
        })
        .catch((error) => {
          setErrorMessage(HandleErrors(error))
          setloading(false)
          setApiError(true)
        })
    } else {
      history.push('/members')
    }
  }

  return (
    <form onSubmit={handleSubmit(handleClientProfileInfoSubmit)}>
      <div>
        <label for="requirements">
          Please briefly explain your tuition requirements &nbsp;(optional)
        </label>
        <textarea
          class="forminputtextpad"
          rows="30"
          cols="6"
          style={{ height: '80px' }}
          {...register('requirements')}
          maxlength="3000"
        ></textarea>
      </div>
      <div class="cardbtncontainer col-lg-2">
        <input type="submit" value="Continue" class="btn btnsuccess" />
      </div>
    </form>
  )
}
export default ClientInformation
