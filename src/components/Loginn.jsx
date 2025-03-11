import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, Typography, Box, CircularProgress, Paper } from "@mui/material";

const Loginn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if token exists in session storage
    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      navigate("/viewMine"); // Redirect if already logged in
    }
  }, [navigate]);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Invalid credentials");
      }

      // Store token in sessionStorage
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("user", JSON.stringify(data.user)); // Store user details if needed

      alert("Login Successful!");
      navigate("/viewMine"); // Redirect to dashboard
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, mt: 10, textAlign: "center", borderRadius: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, color: "black" }}>
          To-Do App Login
        </Typography>

        {error && <Typography color="error">{error}</Typography>}

        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            fullWidth
          />

          <Button type="submit" variant="contained" color="primary" disabled={loading} fullWidth>
            {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Login"}
          </Button>
        </Box>

        <Typography variant="body2" sx={{ mt: 2 }}>
          Don't have an account? <a href="/signup" style={{ color: "#1976d2", textDecoration: "none" }}>Sign Up</a>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Loginn;
