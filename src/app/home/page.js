"use client";

import { useState } from "react";
import React from "react";
import TextCard from "../(components)/textcard";
import { alignProperty } from "@mui/material/styles/cssUtils";

export default function home() {
  return (
    <main>
      <h1>Home</h1>
      <TextCard
        header1="Welcome to the Next.js App Directory"
        text2="This is a text card"
      ></TextCard>
    </main>
  );
}
