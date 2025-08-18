"use client";

import Link from "next/link";

export default function Payment() {
  return (
    <section className="relative bg-blue-900 text-white pt-14 pb-6 sm:pt-20 px-4 md:px-6 text-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* <img
          src="/images/payment.jpg"
          alt="Payment Background"
          className="w-full h-full object-cover opacity-70"
        /> */}
        <div className="absolute inset-0 bg-blue-900/70"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
          Online Payment
          <span className="block w-20 h-1 bg-white mx-auto mt-4 rounded-full"></span>
        </h1>

        <p className="text-lg text-blue-100 mb-10">
          Scan the QR code below to make a secure and easy online payment.
        </p>

        {/* QR Code Card */}
        <div className=" ">
          <img
            src="/images/payment.jpg"
            alt="Payment QR Code"
            className="w-full h-[400px] rounded-lg md:h-[650px]  object-contain"
          />
          <p className="text-white mt-4 font-medium">
            Use any UPI app to scan & pay
          </p>
        </div>

        {/* Navigation */}
      </div>
    </section>
  );
}
