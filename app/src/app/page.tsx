"use client";

import { useEffect, useState } from "react";
import config from "../config"
import RegisterPage from "./register/page";

export default function Home() {

  return (
    <>

        <p className="mt-2 text-gray-600">
          Getting a new business off the ground is a lot of hard work.
          Here are five ideas you can use to find your first customers vvvvvvvvvvv.
        </p>

      <RegisterPage/>
    </>
  );
}
