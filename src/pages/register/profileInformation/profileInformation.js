import { useState } from "react"
import { useSelector } from "react-redux"

import ApiErrorMessage from "../accountInformation/apiErrorMessage"
import TutorProfileInformation from "./TutorProfileInfo"
import ClientInformation from "./ClientInformation"
import { useHistory } from "react-router-dom"

const ProfileInformation = props => {
  const [apiError, setApiError] = useState(false)
  const [loading, setloading] = useState(false)
  const [errorMessage, setErrorMessage] = useState([])
  const counter = useSelector(data => data)
  let userData = counter.user[counter.user.length - 1]
  const accountType = userData.accountType
  const userID = userData.userId
  let history = useHistory()

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
        <>
          {apiError ? <ApiErrorMessage errorMessage={errorMessage} /> : null}

          {accountType === 0 ? (
            <TutorProfileInformation
              setloading={setloading}
              userID={userID}
              setErrorMessage={setErrorMessage}
              setApiError={setApiError}
              history={history}
            />
          ) : (
            <ClientInformation
              setloading={setloading}
              userID={userID}
              setErrorMessage={setErrorMessage}
              setApiError={setApiError}
              history={history}
            />
          )}
        </>
      )}
    </>
  )
}
export default ProfileInformation
