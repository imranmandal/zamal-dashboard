import React from "react";
import RecentProjects from "../components/HomeComponent/RecentProjects";
import AddProjectLink from "../components/AddProjectComponent/AddProjectLink";
import Layout from "../components/Layout";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <>
      <Layout>
        <Grid container spacing={0} gap={5}>
          <Grid item lg={4} md={12} mb={3}>
            <AddProjectLink />
          </Grid>
          <Grid item lg={6} md={12} mb={3}>
            <RecentProjects />
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default Home;
