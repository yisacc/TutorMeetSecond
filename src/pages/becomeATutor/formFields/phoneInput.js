const PhoneInput = () => {
  return (
    <>
      <fieldset>
        <input
          type='phone'
          name='phone'
          id='phone'
          placeholder='Phone'
          autocomplete='on'
          required
        />
      </fieldset>
    </>
  )
}
export default PhoneInput
