import { NextPage } from "next";
import Box from "@mui/material/Box";
import * as React from "react";
import { Typography } from "@mui/material";
import NavBar from "@/app/components/NavBar";
import { Hero } from "@/app/(home)/components/Hero";

const Home: NextPage = () => {
  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
      <NavBar />
      <Hero />
    </Box>
  );
};

export default Home;
