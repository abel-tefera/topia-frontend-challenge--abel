import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import "./App.css";
import { UserList } from "./components/UserList";
import { useState } from "react";
import InputModal, { FormData } from "./components/InputModal";
import listUsersInView, { UsersInViewType } from "./utils/listUsersInView";
import { USER_LIST } from "./utils/constants";

const App = () => {
  const [xPosition, setXPosition] = useState(800);
  const [yPosition, setYPosition] = useState(400);
  const [screenWidth, setScreenWidth] = useState(800);
  const [screenHeight, setScreenHeight] = useState(400);

  const initalUsersInView = listUsersInView(
    USER_LIST,
    xPosition,
    yPosition,
    screenWidth,
    screenHeight
  );

  const [usersInView, setUsersInView] =
    useState<UsersInViewType>(initalUsersInView);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const handleFormSubmit = (formData: FormData) => {
    const { "x-position": xPos, "y-position": yPos, width, height } = formData;

    const updatedUsersInView = listUsersInView(
      USER_LIST,
      xPos,
      yPos,
      width,
      height
    );

    setUsersInView(updatedUsersInView);

    setXPosition(xPos);
    setYPosition(yPos);
    setScreenWidth(width);
    setScreenHeight(height);

    handleModalClose();
  };

  return (
    <>
      <Box
        padding={3}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Link href={"https://topia.io/"} target="_blank">
          <img alt={"Topia"} src="Topia_Logo.png" />
        </Link>
        <Typography variant="h4" gutterBottom>
          Frontend Engineering Challenge
        </Typography>
        <IconButton href={"https://abeltb.xyz/"} target="_blank">
          <Avatar
            alt={"Abel"}
            src="https://abeltb.xyz/static/media/profile_professional.a5697b03995ad44bb133.jpg"
          />
        </IconButton>
      </Box>
      <Grid display="flex" flexDirection="row" container spacing={2}>
        <Grid item display="flex" flexDirection="column" xs>
          <Grid
            display={"flex"}
            flexDirection={"row"}
            height={"fit-content"}
            marginY={5}
          >
            <Grid display={"flex"} flexDirection={"column"} margin={"auto"}>
              <Grid item paddingY={1}>
                <Typography variant="h6" gutterBottom>
                  X Position
                </Typography>
                <Typography variant="body2">{xPosition}</Typography>
              </Grid>
              <Grid item paddingY={1}>
                <Typography variant="h6" gutterBottom>
                  Y Position
                </Typography>
                <Typography variant="body2">{yPosition}</Typography>
              </Grid>
            </Grid>
            <Grid display={"flex"} flexDirection={"column"} margin={"auto"}>
              <Grid item paddingY={1}>
                <Typography variant="h6" gutterBottom>
                  Screen Width
                </Typography>
                <Typography variant="body2">{screenWidth}px</Typography>
              </Grid>
              <Grid item paddingY={1}>
                <Typography variant="h6" gutterBottom>
                  Screen Height
                </Typography>
                <Typography variant="body2">{screenHeight}px</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Button
            onClick={handleModalOpen}
            variant="contained"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            Create User List
          </Button>
        </Grid>

        <Grid item display="flex" flexDirection="row" xs>
          <UserList usersInView={usersInView} />
        </Grid>
        <InputModal
          open={isModalOpen}
          initialValues={{
            "x-position": xPosition,
            "y-position": yPosition,
            width: screenWidth,
            height: screenHeight,
          }}
          handleClose={handleModalClose}
          handleSubmit={handleFormSubmit}
        />
      </Grid>
    </>
  );
};

export default App;
