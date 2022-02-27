import { Button, Grid, TextField } from '@mui/material';
import * as yup from "yup";
import React from 'react';
import { useFormik } from 'formik';

const validationSchema = yup.object({
    address1: yup
        .string('Enter your Address')
        .required('Address is required'),
    address2: yup
        .string('Enter your address'),
    city: yup
        .string('Enter your city')
        .required('City is required'),
    state: yup
        .string('Enter your state')
        .required('State is required'),

    zip: yup
        .string('Enter your zip')
        .min(6, 'invailed zip')
        .max(6, 'invailed Zip')
        .required('Zip is required'),

});

export default function CorrespondanceForm() {
    const [change, setchange] = React.useState(!"disabled")
    const [compare, setcompare] = React.useState(true)


    const formik = useFormik({
        initialValues: {
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
        },
        validationSchema: validationSchema,
        onSubmit: () => {
            handleeditSave()

        },
    });
    const handleeditSave = () => {
        if (!compare) { setcompare(true); setchange(!"disabled") }
        else { setcompare(false); setchange("disabled") }
    }
    return (
        <div><form onSubmit={formik.handleSubmit}>
            <Grid container   >
                <Grid item sm={4} xs={4.5}>
                    <h3><u>Correspondance Address</u></h3>
                </Grid>
                <Grid item sm={5} md={6.5} xs={4} >
                </Grid>
                <Grid item xs={1}>
                    {!compare ?
                        <Button variant="contained" type="submit" >Edit</Button> :
                        <Button variant="contained" type="submit" >save</Button>
                    }
                </Grid>
            </Grid>
            <br></br>
            <TextField disabled={change} type='text' name='address1' id="address1" label="Address 1" variant="standard" sx={{ mr: "1vw", width: "13vw" }} value={formik.values.address1} onChange={formik.handleChange} error={formik.touched.address1 && Boolean(formik.errors.address1)} helperText={formik.touched.address1 && formik.errors.address1} />
            <TextField disabled={change} type='text' name='address2' id="address2" label="Address 2" variant="standard" sx={{ mr: "1vw", width: "13vw" }} value={formik.values.address2} onChange={formik.handleChange} error={formik.touched.address2 && Boolean(formik.errors.address2)} helperText={formik.touched.address2 && formik.errors.address2} />
            <TextField disabled={change} type='text' name='city' id="city" label="City" variant="standard" sx={{ mr: "1vw", width: "13vw" }} value={formik.values.city} onChange={formik.handleChange} error={formik.touched.city && Boolean(formik.errors.city)} helperText={formik.touched.city && formik.errors.city} />
            <TextField disabled={change} type='text' name='state' id="state" label="State" variant="standard" sx={{ mr: "1vw", width: "13vw" }} value={formik.values.state} onChange={formik.handleChange} error={formik.touched.state && Boolean(formik.errors.state)} helperText={formik.touched.state && formik.errors.state} />
            <TextField disabled={change} type='text' name='zip' id="zip" label="Zip" variant="standard" sx={{ mr: "1vw", width: "13vw" }} value={formik.values.zip} onChange={formik.handleChange} error={formik.touched.zip && Boolean(formik.errors.zip)} helperText={formik.touched.zip && formik.errors.zip} />
        </form></div>
    )
}

