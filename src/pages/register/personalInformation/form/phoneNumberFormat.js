const FormatPhoneNumber = value => {
  var formatedNumber = value.substring(1)
  var phoneNumberCountryCode = "+251" + formatedNumber
  return phoneNumberCountryCode
}
export default FormatPhoneNumber
