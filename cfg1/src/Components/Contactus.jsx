import React from 'react'
import { Grid, Card, TextField, Button } from '@mui/material';
import './accounts.css';
import './card.scss';
import { useEffect } from "react";
import phone from '../Images/phone.png';
import location from '../Images/location.png';
import mail from '../Images/mail.png';
import linkedin from '../Images/linkedin.png';
import twitter from '../Images/twitter.png';
import insta from '../Images/instagram.png';
import github from '../Images/github.png';
import { useFormik } from 'formik';
import * as yup from 'yup';
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
const Contactus = () => {
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, []);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
      alert(JSON.stringify(values.name, null, 2));
    },
  });
  return (
    <div>
      <Card style={{ boxShadow: "none", border: "none" }}>
        <Grid container spacing={2}>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <Grid container>
              <Grid item xs={12}>
                <h1>Have some Questions ?</h1>
                <h3>We would ❤️ to help !</h3>
                <h4>We like to create things with fun, open-minded people. Feel free to say us Hello 🖐️</h4>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <Card sx={{
                      backgroundColor: "#f2cf07",
                      backgroundImage: "linear-gradient(315deg, #f2cf07 0%, #55d284 74%)"
                    }}>
                      <Grid container>
                        <Grid item xs={12} style={{ margin: "2vh" }}>
                          <img src={location} style={{ width: "12vh", height: "12vh" }} />
                        </Grid>
                      </Grid>
                    </Card>
                  </Grid>
                  <Grid item xs={4}>
                    <Card sx={{
                      backgroundColor: "#f2cf07",
                      backgroundImage: "linear-gradient(315deg, #f2cf07 0%, #55d284 74%)"
                    }}>
                      <Grid container>
                        <Grid item xs={12} style={{ margin: "2vh" }}>
                          <img src={phone} style={{ width: "12vh", height: "12vh" }} />
                        </Grid>
                      </Grid>
                    </Card>
                  </Grid>
                  <Grid item xs={4}>
                    <Card sx={{
                      backgroundColor: "#f2cf07",
                      backgroundImage: "linear-gradient(315deg, #f2cf07 0%, #55d284 74%)"
                    }}>
                      <Grid container>
                        <Grid item xs={12} style={{ margin: "2vh" }}>
                          <img src={mail} style={{ width: "12vh", height: "12vh" }} />
                        </Grid>
                      </Grid>
                    </Card>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container xs={12} spacing={2} style={{ marginBottom: "3vh" }}>
                    <Grid item xs={12} md={6} sm={6} style={{ paddingTop: "5vh" }}>
                      <form onSubmit={formik.handleSubmit} autoComplete="off" style={{ width: "100%" }}>
                        <Grid container spacing={3}>
                          <Grid item xs={12} sx={{ textAlign: "left", fontSize: "1.6rem", fontWeight: "750" }}>
                            Contact Us
                          </Grid>
                          <Grid item xs={12} sx={{ textAlign: "left", fontSize: "1.2rem" }}>
                            Your Name
                          </Grid>
                          <Grid item xs={12} sm={11} md={11}>
                            <TextField
                              fullWidth
                              id="name"
                              name="name"
                              label="Name"
                              value={formik.values.name}
                              onChange={formik.handleChange}
                              error={formik.touched.name && Boolean(formik.errors.name)}
                              helperText={formik.touched.name && formik.errors.name}
                            />
                          </Grid>
                          <Grid item xs={12} sx={{ textAlign: "left", fontSize: "1.2rem" }}>
                            Email-id
                          </Grid>
                          <Grid item xs={12} md={11} sm={11}>
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
                          <Grid item xs={12} sx={{ textAlign: "left", fontSize: "1.2rem" }}>
                            Message
                          </Grid>
                          <Grid item xs={12} sm={11} md={11}>
                            <TextField
                              fullWidth
                              id="message"
                              name="message"
                              label="Message"
                              multiline
                              maxRows={4}
                              value={formik.values.message}
                              onChange={formik.handleChange}
                              error={formik.touched.message && Boolean(formik.errors.message)}
                              helperText={formik.touched.message && formik.errors.message}
                            />
                          </Grid>
                          <Grid item xs={12} md={11} sm={11}>
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
                    </Grid>
                    <Grid item xs={12} md={6} sm={6} style={{ paddingTop: "5vh" }}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sx={{ textAlign: "left", fontSize: "1.6rem", fontWeight: "750" }}>
                          Locate us at !!
                        </Grid>
                        <Grid item xs={12}>
                          <iframe
                            scrolling="no"
                            marginheight="0"
                            marginwidth="0"
                            title="DJ Sanghavi College"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Dwarkadas%20J.Sanghavi%20+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            height="270"
                            frameborder="0"
                            width="100%"
                          >
                            <a href="https://www.mapsdirections.info/en/measure-map-radius/">
                              Map radius measure
                            </a>
                          </iframe>
                        </Grid>
                        <Grid item xs={12} sx={{ textAlign: "left", fontSize: "1.5rem", fontWeight: "750" }}>
                          Explore & Learn with us
                        </Grid>
                        <Grid item xs={12}>
                          <Grid container spacing={2}>
                            <Grid item xs={6} md={4} sm={3}>
                              <Button variant="filled" fullWidth sx={{
                                border: "3px solid", borderImageSource: 'linear-gradient(315deg, #f2cf07 0%, #55d284 74%)',
                                borderImageSlice: "1", fontSize: "0.8rem", fontWeight: "550",
                                '&:hover': {
                                  backgroundColor: "#f2cf07",
                                  backgroundImage: "linear-gradient(315deg, #f2cf07 0%, #55d284 74%)", fontSize: "0.8rem", fontWeight: "550"
                                }
                              }}
                              //backgroundColor: '#fc5296',backgroundImage: 'linear-gradient(315deg, #fc5296 0%, #f67062 74%)' , fontSize:"0.8rem" , fontWeight:"550"}}
                              >Yoga</Button>
                            </Grid>
                            <Grid item xs={6} md={4} sm={3}>
                              <Button variant="filled" fullWidth sx={{
                                border: "3px solid", borderImageSource: 'linear-gradient(315deg, #f2cf07 0%, #55d284 74%)',
                                borderImageSlice: "1", fontSize: "0.8rem", fontWeight: "550",
                                '&:hover': {
                                  backgroundColor: "#f2cf07",
                                  backgroundImage: "linear-gradient(315deg, #f2cf07 0%, #55d284 74%)", fontSize: "0.8rem", fontWeight: "550"
                                }
                              }}
                              >Cricket</Button>
                            </Grid>
                            <Grid item xs={6} md={4} sm={3}>
                              <Button variant="filled" fullWidth sx={{
                                border: "3px solid", borderImageSource: 'linear-gradient(315deg, #f2cf07 0%, #55d284 74%)',
                                borderImageSlice: "1", fontSize: "0.8rem", fontWeight: "550",
                                '&:hover': {
                                  backgroundColor: "#f2cf07",
                                  backgroundImage: "linear-gradient(315deg, #f2cf07 0%, #55d284 74%)", fontSize: "0.8rem", fontWeight: "550"
                                }
                              }}
                              >BasketBall</Button>
                            </Grid>
                            <Grid item xs={6} md={4} sm={3}>
                              <Button variant="filled" fullWidth sx={{
                                border: "3px solid", borderImageSource: 'linear-gradient(315deg, #f2cf07 0%, #55d284 74%)',
                                borderImageSlice: "1", fontSize: "0.8rem", fontWeight: "550",
                                '&:hover': {
                                  backgroundColor: "#f2cf07",
                                  backgroundImage: "linear-gradient(315deg, #f2cf07 0%, #55d284 74%)", fontSize: "0.8rem", fontWeight: "550"
                                }
                              }}
                              >Fitness Routines</Button>
                            </Grid>
                            <Grid item xs={6} md={4} sm={3}>
                              <Button variant="filled" fullWidth sx={{
                                border: "3px solid", borderImageSource: 'linear-gradient(315deg, #f2cf07 0%, #55d284 74%)',
                                borderImageSlice: "1", fontSize: "0.8rem", fontWeight: "550", '&:hover': {
                                  backgroundColor: "#f2cf07",
                                  backgroundImage: "linear-gradient(315deg, #f2cf07 0%, #55d284 74%)", fontSize: "0.8rem", fontWeight: "550"
                                }
                              }}
                              >Workouts</Button>
                            </Grid>
                            <Grid item xs={6} md={4} sm={3}>
                              <Button variant="filled" fullWidth sx={{
                                border: "3px solid", borderImageSource: 'linear-gradient(315deg, #f2cf07 0%, #55d284 74%)',
                                borderImageSlice: "1", fontSize: "0.8rem", fontWeight: "550", '&:hover': {
                                  backgroundColor: "#f2cf07",
                                  backgroundImage: "linear-gradient(315deg, #f2cf07 0%, #55d284 74%)", fontSize: "0.8rem", fontWeight: "550"
                                }
                              }}
                              >Fitness</Button>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12}>
                          <Grid container spacing={2}>
                            <Grid item xs={12} md={4} sx={{ textAlign: "left", fontSize: "1.4rem", fontWeight: "750", marginTop: "2vh" }}>
                              Connect with us
                            </Grid>
                            <Grid item xs={12} md={8}>
                              <Grid container>
                                <Grid item xs={3}>
                                  <img src={linkedin} alt="linkedin" style={{ width: "10vh", height: "10vh" }} />
                                </Grid>
                                <Grid item xs={3}>
                                  <img src={github} alt="github" style={{ width: "10vh", height: "10vh" }} />
                                </Grid>
                                <Grid item xs={3}>
                                  <img src={insta} alt="instagram" style={{ width: "10vh", height: "10vh" }} />
                                </Grid>
                                <Grid item xs={3}>
                                  <img src={twitter} alt="twitter" style={{ width: "10vh", height: "10vh" }} />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </Card>
      {/*<Card>
    <div className={classes.mainContainer} style={{overflow:"hidden"}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} sm={6} style={{margin:"1vh"}}>
        <Card style={{boxShadow:"none"}}>
              <div class="box box-2">
                <div class="first">
                   
                </div>
               <div class="second">
                  <p>lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
                   <p><a href="#">Find out more</a></p>
               </div>
               </div>
        </Card>
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
        <Card sx={{boxShadow:"none", padding:"2px"}}>
          <div class="card-normal">
          <div class="card-header">
          <img src="https://images6.alphacoders.com/312/thumb-1920-312773.jpg" alt="city" />
          </div>
          <div class="card-body">
          <span class="tag tag-pink">Design</span>
          <h4>
            10 Rules of Dashboard Design
          </h4>
          <p>
            Dashboard Design Guidelines
          </p>
          <div class="user">
          <img src="https://studyinbaltics.ee/wp-content/uploads/2020/03/3799Ffxy.jpg" alt="user" />
          <div class="user-info">
          <h5>Carrie Brewer</h5>
          <small>1w ago</small>
          </div>
          </div>
          </div>
          </div>
        </Card>
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <Card sx={{boxShadow:"none"}}>
          <div class="card">
		      <figure class="card__thumb">
			    <img src="https://source.unsplash.com/75S9fpDJVdo/300x510" alt="Picture by Kyle Cottrell" class="card__image" />
			    <figcaption class="card__caption">
				  <h2 class="card__title">NASA Has Found Hundreds Of Potential New Planets</h2>
				  <p class="card__snippet">NASA released a list of 219 new “planet candidates” discovered by the Kepler space telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.</p>
				  <a href="" class="card__button">Read more</a>
			    </figcaption>
		      </figure>
	        </div>
          </Card>
        </Grid>
      </Grid>
    </div>
</Card>*/}
    </div>
  )
}

export default Contactus