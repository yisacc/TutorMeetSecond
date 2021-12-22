const FullNameInput = () => {
  return (
    <>
      <fieldset>
        <input
          type='name'
          name='name'
          id='name'
          placeholder='Full Name'
          autocomplete='on'
          required
        />
      </fieldset>
    </>
  )
}
export default FullNameInput
