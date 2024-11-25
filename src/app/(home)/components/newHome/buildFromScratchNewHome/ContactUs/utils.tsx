import {
  CssTextArea,
  CssTextField
} from "@/app/(home)/checkout/components/utils";

export const ContactUsField = ({
                                 field,
                                 value,
                                 setValue
                               }: {
  field: string;
  value: string;
  setValue: (value: ((prevState: string) => string) | string) => void;
}) => {
  return (
    <span className="relative inline-block w-full">
      <span className="w-full inline-block relative" data-name={field}>
        <CssTextField
          size="medium"
          required
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          variant={"standard"}
          className="mb-[0] py-[10px] border-transparent outline-none !text-black placeholder:text-lightSecondary"
          style={{
            boxShadow: "0 15px 15px -14px rgba(0, 0, 0, 0.01)",
            transition:
              "color 0.3s ease, background-color 0.3s ease, border-color 0.3s easecolor 0.3s ease, background-color 0.3s ease, border-color 0.3s ease",
            color: "#000",
          }}
          slotProps={{
            input: {
              disableUnderline: true,
            },
          }}
          placeholder={field}
          type={field === "Email" ? "email" : "text"}
          name={field}
        />
        <span
          className="block h-[1px] w-full mt-[-1px] z-10 relative bg-[#FCD9CE]"
          style={{
            transition: "all 0.4s ease",
          }}
        ></span>
      </span>
    </span>
  );
};
export const ContactUsTextArea = ({
                                    field,
                                    value,
                                    setValue
                                  }: {
  field: string;
  value: string;
  setValue: (value: ((prevState: string) => string) | string) => void;
}) => {
  return (
    <span className="relative inline-grid w-full">
      <CssTextArea
        required
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="mb-[0] py-[10px] border-transparent outline-none !text-black placeholder:text-lightSecondary/80"
        style={{
          backgroundColor: "transparent",
          width: "100%",
          paddingTop: "4px",
          paddingBottom: "5px",
          boxShadow: "0 15px 15px -14px rgba(0, 0, 0, 0.01)",
          transition:
            "color 0.3s ease, background-color 0.3s ease, border-color 0.3s easecolor 0.3s ease, background-color 0.3s ease, border-color 0.3s ease",
          color: "#000"
        }}
        placeholder={field}
        name={field}
      />
      <span
        className="block h-[1px] w-full mt-[-1px] z-10 relative bg-[#FCD9CE]"
        style={{
          transition: "all 0.4s ease"
        }}
      ></span>
    </span>
  );
};

export const HiddenFormInputs = () => {
  return (
    <div style={{ display: "none" }}>
      <input type="hidden" name="_wpcf7" value="1395" />
      <input type="hidden" name="_wpcf7_version" value="5.9.8" />
      <input type="hidden" name="_wpcf7_locale" value="en_US" />
      <input
        type="hidden"
        name="_wpcf7_unit_tag"
        value="wpcf7-f1395-p51034-o1"
      />
      <input type="hidden" name="_wpcf7_container_post" value="51034" />
      <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
    </div>
  );
};
