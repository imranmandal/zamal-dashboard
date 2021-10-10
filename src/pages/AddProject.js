import { Grid } from "@mui/material";
import React from "react";
import AddProjectCard from "../components/AddProjectComponent/AddProject";
import Layout from "../components/Layout";

const AddProject = () => {
  return (
    <>
      <Layout>
        <Grid container>
          <Grid item xl={5} lg={5} md={7} sm={8} xs={12}>
            <AddProjectCard />
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default AddProject;
