import {
  Box,
  Stack,
  useTheme,
} from "@mui/material";
import React, { useContext } from "react";
import Header from "./Header";
import Messages from "./messages";
import Footer_New from "./Footer(new)";

const Communication = ({setshowCommunication}) => {
  const theme = useTheme();

  return (
    <>
    <Stack
      height={"100%"}
      maxHeight={"100vh"}
      // width={"100%"}
      justifyContent={"space-between"}
  
    >
      <Header setshowCommunication={setshowCommunication}/>

      <Box sx={{ width: "100%", flexFlow: "8px", height:"100%" , overflowY:"scroll",backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background.paper,}}>
        <Messages Menu={true}/>
      </Box>


      <Footer_New />
    </Stack>
    </>
    
  );
};

export default Communication;
