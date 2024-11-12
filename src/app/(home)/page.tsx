import { NextPage } from "next";
import Box from "@mui/material/Box";
import * as React from "react";
import { Hero } from "../../app/(home)/components/Hero";
import { MarqueeSlide } from "../../app/(home)/components/Marquee";
// import { InvestorsMedia } from "../../app/(home)/components/Investors";
// import { EmojiGrid } from "../../app/(home)/components/EmojiGrid";
// import { BusinessInsiderPoster } from "../../app/(home)/components/BusinessInsiderPoster";
// import { Speakers } from "../../app/(home)/components/Speakers";
// import { Partnership } from "../../app/(home)/components/Partnership";
// import { Sponsors } from "../../app/(home)/components/Sponsors";
// import { NewHero } from "@/app/(home)/components/newHome/Hero";
// import { DirectHeroImport } from "@/app/(home)/components/newHome/DirectHeroImport";
import { BuildFromScratchNewHome } from "@/app/(home)/components/newHome/buildFromScratchNewHome";

const Home: NextPage = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
        <Hero />
        <MarqueeSlide />
        {/*<InvestorsMedia />*/}
        {/*<Sponsors />*/}
        {/*<EmojiGrid />*/}
        {/*<BusinessInsiderPoster />*/}
        {/*<Speakers />*/}
        {/*<Partnership />*/}
      <BuildFromScratchNewHome />
    </Box>
  );
};

export default Home;
