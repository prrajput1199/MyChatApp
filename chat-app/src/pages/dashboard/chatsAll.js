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

import { collection, doc, onSnapshot, getDocs, query } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { AuthContext } from "../../contexts/AuthContext";
import { onAuthStateChanged } from "firebase/auth";

const ChatsAll = ({ setChats }) => {
  const [allUser, setAlluser] = useState([]);
  const { currentUser } = useContext(AuthContext);

  const theme = useTheme();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const Users = [];

        try {
          // Create a query to potentially filter users (optional)
          const q = query(collection(db, "users")); // Unfiltered query

          // Get all user documents
          const querySnapshot = await getDocs(q);

          querySnapshot.forEach((doc) => {
            Users.push({ ...doc.data() });
          });

          setAlluser(Users);
        } catch (error) {
          console.error("Error fetching users:", error);
          // Handle errors appropriately (e.g., display error message)
        }
      }
    });

    return unsubscribe;
  }, [currentUser]);

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
          allUser.map((el) => {
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
