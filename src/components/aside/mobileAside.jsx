import { Avatar, Box, SwipeableDrawer } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const MobileAside = () => {
  const [openMobileMenue, setopenMobileMenue] = useState(false);

  const navigate = useNavigate();
  const [location, setlocation] = useState("");

  const pageLocation = useLocation();

  useEffect(() => {
    setlocation(pageLocation.pathname);
  }, [pageLocation]);

  const mene_hander = (path) => {
    navigate(path, { replace: true });
    setopenMobileMenue(false);
  };

  return (
    <>
      {!openMobileMenue && <Box className="d-flex justify-content-center">
        <div
          className="mobile-menue"
          onClick={(e) =>
            setTimeout(() => {
              setopenMobileMenue(true);
            }, 100)
          }
        >
          <button>
            <span class="iconify" data-icon="akar-icons:chevron-up"></span>
          </button>
        </div>
      </Box>}

      <SwipeableDrawer
        anchor="bottom"
        open={openMobileMenue}
        onClose={(e) => setopenMobileMenue(false)}
        sx={{ background: "transparent" }}
      >
        <Box className="d-flex justify-content-center">
          <div
            className="mobile-menue-close"
            onClick={(e) =>
              setTimeout(() => {
                setopenMobileMenue(false);
              }, 100)
            }
          >
            <button>
              <span class="iconify" data-icon="akar-icons:chevron-down"></span>
            </button>
          </div>
        </Box>

        <ul
          className="list-unstyled aside-menu  list-styled-menue-mobile"
          onClick={(e) => console.log(location)}
        >
          <li className={
              location === "/TopPost" ? "text-center active-mobile-menue" : "text-center"
            }
            onClick={(e) => mene_hander("/TopPost")}>
            <div>
              <span class="iconify" data-icon="clarity:star-solid"></span>
            </div>
            <p className="text-muted">برترین</p>
          </li>
          <li
            className={
              location === "/create-post" ? "text-center active-mobile-menue" : "text-center"
            }
            onClick={(e) => mene_hander("/create-post")}
          >
            <div>
              <span class="iconify" data-icon="akar-icons:circle-plus"></span>
            </div>
            <p className="text-muted">ساخت پست</p>
          </li>
          <li
            className={location === "/Explore" ? "text-center active-mobile-menue" : "text-center"}
            onClick={(e) => mene_hander("/Explore")}
          >
            <div>
              <span
                class="iconify"
                data-icon="fluent:search-square-24-regular"
              ></span>
            </div>
            <p className="text-muted">جدیدترین</p>
          </li>
          <li  className={
              location === "/SavedPost" ? "text-center active-mobile-menue" : "text-center"
            }
            onClick={(e) => mene_hander("/SavedPost")}>
            <div>
              <span class="iconify" data-icon="bi:bookmark-fill"></span>
            </div>
            <p className="text-muted">ذخیره شده</p>
          </li>
          <li className="text-center ">
            <div className="d-flex justify-content-center">
              <Avatar sx={{ backgroundColor: "#d7a202ad" }} />
            </div>
            <p className="text-muted">پروفایل</p>
          </li>
          <li className="text-center">
            <div>
              <span
                class="iconify"
                data-icon="ant-design:setting-filled"
              ></span>
            </div>
            <p className="text-muted">تنظیمات</p>
          </li>
        </ul>
      </SwipeableDrawer>
    </>
  );
};

export default MobileAside;
