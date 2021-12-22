const CityInput = () => {
  return (
    <>
      <fieldset>
        <input
          type='text'
          name='city'
          id='city'
          placeholder='City'
          autocomplete='on'
          required
        />
      </fieldset>
    </>
  )
}
export default CityInput
