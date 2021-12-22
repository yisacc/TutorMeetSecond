import React from "react"
import { Route } from "react-router-dom"
import LandingPage from "../pages/landingPage/landingPage"
import BecomeATutor from "../pages/becomeATutor/becomeTutor"
import FindATutor from "../pages/findATutor/findTutor"
import Subject from "../pages/subjects/subjects"
import AcademicTution from "../pages/subjectDetailPage/academicTution"
import Register from "../pages/register/register"
import TheLayout from "../pages/dashbord/common/theLayout"
import Login from "../pages/login/login"
import ForgotPassword from "../pages/login/forgotPassword"
import ForgotUsername from "../pages/login/forgotUsername"
import FindTutor from "../pages/findTutor/findTutor"
import SearchResults from "../pages/findTutor/searchResults/searchResults"
import SubjectsToLearn from "../pages/dashbord/subjectsToLearn/subjectsToLearn"
import Users from "../pages/users/users"
import PublicRoute from "./Routes/PublicRoutes"
import PrivateRoute from "./Routes/PrivateRoutes"

const TutorEthiopiaRoute = () => {
  return (
    <>
      <PublicRoute restricted={false} path='/' exact component={LandingPage} />
      <PublicRoute
        restricted={false}
        path='/become-a-tutor'
        component={BecomeATutor}
      />
      <PublicRoute
        restricted={false}
        path='/find-a-tutor'
        component={FindTutor}
      />
      <PublicRoute restricted={false} path='/subject' component={Subject} />
      <PublicRoute
        restricted={false}
        path='/academic-home-tuition'
        component={AcademicTution}
      />
      <PublicRoute restricted={false} path='/signup' component={Register} />
      <PublicRoute
        path='/students/subject-tolearn'
        component={SubjectsToLearn}
      />
      <PrivateRoute path='/members' component={TheLayout} />
      <PublicRoute restricted={true} path='/login' component={Login} />
      <PublicRoute
        restricted={true}
        oute
        path='/forgot-password'
        component={ForgotPassword}
      />
      <PublicRoute
        restricted={true}
        path='/forgot-username'
        component={ForgotUsername}
      />
      <PublicRoute
        restricted={false}
        path='/tutor-search'
        component={FindATutor}
      />
      <PublicRoute path='/search-results' component={SearchResults} />
      <PrivateRoute path='/users' component={Users} />
    </>
  )
}
export default TutorEthiopiaRoute
