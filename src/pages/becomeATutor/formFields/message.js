const Message = () => {
  return (
    <>
      <fieldset>
        <textarea
          name='message'
          type='text'
          class='form-control'
          id='message'
          placeholder='Message'
          required=''
        ></textarea>
      </fieldset>
    </>
  )
}
export default Message
