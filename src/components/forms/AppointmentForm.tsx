"use client";

import SubmitButton from "../SubmitButton";
import CustomFormField from "../CustomFormField";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { CreateAppointmentSchema } from "@/lib/validation";
import { useState } from "react";
import { Doctors } from "../../../constants";
import { SelectItem } from "../ui/select";
import Image from "next/image";
import { FormFieldType } from "./PatientForm";

function AppointmentForm() {

  const [isLoading, setIsLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<CreateAppointmentParams>({
    resolver: zodResolver(CreateAppointmentSchema),
    defaultValues: {
      userId: "",
      patient: "",
      primaryPhysician: "",
      reason: "",
      schedule: new Date(),
      status: undefined,
      note: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: CreateAppointmentParams) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
        {/* Medical Information */}
        <section className="space-y-6">
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.SELECT}
            name="primaryPhysician"
            label="Doctor"
            placeholder="Select a doctor"
          >
            {Doctors.map((doc) => (
              <SelectItem key={doc.name} value={doc.name}>
                <div className="flex items-center gap-2">
                  {doc.image && (
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      width={32}
                      height={32}
                    />
                  )}
                  {doc.name}
                </div>
              </SelectItem>
            ))}
          </CustomFormField>

          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.TEXTAREA}
              name="reason"
              label="Reason for appointment"
              placeholder="ex: Annual monthly check-up"
            />
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.TEXTAREA}
              name="note"
              label="Additional comments/notes"
              placeholder="ex: Prefer afteroon appointments, if possible"
            />
          </div>

          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.DATE_PICKER}
            name="schedule"
            label="Expected appointment date"
            iconSrc="/assets/icons/calendar.svg"
            iconAlt="Calendar Icon"
          />
        </section>

        <SubmitButton isLoading={isLoading}>Book appointment</SubmitButton>
      </form>
    </Form>
  );
}

export default AppointmentForm;
