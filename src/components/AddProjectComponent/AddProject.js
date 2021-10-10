import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import {
  AvatarGroup,
  Avatar,
  Button,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { Box } from "@mui/system";
import StaticDatePicker from "../DatePicker";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import axios from "axios";
import SnackBarAlert from "../SnackBarAlert";

const AddProject = () => {
  const classes = useStyles();
  const [imgSrc, setImgSrc] = useState("");
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleUpload = (e) => {
    const { files } = e.target;
    if (!files[0]) return;

    const url = URL.createObjectURL(files[0]);
    const uniquePrefix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const file = new File(files, `${uniquePrefix}-${files[0].name}`);

    setImgSrc(url);
    setImages((prevValue) => [...prevValue, { fileData: file, url }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("createdOn", date);
    formData.append("description", description);

    images.map((image) => formData.append("siteImages", image.fileData));

    axios
      .post("http://localhost:5000/add-project", formData)
      .then(() => {
        setMessage("Project added successfully");
        setMessageType("success");
        setLoading(false);

        setTitle("");
        setDescription("");
        setImgSrc("");
        setImages([]);
        setDate(new Date());
      })
      .catch(() => {
        setMessage("Something went wrong!");
        setMessageType("error");
        setLoading(false);
      });
  };

  return (
    <>
      <Paper elevation={4} sx={{ height: "100%", overflow: "hidden" }}>
        <SnackBarAlert msg={message} type={messageType} />
        <label htmlFor="project" className={classes.imgPreviewContainer}>
          <Avatar
            src={imgSrc}
            alt="project-portrait"
            variant="square"
            className={classes.imgPreview}
          >
            <HomeWorkIcon />
          </Avatar>
        </label>

        <section className={classes.ImgContainer}>
          <div className={classes.ImgContainerInner}>
            {images.length > 0 ? (
              <AvatarGroup max={5}>
                {images.map((image) => (
                  <Avatar key={image.url} src={image.url}></Avatar>
                ))}
              </AvatarGroup>
            ) : (
              <Typography variant="body1" textAlign="center" pt={1}>
                Select Image
              </Typography>
            )}
          </div>
        </section>

        <input
          type="file"
          name="project"
          id="project"
          hidden
          onChange={handleUpload}
        />

        <Box mt={2} p={2}>
          <form onSubmit={handleSubmit} autoComplete="off">
            <TextField
              name="title"
              label="Title"
              variant="standard"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <StaticDatePicker
              name="Date Picker"
              label="Created On"
              variant="standard"
              value={date}
              onChange={(newValue) => setDate(newValue)}
            />
            <TextField
              id="description"
              label="Description"
              multiline
              fullWidth
              rows={3}
              placeholder="Description"
              sx={{ margin: "20px auto" }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <Button variant="contained" fullWidth type="submit">
              {loading ? <CircularProgress /> : <>Save</>}
            </Button>
          </form>
        </Box>
      </Paper>
    </>
  );
};

export default AddProject;

const useStyles = makeStyles((theme) => ({
  imgPreviewContainer: {
    "& .MuiAvatar-root": {
      zIndex: 0,
      "&::after": {
        content: "''",
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3))",
      },
    },
  },
  imgPreview: {
    width: "100%",
    height: "200px",
    margin: "auto",
  },

  ImgContainer: {
    display: "flex",
    marginTop: "10px",
  },
  ImgContainerInner: {
    margin: "auto",
    "& .MuiAvatar-root": {
      boxShadow: "0 0 20px #ddd",
    },
  },
}));
