import React, { useState } from "react";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import {
  Checkbox,
  createTheme,
  FormControlLabel,
  Radio,
  RadioGroup,
  ThemeProvider,
} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const SurveyPost = () => {
  const them = createTheme({
    typography: {
      fontFamily: "IRANSans",
    },
  });

  const [SingleSelect, setSingleSelect] = useState("female");

  const handleChange = (event) => {
    setSingleSelect(event.target.value);
  };

  return (
    <>
      <div className="animationTextPostCard survey-in-post-container">
        <h4 class="card-text animationTextPostCard mb-3 text-muted">
          <span class="iconify" data-icon="mdi:poll"></span> : چرا مارادونا فوت
          کرد
        </h4>

        <div className="d-flex flex-column text-muted">
          <ThemeProvider theme={them}>
            {/*  MULTY SELECT */}
            <FormControlLabel
              label="فوت شد"
              control={
                <Checkbox
                  sx={{
                    color: "#ffc10791",
                    "&.Mui-checked": {
                      color: "#ffc107e0",
                    },
                  }}
                  onChange={(e) => console.log("f")}
                />
              }
            />

            <FormControlLabel
              label="الکی"
              control={
                <Checkbox
                  sx={{
                    color: "#ffc10791",
                    "&.Mui-checked": {
                      color: "#ffc107e0",
                    },
                  }}
                  onChange={(e) => console.log("f")}
                />
              }
            />
            <FormControlLabel
              label="الکی"
              control={
                <Checkbox
                  sx={{
                    color: "#ffc10791",
                    "&.Mui-checked": {
                      color: "#ffc107e0",
                    },
                  }}
                  onChange={(e) => console.log("f")}
                />
              }
            />

            {/* SINGLE SELECT ================================== */}
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              SingleSelect={SingleSelect}
              onChange={handleChange}
            >
              <FormControlLabel
                value="female"
                control={
                    <Radio
                      sx={{
                        color: "#ffc10791",
                        "&.Mui-checked": {
                          color: "#ffc107e0",
                        },
                      }}
                      onChange={(e) => console.log("f")}
                    />
                  }
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={
                    <Radio
                      sx={{
                        color: "#ffc10791",
                        "&.Mui-checked": {
                          color: "#ffc107e0",
                        },
                      }}
                    />
                  }
                label="Male"
              />
            </RadioGroup>
            
          </ThemeProvider>
        </div>

        <div className="survey-in-post-BTNcontainer  mt-3">


            <div className="next-back-container">
                <button className="btn-next btn btn-outline-info"><ArrowForwardIosIcon/> </button>
                    <button className="btn btn-outline-info " style={{width: "89px"}}>ثبت</button>
                <button className="btn-back btn btn-outline-info"><ArrowBackIosNewIcon/></button>
            </div>
        </div>
      </div>
    </>
  );
};

export default SurveyPost;
