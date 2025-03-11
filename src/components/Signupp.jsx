import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  CircularProgress,
} from "@mui/material";

const Signupp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    phone: "",
    gender: "",
    address: "",
    city: "",
    country: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("http://localhost:8080/auth/signup", formData);
      setSuccess("Signup Successful! You can now log in.");
      setFormData({
        email: "",
        password: "",
        fullName: "",
        phone: "",
        gender: "",
        address: "",
        city: "",
        country: "",
      });
    } catch (err) {
      setError(err.response?.data?.message || "Signup Failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: 30, marginTop: 40 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Create an Account
        </Typography>

        {error && <Typography color="error">{error}</Typography>}
        {success && <Typography color="primary">{success}</Typography>}

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label="Full Name" name="fullName" fullWidth required value={formData.fullName} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Email" name="email" type="email" fullWidth required value={formData.email} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Password" name="password" type="password" fullWidth required value={formData.password} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Phone Number" name="phone" fullWidth required value={formData.phone} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Gender" name="gender" fullWidth required value={formData.gender} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Address" name="address" fullWidth required value={formData.address} onChange={handleChange} />
            </Grid>
            <Grid item xs={6}>
              <TextField label="City" name="city" fullWidth required value={formData.city} onChange={handleChange} />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Country" name="country" fullWidth required value={formData.country} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
                {loading ? <CircularProgress size={24} /> : "Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Signupp;
