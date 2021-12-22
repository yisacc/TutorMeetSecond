import React from "react"

export const FormInput = ({ register, error, label, id, name, ...rest }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input {...register(name)} {...rest} id={id} />
      <span style={{ color: "red" }}>{error?.message}</span>
    </>
  )
}
