import React from "react";
import { Avatar, Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link } from "react-router-dom";

const AddProjectLink = () => {
  return (
    <>
      <Box>
        <Avatar sx={{ height: "250px", width: "250px", margin: "auto" }}>
          <Link
            to="/add-project"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            <Box
              display="flex"
              flexDirection="column"
              sx={{ fontSize: "1rem" }}
            >
              <AddCircleIcon sx={{ margin: "auto", fontSize: "3rem" }} />
              Add Project
            </Box>
          </Link>
        </Avatar>
      </Box>
    </>
  );
};

export default AddProjectLink;
