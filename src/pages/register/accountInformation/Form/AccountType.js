import { FormSelect } from "../../../../common/FormComponents/FormSelect"
const AccountType = props => {
  const { register, errors } = props
  return (
    <>
      <div class='columnsplititem'>
        <FormSelect
          register={register}
          name='accountType'
          label='Account Type'
          id='accountType'
          error={errors.accountType}
          class='formdropdownpad'
          options={[
            { title: "Select", value: "", selected: true },
            { title: `I'm a Tutor`, value: "0" },
            { title: `I'm a Student`, value: "1" },
            { title: `I'm a Parent`, value: "2" },
          ]}
        />
      </div>
    </>
  )
}
export default AccountType
