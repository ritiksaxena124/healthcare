import React from "react";

import { Input } from "@/components/ui/input";
import {
  FormControl,
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

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

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
  renderSkeleton?: (field: any) => React.ReactNode;
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
    case FormFieldType.TEXTAREA:
      return <Textarea placeholder={placeholder} className="shad-textArea" />;
    case FormFieldType.SELECT:
      return (
        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <SelectTrigger className="shad-select-trigger">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent className="shad-select-content">
            {props.children}
          </SelectContent>
        </Select>
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
          className="input-phone flex-1"
        />
      );
    case FormFieldType.DATE_PICKER:
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
          <DatePicker
            selected={field.value}
            onChange={(date) => field.onChange(date)}
            className="date-picker"
          />
        </div>
      );
    case FormFieldType.SKELETON:
      return props.renderSkeleton ? props.renderSkeleton(field) : null;
  }
};

const CustomFormField = (props: CustomProps) => {
  const { control, name, fieldType, label } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}
          <FormControl>
            <RenderField props={props} field={field} />
          </FormControl>
          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
