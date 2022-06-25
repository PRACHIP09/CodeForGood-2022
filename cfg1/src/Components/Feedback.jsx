import { Card, Grid, TextField, Button, Typography, Accordion, AccordionSummary, AccordionDetails, Avatar } from '@mui/material'
import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useEffect } from "react";
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { textAlign } from '@mui/system';
import { deepOrange, deepPurple } from '@mui/material/colors';
import feedback from '../Images/Feedbackimage.png';
const validationSchema = yup.object({
  email: yup
    .string('Enter your Email')
    .email('Enter a valid email')
    .required('Email is required'),
  message: yup
    .string('Enter your Message')
    .required('Message is required'),
  name: yup
    .string('Enter your Name')
    .required('Name is required'),


});

const Feedback = () => {
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, []);
  const formik = useFormik({
    initialValues: {
      rate: '',
      email: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
      alert(JSON.stringify(values.rate, null, 2));
    },
  });

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);


  return (
    <div >
      <Card>
        <Grid container spacing={3}>
          <Grid item sm={6} md={6} xs={12}>
            <Grid container>
              <Grid item xs={12} style={{ margin: "2vh" }}>
                <form onSubmit={formik.handleSubmit} autoComplete="off" style={{ width: "100%" }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sx={{ textAlign: "left", fontSize: "1.6rem", fontWeight: "750" }}>
                      Feedback Form
                    </Grid>
                    <Grid item xs={12} sx={{ textAlign: "left", fontSize: "1.2rem" }}>
                      Email - Id
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item md={2} sm={2} xs={12} sx={{ textAlign: "left", fontSize: "1.2rem" }}>
                          Ratings
                        </Grid>
                        <Grid item xs={12} md={10} sm={10} sx={{ textAlign: "left" }}>
                          <Rating
                            name="rate"
                            id="rate"
                            size="large"
                            value={value}
                            precision={1}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                              setHover(newHover);
                            }}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sx={{ textAlign: "left", fontSize: "1.2rem" }}>
                      How helpful was the website ?
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="message"
                        name="message"
                        label="Review"
                        multiline
                        maxRows={4}
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        error={formik.touched.message && Boolean(formik.errors.message)}
                        helperText={formik.touched.message && formik.errors.message}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained" fullWidth type="submit"
                        sx={{
                          backgroundColor: "#f2cf07",
                          backgroundImage: "linear-gradient(315deg, #f2cf07 0%, #55d284 74%)", fontSize: "1.2rem", fontWeight: "600"
                        }}>
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
                <Grid container spacing={2}>
                  <Grid item xs={12} sx={{ textAlign: "left", fontSize: "1.6rem", fontWeight: "750", marginTop: "3vh" }}>
                    Our valuable Feedback by Users :)
                  </Grid>
                  <Grid item xs={12} md={6} sm={6} sx={{ textAlign: "left" }}>
                    <Card sx={{
                      border: "3px solid", borderImageSource: 'linear-gradient(315deg, #f2cf07 0%, #55d284 74%)',
                      borderImageSlice: "1", fontSize: "1rem", fontWeight: "550", boxShadow: "none", padding: "2px",
                      '&:hover': {
                        backgroundColor: "#f2cf07",
                        backgroundImage: "linear-gradient(315deg, #f2cf07 0%, #55d284 74%)", fontSize: "1rem", fontWeight: "550"
                      }
                    }}>
                      <div class="card-normal">
                        <div class="card-body" >
                          <div class="user">
                            <img src={feedback} alt="user" style={{height:"200px"}}/>
                            <div class="user-info">
                              <h5>Carrie Brewer</h5>
                              <Rating name="read-only" value={5} readOnly />
                            </div>
                          </div>
                          <h4>
                            This site definitely  appeals to the average person because the layoout is so  simple  but very  VERY  effective.
                          </h4>
                        </div>
                      </div>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6} sm={6} sx={{ textAlign: "left" }}>
                    <Card sx={{
                      border: "3px solid", borderImageSource: 'linear-gradient(315deg, #f2cf07 0%, #55d284 74%)',
                      borderImageSlice: "1", fontSize: "1rem", fontWeight: "550", boxShadow: "none", padding: "2px",
                      '&:hover': {
                        backgroundColor: "#f2cf07",
                        backgroundImage: "linear-gradient(315deg, #f2cf07 0%, #55d284 74%)", fontSize: "1rem", fontWeight: "550"
                      }
                    }}>
                      <div class="card-normal">
                        <div class="card-body">
                          <div class="user">
                            <img src={feedback} alt="user" style={{height:"200px"}}/>
                            <div class="user-info">
                              <h5>Carrie Brewer</h5>
                              <Rating name="read-only" value={3} readOnly />
                            </div>
                          </div>
                          <h4>
                            This site definitely  appeals to the average person because the layoout is so  simple  but very  VERY  effective.
                          </h4>
                        </div>
                      </div>
                    </Card>
                  </Grid>  
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={6} md={6} xs={12}>
            <Grid item xs={12} sx={{ textAlign: "left", fontSize: "1.6rem", fontWeight: "750", margin: "2vh" }}>
              Question and Answer
            </Grid>
            <Grid item xs={12}>
              <img src={feedback} style={{ width: "95%" ,borderRadius:"10px" , marginRight:"5vh"}} />
            </Grid>
            <Grid item xs={12} >
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ marginBottom: "2vh" }} sx={{ position: "unset", boxShadow: "none" }} >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  sx={{ boxShadow: "none" }}
                >
                  <Typography sx={{ textAlign: "left", fontSize: "1.2rem", fontWeight: "650", color: "#55d284" }}>
                    Why choose our website ?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ textAlign: "left", fontSize: "1.2rem" }}>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                    Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{ marginBottom: "2vh" }} sx={{ position: "unset", boxShadow: "none" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography sx={{ textAlign: "left", fontSize: "1.2rem", fontWeight: "650", color: "#6ad273" }}>What is the Motto of our website ?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ textAlign: "left", fontSize: "1.2rem" }}>
                    Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                    varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                    laoreet.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{ marginBottom: "2vh" }} sx={{ position: "unset", boxShadow: "none" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography sx={{ textAlign: "left", fontSize: "1.2rem", fontWeight: "650", color: "#9cd14c" }}>
                    How secured is our website ?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ textAlign: "left", fontSize: "1.2rem" }}>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style={{ marginBottom: "2vh" }} sx={{ position: "unset", boxShadow: "none" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography sx={{ textAlign: "left", fontSize: "1.2rem", fontWeight: "650", color: "#f2cf07" }}>What are our Customer Care Policies ?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ textAlign: "left", fontSize: "1.2rem" }}>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "left", margin: "2vh", fontWeight: "550", fontSize: "1.15rem" }}>
              You have got some Q's and we have got tons of A's. <br /><Link to="/contactus" style={{ fontWeight: "700", textDecoration: "none", color: "#9cd14c" }}>Ask us</Link> about our website, mission, vision, motive...anything we can help with !😃
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </div>
  )
}

export default Feedback