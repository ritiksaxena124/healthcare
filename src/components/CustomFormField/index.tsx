import React from "react";

import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Control } from "react-hook-form";
import { FormFieldType } from "../forms/PatientForm";
import Image from "next/image";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeletorn?: (field: any) => React.ReactNode;
}

const RenderField = ({ props, field }: { props: CustomProps; field: any }) => {
  const { placeholder, fieldType, iconSrc, iconAlt } = props;
  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex border border-dark-500 bg-dark-400 rounded-md">
          {iconSrc && (
            <Image
              src={iconSrc}
              alt={iconAlt || "icon"}
              width={24}
              height={24}
              className="ml-2"
            />
          )}
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className="shad-input border-0"
            />
          </FormControl>
        </div>
      );
    case FormFieldType.PHONE_INPUT:
      return (
        <PhoneInput
          defaultCountry="IN"
          international
          placeholder={placeholder}
          value={field.value}
          onChange={field.onChange}
          withCountryCallingCode
          countryCallingCodeEditable={false}
          className="input-phone"
        />
      );
  }
};

const CustomFormField = (props: CustomProps) => {
  const { control, name, fieldType, label } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}
          <FormControl>
            <RenderField props={props} field={field} />
          </FormControl>
          <FormMessage className="shad-error"/>
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
