import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ProjectCard from "../CardsComponent/Card";
import axios from "axios";

const RecentProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/recent-projects")
      .then((res) => setProjects(res.data))
      .catch((res) => console.log(res));
  }, []);

  return (
    <>
      <Typography variant="h5" component="h2" mb={2}>
        Recent Projects
      </Typography>
      <Grid container spacing={2}>
        {projects.length > 0 &&
          projects.map((project) => (
            <Grid key={project.title} item sm={6} xs={12}>
              <ProjectCard
                title={project.title}
                description={project.description}
                createdOn={project.createdOn}
                imgUrl={
                  project.siteImageUrls[0]
                  // ? createURL(project.siteImages[0]) : ""
                }
              />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default RecentProjects;
