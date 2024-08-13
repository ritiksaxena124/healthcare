import React from "react";

import Image from "next/image";
import RegisterForm from "@/components/forms/RegisterForm";

function Page() {
  return (
    <>
      <div className="flex h-screen max-h-screen">
        <section className="remove-scrollbar container">
          <div className="sub-container max-w-[860px]">
            <Image
              src="/assets/icons/logo-full.svg"
              width={1000}
              height={1000}
              alt="Logo"
              className="mb-12 h-10 w-fit"
            ></Image>

            <div className="w-full mb-10 space-y-4">
              <h1 className="header">Welcome 👋</h1>
              <p className="text-dark-600">Let us know more about yourself</p>
            </div>

            <RegisterForm />

            <p className="justify-items-end text-dark-600 text-14-regular py-12">
              © 2024 CarePulse
            </p>
          </div>
        </section>
        <div className="hidden xl:block xl:w-1/4 h-full">
          <Image
            src="/assets/images/register-img.png"
            width={1000}
            height={1000}
            alt="Onboarding Image"
            className="w-full h-full object-cover"
          ></Image>
        </div>
      </div>
    </>
  );
}

export default Page;
