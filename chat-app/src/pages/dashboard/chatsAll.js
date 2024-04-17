import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useTheme } from "@emotion/react";

import { collection, doc, onSnapshot, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../../contexts/AuthContext";

const ChatsAll = ({ setChats }) => {
  const [allUser, setAlluser] = useState([]);
  const { currentUser } = useContext(AuthContext);

  const theme = useTheme();

  useEffect(() => {
    const getalluser = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const userdata=[];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        // userdata.push({ ...doc.data() });
        allUser.push({ ...doc.data()});
      });
    };
    return () => {
      getalluser();
    };
  }, []);

  return (
    <div>
      <Typography variant="caption" color={"#676767"}>
        User List
      </Typography>

      <Stack sx={{
        height:"100vh",
      }}>
        {console.log("I am inside ,alluser=>",allUser)}
        {allUser &&
          allUser?.map((el) => {
            //chatsection paste here
            return (
              <Box
                sx={{
                  backgroundColor:
                    theme.palette.mode === "Light"
                      ? "white"
                      : theme.palette.background.paper,
                  mt: "16px",
                  height: "57px",
                  borderRadius: "20px",
                  cursor: "pointer",
                }}
                key={el.uid}
              >
                <Stack
                  direction={"row"}
                  gap={3}
                  alignItems={"center"}
                  justifyContent={"center"}
                  marginTop={"6px"}
                  width={"100%"}
                  height={"100%"}
                >
                  <Typography variant="subtitle2">{el.displayName}</Typography>
                </Stack>
              </Box>
            );
          })}
      </Stack>
    </div>
  );
};

export default ChatsAll;
