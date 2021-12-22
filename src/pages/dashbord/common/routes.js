import React from "react";
import { Route } from "react-router-dom";
import Members from "../members/members";
import Verification from "../verification/verification";
import Profile from "../profile/profile";
import MySubject from "../mySubjects/mySubject";
import AddSubject from "../mySubjects/addSubject/addSubject";
import Account from "../account/account";
import Password from "../account/password";
import MyClients from "../account/myClients";
import Privacy from "../account/privacy";
import Feedback from "../feedback/feedback";
import SuggestedStudents from "../suggestedStudents/suggestedStudents";
import ProfilePhoto from "../profilePhoto/profilePhoto";
import UploadImage from "../profilePhoto/uploadImage";
import Articles from "../articles/articles";
import CreateArticles from "../articles/createArticles";
import Tags from "../tags/tags";
import History from "../history/history";
import ProofOfAddress from "../verification/ProofOfAddress/proofOfAddress";
import ProofOfIdentification from "../verification/ProofOfIdentification/proofOfIdentification";
import AddReference from "../verification/Reference/addReference";
import MyEnquiries from "../myEnquiries/myEnquiries";
import MyBookings from "../bookings/myBookings";
import NewBooking from "../bookings/newBooking";
import Help from "../bookings/help";
import Payment from "../bookings/payment/payment";

const Routes = () => {
  return (
    <>
      <Route exact path='/members' component={Members} />
      <Route path='/members/todo' component={Verification} />
      <Route path='/members/edit-info-profile' component={Profile} />
      <Route path='/members/my-subjects' component={MySubject} />
      <Route path='/members/add-subject' component={AddSubject} />
      <Route path='/members/edit-info-personal' component={Account} />
      <Route path='/members/edit-info-account' component={Password} />
      <Route path='/members/purchases' component={MyClients} />
      <Route path='/members/privacy' component={Privacy} />
      <Route path='/members/feedback' component={Feedback} />
      <Route path='/members/suggested-users' component={SuggestedStudents} />
      <Route path='/members/manage-photos' component={ProfilePhoto} />
      <Route path='/members/upload-images' component={UploadImage} />
      <Route path='/members/resources' component={Articles} />
      <Route path='/members/create-resource' component={CreateArticles} />
      <Route path='/members/my-tags' component={Tags} />
      <Route path='/members/my-history' component={History} />
      <Route path='/members/upload-poa' component={ProofOfAddress} />
      <Route path='/members/upload-id' component={ProofOfIdentification} />
      <Route path='/members/add-reference' component={AddReference} />
      <Route path='/members/my-enquiries' component={MyEnquiries} />
      <Route path='/members/bookings' component={MyBookings} />
      <Route path='/members/schedule' component={NewBooking} />
      <Route path='/members/bookings-help' component={Help} />
      <Route path='/members/bookings-bank' component={Payment} />
    </>
  );
};
export default Routes;
