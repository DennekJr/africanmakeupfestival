import { Box } from "@mui/material";
import { setAddOns, setAddOnTotal } from "@/app/lib/features/register/registerSlice";
import { Delete } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { useMemo } from "react";
import { SliderBoothAddOns } from "@/app/(home)/exhibit/register/SubPages/AddToBooth/Slider/slider.constants";

export const AddOnList = () => {
  const { addOns, addOnTotal } = useAppSelector((state) => state.register);
  const BoothAddOns = useMemo(() => Object.values(SliderBoothAddOns), []);
  const dispatch = useAppDispatch();
  return <Box className="grid gap-6 py-6 border-y border-input">
    <div>
      <h4 className="text-3xl tracking-[-1px] font-medium">
        {(addOns as string[]).length} Addons
      </h4>
    </div>
    <div className="grid gap-2" style={{ position: "relative" }}>
      {addOns.map((addOn, index) => {
        const removeAddOn = () => {
          const newAddOns = addOns.filter((name) => addOn !== name);
          const price = BoothAddOns.find(
            (boothAddOn) => boothAddOn.name === addOn,
          );
          dispatch(setAddOns(newAddOns));
          dispatch(
            setAddOnTotal(addOnTotal - Number(price?.price)),
          );
        };
        return (
          <div key={index} className="flex justify-between gap-6">
            <div className="">
              <p>{addOn}</p>
              <p className="text-[#C8C8CB]">{addOn}</p>
            </div>
            <button
              onClick={removeAddOn}
              className="justify-center ease-in-out duration-500 whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#D52620] text-[#FCFCFC] hover:bg-[#D52620]/90 h-14 px-6 py-4 rounded-full flex items-center gap-3"
              type="button"
            >
              <span>REMOVE</span>
              <Delete />
            </button>
          </div>
        );
      })}
    </div>
  </Box>
}