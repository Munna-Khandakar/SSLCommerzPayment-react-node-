/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";

export function Form({
  defaultValues,
  schema,
  children,
  onSubmit,
}: {
  schema: any;
  defaultValues: any;
  children: any;
  onSubmit: any;
}): JSX.Element {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues, resolver: zodResolver(schema) });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    errors,
                    key: child.type + child.props.name,
                  },
                })
              : child;
          })
        : children}
    </form>
  );
}
export function TextArea({
  errors,
  register,
  label,
  name,
  inputProps,
  ...rest
}: {
  errors?: any;
  register?: any;
  label: string;
  name: string;
  inputProps: React.HTMLProps<HTMLInputElement>;
}) {
  return (
    <label className="block w-full mb-4">
      <span className="form-label">{label}</span>
      <div className="relative">
        <textarea
          className="block w-full form-input"
          {...register(name)}
          {...rest}
          {...inputProps}
        />

        {errors[`${name}`]?.message ? (
          <small className="block h-5 text-sm text-red-600">
            {errors[`${name}`]?.message as string}
          </small>
        ) : null}
      </div>
    </label>
  );
}
export function Input({
  errors,
  register,
  label,
  name,
  inputProps,
  ...rest
}: {
  errors?: any;
  register?: any;
  label: string;
  name: string;
  inputProps: React.HTMLProps<HTMLInputElement>;
}) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [inputPropsState, seInputProps] = React.useState(inputProps);
  return (
    <label className="block w-full mb-4">
      <span className="form-label">{label}</span>
      <div className="relative">
        <input
          className="block w-full form-input"
          {...register(name)}
          {...rest}
          {...inputPropsState}
        />
        {inputProps?.type == "password" ? (
          <span className="absolute right-[10px] -translate-y-1/2 top-1/2 cursor-pointer">
            {!showPassword ? (
              <FiEyeOff
                onClick={() => {
                  setShowPassword(true);
                  seInputProps({ ...inputPropsState, type: "text" });
                }}
              />
            ) : (
              <FiEye
                onClick={() => {
                  setShowPassword(false);
                  seInputProps({ ...inputPropsState, type: "password" });
                }}
              />
            )}
          </span>
        ) : null}
        {errors[`${name}`]?.message ? (
          <small className="block h-5 text-sm text-red-600">
            {errors[`${name}`]?.message as string}
          </small>
        ) : null}
      </div>
    </label>
  );
}

export function Select({
  errors,
  register,
  disabled = false,
  options,
  name,
  label,
  ...rest
}: {
  errors?: any;
  register?: any;
  disabled?: boolean;
  options: Options[];
  name: string;
  label: string;
}) {
  return (
    <label className="block w-full mb-4">
      <span className="form-label">{label}</span>
      <div className="relative">
        <select
          disabled={disabled}
          className="block w-full form-input"
          {...register(name)}
          {...rest}
        >
          <option value="">Select Status</option>
          {options.map((option: Options) => (
            <option key={option?.value} value={option?.value}>
              {option?.title}
            </option>
          ))}
        </select>
        {errors[`${name}`]?.message ? (
          <small className="block h-5 text-sm text-red-600">
            {errors[`${name}`]?.message as string}
          </small>
        ) : null}
      </div>
    </label>
  );
}
interface Options {
  title: string;
  value: string;
}
