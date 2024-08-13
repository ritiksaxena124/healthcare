import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            width={1000}
            height={1000}
            alt="Logo"
            className="mb-12 h-10 w-fit"
          ></Image>

          <div className="w-full mb-10 space-y-4">
            <h1 className="header">Hi there 👋</h1>
            <p className="text-dark-600">Schedule your first appointment</p>
          </div>

          <PatientForm />

          <div className="flex justify-between py-12 text-dark-600 text-14-regular">
            <p className="justify-items-end">© 2024 CarePulse</p>
            <a href="">Admin</a>
          </div>
        </div>
      </section>
      <div className="w-1/2 h-full">
        <Image
          src="/assets/images/onboarding-img.png"
          width={1000}
          height={1000}
          alt="Onboarding Image"
          className="w-full h-full object-cover"
        ></Image>
      </div>
    </div>
  );
}
