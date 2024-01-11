import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export type FormData = {
  "x-position": number;
  "y-position": number;
  width: number;
  height: number;
};

interface InputModalProps {
  open: boolean;
  initialValues: FormData;
  handleClose: () => void;
  handleSubmit: (formData: FormData) => void;
}

const InputModal: React.FC<InputModalProps> = ({
  open,
  initialValues,
  handleClose,
  handleSubmit: handleFormSubmit,
}) => {
  const [formData, setFormData] = useState<FormData>({
    "x-position": initialValues["x-position"],
    "y-position": initialValues["y-position"],
    width: initialValues.width,
    height: initialValues.height,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleFormSubmit(formData);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: 1,
          p: 4,
        }}
      >
        <Typography
          id="modal-modal-title"
          variant="h6"
          textAlign={"center"}
          marginBottom={3}
        >
          Update values
        </Typography>
        <Grid display="flex" flexDirection="row">
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container>
              <Grid xs={5} display={"flex"} flexDirection={"column"}>
                <Typography>Position</Typography>
                <Grid item>
                  <TextField
                    label="X Position"
                    name="x-position"
                    type="number"
                    margin="normal"
                    required
                    value={formData["x-position"]}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    label="Y Position"
                    name="y-position"
                    type="number"
                    margin="normal"
                    required
                    value={formData["y-position"]}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Grid xs={2}></Grid>
              <Grid xs={5} display={"flex"} flexDirection={"column"}>
                <Typography>Screen Size (px)</Typography>
                <Grid item>
                  <TextField
                    label="Width"
                    name="width"
                    type="number"
                    margin="normal"
                    required
                    value={formData.width}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    label="Height"
                    name="height"
                    type="number"
                    margin="normal"
                    required
                    value={formData.height}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"flex-end"}
              mt={2}
            >
              <Button
                onClick={handleClose}
                variant="outlined"
                type="button"
                disableElevation
                color="error"
                style={{ marginRight: "1rem" }}
              >
                Cancel
              </Button>
              <Button
                variant="outlined"
                type="submit"
                disableElevation
                color="success"
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Modal>
  );
};

export default InputModal;
