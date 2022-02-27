import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, TextField } from '@mui/material';
import * as yup from "yup";
import { useFormik } from 'formik';
import CorrespondanceForm from './CorrespondanceForm';
import BillingForm from './BillingForm';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const validationSchema = yup.object({
  contactName: yup
    .string('Enter your Contact Name')
    .min(3, 'minimum 8 characters')
    .max(20, 'should not exceed 20 characters')
    .required(' Name is required'),
  companyName: yup
    .string('Enter your Company Name')
    .max(20, 'should not exceed 20 characters')
    .required(' Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  phoneNo: yup
    .string('Enter your Phone number')
    .min(10, 'invailed number')
    .max(10, 'invailed number')
    .required('phone No is required'),
});
export default function BasicGrid() {
  const [change, setchange] = React.useState(!"disabled")
  const [compare, setcompare] = React.useState(true)
  const formik = useFormik({
    initialValues: {
      companyName: '',
      contactName: '',
      email: '',
      phoneNo: '',
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      handleeditSave1()
    },

  });


  const handleeditSave1 = () => {
    if (!compare) { setcompare(true); setchange(!"disabled") }
    else { setcompare(false); setchange("disabled") }
  }

  return (
    <Box >
      <Grid container >
        <Grid item xs={12}>
          <Item>
            <form onSubmit={formik.handleSubmit}>
              <Grid container   >
              <Grid item sm={9} md={10.5} xs={8.5} >
                </Grid>
                <Grid item xs={1}>
                  {!compare ?
                    <Button variant="contained" type="submit " >Edit</Button> :
                    <Button variant="contained" type="submit " >Save</Button>
                  }
                </Grid>
              </Grid>
              <br></br>
              <TextField
                disabled={change}
                type='text'
                name='companyName'
                id="companyName"
                label="Company Name"
                variant="standard"
                sx={{ mr: "15vw" }}
                value={formik.values.companyName}
                onChange={formik.handleChange}
                error={formik.touched.companyName && Boolean(formik.errors.companyName)}
                helperText={formik.touched.companyName && formik.errors.companyName} />
              <TextField
                disabled={change}
                type='text'
                name='contactName'
                id="contactName"
                label="Contact Name"
                variant="standard"
                sx={{ mr: "15vw" }}
                value={formik.values.contactName}
                onChange={formik.handleChange}
                error={formik.touched.contactName && Boolean(formik.errors.contactName)}
                helperText={formik.touched.contactName && formik.errors.contactName} />
              <br></br>
              <TextField disabled={change}
                type='email'
                name='email'
                id="email"
                label="Email"
                variant="standard"
                sx={{ mr: "15vw" }}
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email} />
              <TextField disabled={change}
                type='number'
                name='phoneNo'
                id="phoneNo"
                label="Phone no."
                variant="standard"
                sx={{ mr: "15vw" }}
                value={formik.values.phoneNo}
                onChange={formik.handleChange}
                error={formik.touched.phoneNo && Boolean(formik.errors.phoneNo)}
                helperText={formik.touched.phoneNo && formik.errors.phoneNo} />
            </form>
          </Item>
          <br></br>
          <Item>
            <CorrespondanceForm />
          </Item>
          <br></br>
          <Item>
            <BillingForm />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
