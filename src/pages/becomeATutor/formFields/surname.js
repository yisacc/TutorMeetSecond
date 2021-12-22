const SurnameInput = () => {
  return (
    <>
      <fieldset>
        <input
          type='surname'
          name='surname'
          id='surname'
          placeholder='Surname'
          autocomplete='on'
          required
        />
      </fieldset>
    </>
  )
}
export default SurnameInput
