import * as React from "react";
//import { useHistory } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import './accounts.css'
import Button from "@mui/material/Button";
import { useEffect } from "react";
import {
    Grid,
    TextField,
    InputAdornment,
    Tooltip,
    IconButton,
    FormControl,
    Select,
    InputLabel,
    MenuItem,
    FormHelperText,
} from "@mui/material";
import axios from "axios";
import EmailIcon from "@mui/icons-material/Email";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { motion } from "framer-motion";
import Card from '@mui/material/Card'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import chart from '../Images/chart.png'
import Swal from "sweetalert2";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { useFormik } from 'formik';
import { styled, useTheme } from '@mui/material/styles';
import * as yup from 'yup';
import { Link } from "react-router-dom";
import { FormatAlignLeftSharp } from "@mui/icons-material";
import { url } from '../url'

const validationSchema = yup.object({
    email: yup
        .string('Enter your Email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password is too short')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Password nust conatin minimum eight characters, at least one letter, one number and one special character are required')
        .required('Password is required'),
    role: yup
        .string('Enter your Role')
        .email('Enter a valid Role')
        .required('Role is required'),

});
const theme = createTheme();

const Login = () => {
    const onTop = () => {
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        onTop();
    }, []);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            role: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
            var axios = require('axios');
            var FormData = require('form-data');
            var data = new FormData();
            data.append('email', values.email);
            data.append('password', values.password);

            var config = {
                method: 'post',
                url: 'http://127.0.0.1:8000/accounts/login/',
                headers: {},
                data: data
            };

            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    });
    const [passwordShow, setpassword] = React.useState(false);
    const [passwordShow2, setpassword2] = React.useState(false);
   



    return (
        <div>
            <Card>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <img src='https://images.pexels.com/photos/5069143/pexels-photo-5069143.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="signup" style={{ width: "100%", height: "86vh" }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container>
                            <Grid item xs={12} style={{ padding: "5vh", height: "87vh" }}>
                                <form onSubmit={formik.handleSubmit} autoComplete="off" style={{ width: "100%" }}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sx={{ textAlign: "left", fontSize: "1.6rem", fontWeight: "750" }}>
                                            Login
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12}>

                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12}>
                                            <TextField
                                                fullWidth
                                                id="email"
                                                name="email"
                                                label="Email"
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                                error={formik.touched.email && Boolean(formik.errors.email)}
                                                helperText={formik.touched.email && formik.errors.email}
                                                InputLabelProps={{ style: { fontSize: 17 } }}
                                                InputProps={{
                                                    style: { fontSize: 20 }
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={6}>
                                            <Grid item xs={12} sm={12} md={12}>
                                                <TextField
                                                    fullWidth
                                                    id="password"
                                                    name="password"
                                                    label="Password"
                                                    type={passwordShow ? "text" : "password"}
                                                    value={formik.values.password}
                                                    onChange={formik.handleChange}
                                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                                    helperText={formik.touched.password && formik.errors.password}
                                                    InputLabelProps={{ style: { fontSize: 17 } }}

                                                    InputProps={{
                                                        style: { fontSize: 20 },
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    aria-label="toggle password visibility"
                                                                    onMouseDown={(e) => e.preventDefault()}
                                                                    edge="end"
                                                                    onClick={() => {
                                                                        setpassword(!passwordShow);
                                                                    }}
                                                                >
                                                                    {passwordShow ? (
                                                                        <VisibilityOff />
                                                                    ) : (
                                                                        <Visibility />
                                                                    )}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        ),
                                                    }} />
                                            </Grid>

                                        </Grid>
                                        <Grid item xs={12} sm={6} md={6}>
                                            <Grid item xs={12} sm={12} md={12}>
                                            <TextField
                                                fullWidth
                                                id="role"
                                                name="role"
                                                label="role"
                                                value={formik.values.role}
                                                onChange={formik.handleChange}
                                                error={formik.touched.email && Boolean(formik.errors.role)}
                                                helperText={formik.touched.email && formik.errors.role}
                                                InputLabelProps={{ style: { fontSize: 17 } }}
                                                InputProps={{
                                                    style: { fontSize: 20 }
                                                }}
                                            />
                                            </Grid>
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={12}>
                                        <Button variant="contained" fullWidth type="submit"
                                                sx={{
                                                    backgroundColor: "#f2cf07",
                                                    backgroundImage: "linear-gradient(315deg, #f2cf07 0%, #55d284 74%)", fontSize: "1.2rem", fontWeight: "600"
                                                }}>
                                                Submit
                                            </Button>

                                        </Grid>
                                        <Grid item xs={12} sx={{ fontSize: "1.2rem", fontWeight: "550" }}>

                                            <Link to='/Signup' style={{ textDecoration: "none", color: "#f2cf07" }}> Don't have an account ? Sign Up</Link>
                                        </Grid>
                                        <Grid item xs={12} sx={{ fontSize: "1rem", fontWeight: "500" }}>
                                            <Button
                                                color="success"
                                                variant="outlined"
                                                fullWidth

                                                style={{ marginBottom: "3vh" }}
                                                onClick={() => {
                                                    console.log("hiii")
                                                    Swal.fire({
                                                        title: "Input your email ",
                                                        input: "text",
                                                        inputLabel: "Email",
                                                        inputValidator: async (num) => {
                                                            console.log(num);
                                                            if (!num) {
                                                                return "You need to write something!";
                                                            } else if (num) {
                                                                var FormData = require("form-data");
                                                                var mail = new FormData();
                                                                mail.append("email", num);
                                                                var config2 = {
                                                                    method: "post",
                                                                    url: url + 'accounts/request-reset-email/',
                                                                    data: mail,
                                                                };
                                                                axios(config2)
                                                                    .then(function (response) {
                                                                        console.log(JSON.stringify(response.data));
                                                                        Swal.fire({
                                                                            title: "We have sent a link to your mail",
                                                                            icon: "success",
                                                                        });
                                                                        <Link to="/dashboard" />
                                                                    })
                                                                    .catch((e) => {
                                                                        Swal.fire({
                                                                            title: "invalid",
                                                                            icon: "error",
                                                                        });
                                                                    });
                                                            }
                                                        },
                                                    });
                                                }}
                                                component={motion.div}
                                                whileHover={{
                                                    scale: 1.08,
                                                    textShadow: "0 0 8px rgb(255,255,255)",
                                                    transition: { duration: 0.3 },
                                                }}
                                            >
                                                <Link
                                                    to="#"
                                                    style={{
                                                        textDecoration: "none",
                                                        fontSize: ".8rem",
                                                        color: "green",
                                                    }}
                                                >
                                                    Forgot Password ?
                                                </Link>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Card >

        </div >
    )
}



export default Login;
