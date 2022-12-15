import {
  Box,
  CircularProgress,
  createMuiTheme,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { ThemeProvider } from "@mui/system";
import React from "react";
import Swal from "sweetalert2";
import "../../styles/initGame.css";
import { successMessage } from "../../utils/message";

const InitPlayGround = () => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: "IRANSans",
      fontSize: "12px",
    },
  });

  const shareLink = ({event}) =>{
    console.log(event);
    const link =  window.location.href;
    Swal.fire({
      title: 'بازی ساخته شد',
      text:"دکمه ' کپی '  را فشار دهید تا لینک بازی کپی شود برای ارسال به دوستانتان" ,
      showCancelButton: false,
      showConfirmButton:true,
      allowOutsideClick: false,
      confirmButtonText: 'کپی لینک',
      preConfirm: (txt) => {
       navigator.clipboard.writeText(link)
       successMessage('لینک بازی کپی شد' , 2000)
      }
    })
  }
  


  return (
    <>
      <div class="container">
        <div className="row loginDice">
          <span class="iconify" data-icon="el:group"></span>
        </div>
        {/* <div className="row login-title">
            <h2>M e n c h s</h2>
        </div> */}
        <div className="row login-description">
          <p>آماده سازی بازی , لطفا مشخصات بازیتان را اعمال کنید</p>
        </div>

        <form className="row flex-column  justify-content-center align-items-center" onSubmit={e=>e.preventDefault()}>
          <div
            className="row col-md-9 col-lg-5   flex-column "
            style={{ padding: "10px 0" }}
          >
            <div className="col-auto p-0" style={{ margin: "1em 0" }}>
              <p className="m-0 text-muted">تعداد بازیکن ها : </p>
            </div>

            <div className="col-12  ">
              <ThemeProvider theme={theme}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  dir="ltr"
                  className="justify-content-around"
                >
                  <FormControlLabel
                    value={2}
                    dir="ltr"
                    control={<Radio style={{ color: "#9d8664" }} />}
                    label="دو نفره"
                    sx={{
                      color: "#9d8664",
                      "&.Mui-checked": {
                        color: "#4e7af7",
                      },
                    }}
                  />
                  <FormControlLabel
                    value={3}
                    control={<Radio style={{ color: "#9d8664" }} />}
                    label="سه نفره"
                    dir="ltr"
                    sx={{
                      color: "#9d8664",
                      "&.Mui-checked": {
                        color: "#ff0bf7",
                      },
                    }}
                  />
                  <FormControlLabel
                    value={4}
                    control={<Radio style={{ color: "#9d8664" }} />}
                    label="چهار نفره"
                    dir="ltr"
                    sx={{
                      color: "#9d8664",
                      "&.Mui-checked": {
                        color: "#ff0bf7",
                      },
                    }}
                  />
                </RadioGroup>
              </ThemeProvider>
            </div>
          </div>

          <div
            className="row col-md-9 col-lg-5   flex-column "
            style={{ padding: "10px 0" }}
          >
            <div className="col-auto p-0" style={{ margin: "1em 0" }}>
              <p className="m-0 text-muted">رنگ مهره شما :</p>
            </div>

            <div className="col-12  ">
              <ThemeProvider theme={theme}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  dir="ltr"
                  className="justify-content-around"
                >
                  <FormControlLabel
                    value={"#ff1515"}
                    dir="ltr"
                    control={<Radio style={{ color: "#ff1515" }} />}
                    label="قرمز"
                    sx={{
                      color: "#9d8664",
                      "&.Mui-checked": {
                        color: "#4e7af7",
                      },
                    }}
                  />
                  <FormControlLabel
                    value={"#7dff07"}
                    control={<Radio style={{ color: "#7dff07" }} />}
                    label="سبز"
                    dir="ltr"
                    sx={{
                      color: "#9d8664",
                      "&.Mui-checked": {
                        color: "#ff0bf7",
                      },
                    }}
                  />
                  <FormControlLabel
                    value={"#ffa500"}
                    control={<Radio style={{ color: "#ffa500" }} />}
                    label="زرد"
                    dir="ltr"
                    sx={{
                      color: "#9d8664",
                      "&.Mui-checked": {
                        color: "#ff0bf7",
                      },
                    }}
                  />
                  <FormControlLabel
                    value={"#5297ff"}
                    control={<Radio style={{ color: "#5297ff" }} />}
                    label="آبی"
                    dir="ltr"
                    sx={{
                      color: "#9d8664",
                      "&.Mui-checked": {
                        color: "#ff0bf7",
                      },
                    }}
                  />
                </RadioGroup>
              </ThemeProvider>
            </div>
          </div>

          <div className="col-md-9 col-lg-5">
            <input
              class="login-input  form-control text-warning  p-3 bg-dark border border-warning"
              type="submit"
              value="ساختن بازی"
              onClick={e=>shareLink(e)}
            />
          </div>

          <Box sx={{ display: "flex" , alignItems:"center" , justifyContent:"center" , marginTop:"2em" }}>
            <CircularProgress />
          </Box>
        </form>
      </div>
    </>
  );
};

export default InitPlayGround;
