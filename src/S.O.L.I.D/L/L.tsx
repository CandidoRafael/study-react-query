import { InputHTMLAttributes, useId } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = ({ name, type = 'text', ...rest }: InputProps) => {
    return (
        <>
          <input type={type} name={name} {...rest} />
        </>
    )
}

type InputWithLabelProps = {
    label: string
} & InputProps

export const InputWithLabel = ({label, ...rest}: InputWithLabelProps) => {
  const inputId = useId()

  return (
    <>
      <label htmlFor={inputId}>{label}</label>
      <Input type="password" id={inputId} name="password" {...rest} />
    </>
   )
}