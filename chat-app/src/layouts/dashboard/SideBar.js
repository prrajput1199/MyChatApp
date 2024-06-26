import React, { useContext } from "react";
import { useTheme } from "@emotion/react";
import {
  Avatar,
  Box,
  Divider,
  FormLabel,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Nav_Buttons, Profile_Menu } from "../../data";
import { ArrowsClockwise, Gear, SignOut } from "phosphor-react";
import { faker } from "@faker-js/faker";
import useSettings from "../../hooks/useSettings";
import MaterialUISwitch from "../../components/MaterialUISwitch";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from "../../contexts/AuthContext";
import "./sidebar.css";
import { Loadable } from "../../routes";
import { ChatContext } from "../../contexts/ChatContext";
const SideBar = () => {
  const theme = useTheme();
  const [selectedButton, setSelectedButton] = useState();
  const { onToggleMode } = useSettings();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [avatarIndex, setAvatarIndex] = useState();
  const { currentUser } = useContext(AuthContext);
  const {data}=useContext(ChatContext);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  // const handleReload = (event) => {
  //   <Loadable>{window.location.reload(false)}</Loadable>;
  // };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getPath = (index) => {
    switch (index) {
      case 0:
        return "/app";

      case 1:
        return "/profile";

      case 2:
        return "/settings";

      default:
        return "/app";
    }
  };

  return (
    <>
      <Box
        p={2}
        sx={{
          backgroundColor:
            theme.palette.mode === "light"
              ? "white"
              : theme.palette.background.paper,
          boxShadow: "0px 1px 2px rgba(0,0,0,0.25)",
          height: {
            xs: "70px",
            sm: "70px",
            md: "100%",
          },
          zIndex: {
            xs: 1,
            sm:1
          },
          position: {
            xs: "fixed",
            md: "unset",
          },
          bottom: {
            xs: "0",
            sm: "0"
          },
          width: {
            xs: "100%",
            md: "100px",
          },
        }}
      >
        <Stack
          sx={{
            width: "100%",
            height: "100%",
            direction: {
              xs: "row",
              sm: "column",
            },
            justifyContent: {
              xs: "center",
              sm: "space-between",
            },
            alignItems: {
              xs: "center",
            },
          }}
        >
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: "64px",
              width: "64px",
              borderRadius: 1.5,
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            <img
              src="chatapplogo.jpg"
              alt=""
              style={{
                width: "85%",
                height: "85%",
                margin: "5px",
                borderRadius: "8px",
              }}
            />
          </Box>
          <Stack
            spacing={5}
            sx={{
              height: "100%",
              direction: {
                sm: "column",
              },
            }}
          >
            {/* {" "}
            <div className="reload">
              {
                <>
                  <Stack direction={"column"} alignItems={"center"} spacing={3}>
                    <ArrowsClockwise size={24} onClick={handleReload} />
                    <Typography variant="caption" color={"#676767"}>
                      Reload for updating data
                    </Typography>
                  </Stack>
                </>
              }
            </div> */}
            <div className="sidebarMenu">
              {Nav_Buttons.map((Element) => {
                return (
                  <>
                    <div className="menuItem" key={Element.index}>
                      {Element.index === selectedButton ? (
                        <Box
                          sx={{
                            backgroundColor:
                              theme.palette.mode === "light"
                                ? "black"
                                : theme.palette.primary.main,
                            color: "white",
                            borderRadius: 1,
                          }}
                          
                        >
                          <IconButton
                            key={Element.index}
                            sx={{ color: "white", width: "max-content" }}
                          >
                            {Element.icon}
                          </IconButton>
                        </Box>
                      ) : (
                        <IconButton
                          sx={{
                            color:
                              theme.palette.mode === "light"
                                ? "black"
                                : "white",
                          }}
                          onClick={() => {
                            setSelectedButton(Element.index);
                            navigate(getPath(Element.index));
                          }}
                        >
                          {Element.icon}
                        </IconButton>
                      )}
                    </div>
                  </>
                );
              })}
            </div>
          </Stack>

          <Stack
            direction={"column"}
            alignItems={"center"}
            spacing={"20px"}
            marginTop={"50px"}
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            <MaterialUISwitch
              {...FormLabel}
              defaultChecked
              onChange={() => {
                onToggleMode();
              }}
            />
            {/* {console.log("currentUser=>",currentUser)} */}
            {/* <Avatar
              src={currentUser.uid == data.user.uid && data.user}
              sx={{ marginBottom: "30px" }}
              id="basic-buttton"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Stack direction={"column"} spacing={1}>
                <MenuItem>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    width={100}
                    justifyContent={"space-between"}
                    onClick={() => {
                      signOut(auth);
                    }}
                  >
                    <span>Sign Out</span>
                    <SignOut />
                  </Stack>
                </MenuItem>
              </Stack>
            </Menu> */}
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default SideBar;
