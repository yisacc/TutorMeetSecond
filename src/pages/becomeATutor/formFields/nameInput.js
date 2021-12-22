const NameInput = () => {
  return (
    <>
      <fieldset>
        <input
          type='name'
          name='name'
          id='name'
          placeholder='Name'
          autocomplete='on'
          required
        />
      </fieldset>
    </>
  )
}
export default NameInput
