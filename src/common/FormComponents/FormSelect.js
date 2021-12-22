import React from "react"

export const FormSelect = ({
  register,
  error,
  label,
  options,
  id,
  name,
  ...rest
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select {...register(name)} {...rest} id={id}>
        {options?.map((option) => (
          <option
            value={option.value}
            selected={option.hasOwnProperty("selected") ? true : false}
          >
            {option.title}
          </option>
        ))}
      </select>
      <span style={{ color: "red" }}>{error?.message}</span>
    </>
  )
}
