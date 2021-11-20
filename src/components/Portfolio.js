import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/mern.jpg";
import project2 from "../images/analysis.jpg";
import project3 from "../images/trading.jpg";
import project4 from "../images/social.jpg";
import project5 from "../images/inovation.jpg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Application Developer",
    description: `E2E application development using latest Javascript Libraries.
    The Development includes Frontend development , Backend api creation , Database Management & Automation Testing n Deployment`,
    image: project1,
  },
  {
    name: "Application Analyser",
    description: `Application Analysis using latest Analysing tools.
    The Analysis includes analysis of various application elements and events. Also various design changes suggestions based on the analysis data`,
    image: project2,
  },
  {
    name: "Option Stock Trading",
    description: `Option stock trading in multple domains using latest trading tools
    The trading includes Buying and Selling of stock options in various commodities. Data gathering , Analysis and Indications from various timeline events. `,
    image: project3,
  },
  {
    name: "Social Media Analyser",
    description: `Social media analysis of various social media platforms
    The Analysis includes trend idetifications and its usage in creating marketing strategy for domain categorisation and selling strategies. `,
    image: project4,
  },
  {
    name: "Ideator",
    description: `Ideation of various ideas in multiple domains
    The formation , analysis and implementation of various ideas in multiple domains. The effort estimation of project building and marketing is also included in this.`,
    image: project5,
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Know More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
