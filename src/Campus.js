import React from 'react';
import { Grid } from 'theme-ui';
import './Profile.css'

export default function Campus() {
  
  return (

    <div>
       <br></br>
       <Grid gap={4} columns={[1, "1fr 1fr", "1fr 1fr", "3fr 7fr"]}>
        <div>
          hi
        </div>
        <div>
        I run all things content for HODP, an interdisciplinary data journalism publication. This usually involves working across all our teams and with all our members to manage, edit, and publish content; create data visualizations; teach bootcamps; and launch new initiatives.
        </div>
       </Grid>
       <br></br>
       <br></br>
       <Grid gap={4} columns={[1, "1fr 1fr", "1fr 1fr", "3fr 7fr"]}>
        <div>
          hi
        </div>
        <div>
        I lead the resources project, creating and collecting career, academic, and advocacy resources for students to navigate CS at Harvard and beyond.         </div>
       </Grid>
       <br></br>
       <br></br>
       <Grid gap={4} columns={[1, "1fr 1fr", "1fr 1fr", "3fr 7fr"]}>
        <div>
          hi
        </div>
        <div>
        I consulted for non-profits through HCCG for two years. I worked on everything from imputing data for an international service organization to analyzing the role of the private sector in child development.        </div>
       </Grid>
    </div>
  );
}