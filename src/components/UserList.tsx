import React from "react";
import { UsersInViewType } from "../utils/listUsersInView";
import { Box, Container, Typography } from "@mui/material";
import VisibleUsersTable from "./VisibleUsersTable";

interface UserListProps {
  usersInView: UsersInViewType;
}

export const UserList: React.FC<UserListProps> = ({ usersInView }) => {
  // I've avoided setting usersInView here to avoid sharing state between components and keeping things simple
  // App.js is the wrapper of the Modal and UserList components.
  // The common states and form submission logic are placed in App.js
  // The UsersInView object is passed down here via props

  return (
    <Container maxWidth="md">
      {usersInView.length === 0 ? (
        <Box my={4}>
          <Typography component="p" gutterBottom>
            There are currently no users within view.
          </Typography>
        </Box>
      ) : (
        <>
          <Box my={4}>
            <Typography variant="h5" component="h1" gutterBottom>
              The following Users are currently visible based on position and
              screen size.
            </Typography>
          </Box>
          {/* Prop drilling here - although not best practice */}
          {/* I've kept it instead of using Context API - to keep things simple */}
          <VisibleUsersTable usersList={usersInView} />
        </>
      )}
    </Container>
  );
};
