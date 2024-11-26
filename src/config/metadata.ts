import { NEXT_METADATA_BASE } from "./config";

const METADATA_CONFIG = {
  metadataBase: new URL(NEXT_METADATA_BASE),
  title: { template: "%s | Africa Skincare Festival", default: "Africa Skincare Festival" },
  description: "African Skincare Festival",
  applicationName: "AfricaSkincareFestival",
  socialMedia: {
    instagram: 'https://www.instagram.com/africaskincarefestival?igsh=MXAzcmxjaDd6NnAwNQ==',
    tiktok: 'https://www.tiktok.com/@africaskincarefestival?_t=8rgnTxK4KDW&_r=1',
  },
  keywords: [
    "Event Hosting",
    "African Skincare Festival",
    "Skincare Festival",
    "Festival",
    "Event Tickets",
    "Event Planning",
    "Makeup Services",
    "Beauty Services",
    "Skincare",
    "Local Services",
    "Online Booking",
    "Community",
    "Nigeria",
  ],
  alternates: {
    canonical: "",
  },
  openGraph: {
    title: "Africa Skincare Festival",
    description: "",
    url: "https://africaskincarefestival.com/",
    siteName: "Africa Skincare Festival",
    // locale: "en",
    type: "website",
  },
  appLinks: {
    web: {
      url: "https://africaskincarefestival.com/",
    },
  },
};

export default METADATA_CONFIG;
