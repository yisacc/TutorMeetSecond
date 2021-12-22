import React from "react"

export const FormTextarea = ({ register, error, label, id, name, ...rest }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea {...register(name)} {...rest} id={id}></textarea>
      <span style={{ color: "red" }}>{error?.message}</span>
    </>
  )
}
