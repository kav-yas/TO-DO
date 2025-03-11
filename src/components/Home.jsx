import React from "react";
import { Container, Typography, Button, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #ffffff, #89CFF0, #D8BFD8)", // White, Blue, Lilac gradient
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={10}
          sx={{
            padding: 5,
            textAlign: "center",
            borderRadius: "12px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
          }}
        >
          <Typography variant="h3" gutterBottom fontWeight="bold" color="#3A3B3C">
            Welcome to Your To-Do App
          </Typography>
          <Typography variant="h6" color="gray" sx={{ mb: 3 }}>
            Organize your tasks efficiently and stay productive!
          </Typography>

          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/signup")}
                sx={{ padding: "10px 20px", fontSize: "16px", fontWeight: "bold" }}
              >
                Sign Up
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => navigate("/login")}
                sx={{ padding: "10px 20px", fontSize: "16px", fontWeight: "bold" }}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default Home;
