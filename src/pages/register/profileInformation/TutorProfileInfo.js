import Bio from './Bio'
import Distance from './Distance'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { TutorProfileInformationSchema } from './TutorProfileInformationSchema'
import axiosInstance from '../../../utils/axios'
import {HandleErrors} from "../../../common/handle_api_errors";

const TutorProfileInformation = (props) => {
  const { setloading, userID, setErrorMessage, setApiError, history } = props
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(TutorProfileInformationSchema),
  })
  const handleProfileInfoSubmit = (e) => {
    setloading(true)
    let requestBody = {
      userId: userID,
      distance: getValues('distance'),
      bio: getValues('bio'),
      experience: getValues('experience'),
    }

    axiosInstance
      .post('/api/users/profile/information', requestBody)
      .then((todo) => {
        setloading(false)
        history.push('/members')
      })
      .catch((error) => {
        setErrorMessage(HandleErrors(error))
        setloading(false)
        setApiError(true)
      })
  }
  return (
    <>
      <form onSubmit={handleSubmit(handleProfileInfoSubmit)}>
        <div>
          <div class="columnsplit">
            <Distance register={register} errors={errors} />
            <div class="columnsplititem"></div>
          </div>
          <Bio register={register} errors={errors} />
          <div class="columnsplit">
            <div class="columnsplititem">
              <label for="experience">Your Experience</label>*
              <textarea
                {...register('experience')}
                maxlength="3000"
                class="forminputtextpad"
                rows="30"
                style={{ height: '140px' }}
              ></textarea>
              <span style={{ color: 'red' }}>{errors.experience?.message}</span>
            </div>
          </div>
        </div>
        <div class="cardbtncontainer col-lg-2">
          <input type="submit" value="Continue" class="btn btnsuccess" />
        </div>
      </form>
    </>
  )
}
export default TutorProfileInformation
