import { createSlice } from "@reduxjs/toolkit";
import * as Yup from 'yup';

export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const ExhibitionFormSchema = Yup.object().shape({
  form_companyName: Yup.string()
    .min(1, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  form_contactName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  form_jobTitle: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  form_industry: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  form_briefDescription: Yup.string()
    .min(25, 'Too Short!')
    .max(150, 'Too Long!')
    .required('Required'),
  form_howDidYouHearAboutEvent: Yup.string()
    .min(3, 'Too Short!')
    .max(25, 'Too Long!')
    .required('Required'),

  form_email: Yup.string().email('Invalid email').required('Required'),
});

export type ExhibitionBoothBillingInfo = {
  form_booth: string,
  form_companyName: string,
  form_contactName: string,
  form_jobTitle: string,
  form_phoneNumber: string,
  form_country: string,
  form_email: string,
  form_industry: string,
  form_briefDescription: string,
  form_howDidYouHearAboutEvent: string,
};

const initialFormValue = {
  form_booth: '',
  form_companyName: '',
  form_contactName: '',
  form_jobTitle: '',
  form_phoneNumber: '',
  form_country: '',
  form_email: '',
  form_industry: '',
  form_briefDescription: '',
  form_howDidYouHearAboutEvent: '',
};

type initialStateType = {
  formValues: {booth: string, data: ExhibitionBoothBillingInfo},
  total: number;
}

const initialState:initialStateType = {
  formValues: { booth: '', data: initialFormValue},
  total: 0,
};

export const exhibitionSlice = createSlice({
  name: 'exhibition',
  initialState,
  reducers: {

    setFormValues: (state, action) => {
      state.formValues = ({
        ...state.formValues,
        [action.payload.booth]: action.payload.data,
      });
    },

    setTotal: (state, action) => {
      state.total = action.payload;
    },
  }
})

export const { setFormValues, setTotal } = exhibitionSlice.actions;
export default exhibitionSlice.reducer