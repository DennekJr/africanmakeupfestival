import { formatCurrency } from "@/app/(home)/checkout/components/utils";
import { Box } from "@mui/material";
import { useAppSelector } from "@/app/lib/hooks";

export const CheckoutItems = () => {
  const { formValues, total } = useAppSelector((state) => state.exhibition);
  const formData = Object.values(formValues)[2];
  return <Box className="grid gap-8">
    <h3 className="text-5xl tracking-[-1px] font-medium">
      Cart Items
    </h3>
    <ul className="grid gap-2.5 w-full max-w-[448px] mr-auto">
      <li className="w-full flex justify-between items-start gap-2 text-xl">
        <p className="font-medium">
          {(formData as object).form_booth.slice(
            0,
            (formData as object).form_booth.indexOf(" ("),
          )}
        </p>
        <p className="text-[#C8C8CB]">
          NGN {formatCurrency(total)}
        </p>
      </li>
      <li className="w-full flex justify-between items-start gap-2 text-xl">
        <p className="font-medium">Company Name</p>
        <p className="text-[#C8C8CB]">
          {formData.form_companyName}
        </p>
      </li>
      <li className="w-full flex justify-between items-start gap-2 text-xl">
        <p className="font-medium">Price</p>
        <p className="text-[#C8C8CB]">
          NGN {formatCurrency(total)}
        </p>
      </li>
    </ul>
  </Box>
}