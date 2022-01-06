import { useState } from 'react'
import { useSelector } from 'react-redux'
import ApiErrorMessage from '../../accountInformation/apiErrorMessage'
import AddressOne from './AddressOne'
import AddressTwo from './AddressTwo'
import DateOfBirthDay from './DateOfBirthDay'
import DateOfBirthMonth from './DateOfBirthMonth'
import DateOfBirthYear from './DateOfBirthYear'
import Firstname from './Firstname'
import Gender from './Gender'
import Lastname from './Lastname'
import Phonenumber from './Phonenumber'
import Title from './Title'
const PersonalInfoForm = (props) => {
  const {
    apiError,
    errorMessage,
    register,
    errors,
    handleSubmit,
    submitPersonalInfo,
  } = props

  const [subCities, setSubCities] = useState([])
  const counter = useSelector((data) => data)
  const cities = counter.cities[counter.cities.length - 1]

  const handleCityChange = (e) => {
    setSubCities([])
    const { value } = e.target
    let selectedCitySubCities = cities.filter((city) => city.cityId === value)
    if (selectedCitySubCities) {
      setSubCities(selectedCitySubCities[0]?.subCity)
    }
  }
  return (
    <>
      {apiError ? <ApiErrorMessage errorMessage={errorMessage} /> : null}
      <form onSubmit={handleSubmit(submitPersonalInfo)}>
        <div class="columnsplit">
          <Title register={register} errors={errors} />
          <Gender register={register} errors={errors} />
        </div>
        <div class="columnsplit">
          <Firstname register={register} errors={errors} />
          <Lastname register={register} errors={errors} />
        </div>
        <div class="columnsplit">
          <AddressOne register={register} errors={errors} />
          <AddressTwo register={register} errors={errors} />
        </div>
        <div class="columnsplit">
          <div class="columnsplititem">
            <label for="city">City</label>
            <select
              {...register('city')}
              onChange={handleCityChange}
              class="formdropdownpad"
            >
              <option value="" selected="selected">
                Select City
              </option>
              {cities?.map((city) => (
                <option value={city.cityId}>{city.name}</option>
              ))}
            </select>
            <span style={{ color: 'red' }}>{errors.city?.message}</span>
          </div>

          <div class="columnsplititem">
            <label for="subCity">SubCity</label>
            <select {...register('subCity')} class="formdropdownpad">
              <option value="" selected="selected">
                Select SubCity
              </option>
              {subCities?.map((subCity) => (
                <option value={subCity.subCityId}>{subCity.name}</option>
              ))}
            </select>
            <span style={{ color: 'red' }}>{errors.subCity?.message}</span>
          </div>
        </div>
        <div class="columnsplit">
          <Phonenumber register={register} errors={errors} />

          <div class="columnsplititem"></div>
        </div>
        <div class="columnsplit">
          <DateOfBirthYear register={register} errors={errors} />
          <DateOfBirthMonth register={register} errors={errors} />
          <DateOfBirthDay register={register} errors={errors} />
        </div>
        <div class="cardbtncontainer col-lg-2">
          <input
            type="submit"
            value="Continue"
            onClick={handleSubmit}
            class="btn btnsuccess"
          />
        </div>
      </form>
    </>
  )
}
export default PersonalInfoForm
