import * as React from "react";

export const Label = ({label}:{label:string}) => {
  return <label
    className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base leading-[22.4px] font-normal text-[#1E1C21]">
    {label}
  </label>
}

export const postBooth = async (booth) => {
  try {
    const response = await fetch("/api/exhibitBooths", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booth), // Stringify the object
    });

    const data = await response.json(); // Parse the JSON response
    if (response.ok) {
      console.log("Booth purchased successfully:", data);
    } else {
      console.error("Error posting ticket:", data);
    }
  } catch (error) {
    console.error("Request failed:", error);
  }
};