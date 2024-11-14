import { CssSelectField, CssTextField } from "@/app/(home)/checkout/components/utils";

export const ContactUsField = ({ field }: { field: string }) => {
  return (
    <span className="relative inline-block w-full">
      <span className="w-full inline-block relative" data-name={field}>
        <CssTextField
          size="40"
          required
          maxLength="400"
          variant={"standard"}
          className="mb-[0] py-[10px] leading-[1.5em] text-[16px] border-transparent outline-none !text-black placeholder:text-black"
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
          type={field === 'Email' ? 'email' : 'text'}
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

export const ContactUsSelectField = () => {
  return <span className="relative h-full inline-block w-full">
                                      <span className="w-full h-full inline-block relative">
                                        <div
                                          className="h-full border-[#E1DCDA] bg-transparent text-[16px] leading-[1.5em]"
                                          style={{
                                            boxShadow:
                                              "0 15px 15px -14px rgba(0, 0, 0, 0.01)",
                                            letterSpacing: 0,
                                            color: "#FD4C19",
                                            transition: "all 0.3s ease",
                                          }}
                                        >
                                          <CssSelectField
                                            className="w-full h-full outline-none"
                                            aria-invalid="false"
                                            name="location"
                                            variant={"standard"}
                                          >
                                            <option value="Select Location">
                                              Select Location
                                            </option>
                                            <option value="Select Location 2">
                                              Select Location 2
                                            </option>
                                            <option value="Select Location 3">
                                              Select Location 3
                                            </option>
                                            <option value="Select Location 4">
                                              Select Location 4
                                            </option>
                                          </CssSelectField>
                                        </div>
                                        <span
                                          className="block h-[1px] w-full mt-[-1px] z-10 relative bg-[#FCD9CE]"
                                          style={{
                                            transition: "all 0.4s ease",
                                          }}
                                        ></span>{" "}
                                      </span>
                                    </span>
}

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
