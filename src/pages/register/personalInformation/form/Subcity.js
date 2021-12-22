// import { FormSelect } from "../../../../common/FormComponents/FormSelect"

// const Subcity = props => {
//   const { register, errors,subCities } = props

//   return (
//     <div class='columnsplititem'>
//       <FormSelect
//         register={register}
//         name='subCity'
//         label='SubCity'
//         id='title'
//         error={errors.subCity}
//         class='formdropdownpad'
//         options={[
//           { title: "Select SubCity", value: "", selected: true },
//           { title: `Mr`, value: "Mr" },
//           { title: `Miss`, value: "Miss" },
//           { title: `Mrs`, value: "Mrs" },
//           { title: `Ms`, value: "Ms" },
//           { title: `Mx`, value: "Mx" },
//           { title: `Dr`, value: "Dr" },
//           { title: `Prof`, value: "Prof" },
//         ]}
//       />
//     </div>
//     <div class='columnsplititem'>
//     <label for='subCity'>SubCity</label>
//     <select {...register("subCity")} class='formdropdownpad'>
//       <option value='' selected='selected'>
//         Select SubCity
//       </option>
//       {subCities?.map(subCity => (
//         <option value={subCity.subCityId}>{subCity.name}</option>
//       ))}
//     </select>
//     <span style={{ color: "red" }}>{errors.subCity?.message}</span>
//   </div>
//   )
// }
// export default Subcity
