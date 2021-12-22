const EmailInput = () => {
  return (
    <>
      <fieldset>
        <input
          type='text'
          name='email'
          id='email'
          pattern='[^ @]*@[^ @]*'
          placeholder='Email'
          required=''
        />
      </fieldset>
    </>
  )
}
export default EmailInput
