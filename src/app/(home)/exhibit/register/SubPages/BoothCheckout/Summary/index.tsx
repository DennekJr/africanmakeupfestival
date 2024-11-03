export const Summary = () => {
  return (
    <div className="col-span-3 text-black">
      <h3 className="text-3xl lg:text-5xl tracking-[-1px] font-medium">
        Summary
      </h3>
      <ul className="grid gap-2.5 w-full max-w-[448px] mr-auto border-y border-gray-700 py-4 my-8  text-sm">
        <li className="w-full flex justify-between items-start gap-2">
          <p>NEXTGEN</p>
          <p className="text-gray-1100">NGN 1,200,000</p>
        </li>
        <li className="w-full flex justify-between items-start gap-2">
          <p>Sales Tax</p>
          <p className="text-gray-1100">NGN 0</p>
        </li>
        <li className="w-full flex justify-between items-start gap-2">
          <p>Booth Discount</p>
          <p className="text-gray-1100">0%</p>
        </li>
        <li className="w-full flex justify-between items-start gap-2">
          <p>Discount</p>
          <p className="text-gray-1100">0%</p>
        </li>
        <li className="w-full flex justify-between items-start gap-2">
          <p>Addons</p>
          <p className="text-gray-1100">NGN 150,000</p>
        </li>
      </ul>
      <div className="w-full flex justify-between items-start gap-2">
        <p>Total</p>
        <p className="text-gray-1100 text-lg">NGN 1,350,000</p>
      </div>
    </div>
  );
};
