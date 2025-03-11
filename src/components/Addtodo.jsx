import React, { useState } from "react";
import { Container, TextField, Button, Typography, Paper } from "@mui/material";
import axios from "axios";

const Addtodo = () => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const todoData = {
      task,
      date,
      time,
      description,
    };

    try {
      const response = await axios.post("http://localhost:8080/todo/add", todoData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 930e2744-c272-41ac-a104-0bb6c2feedfc`, // Your Token
        },
      });

      if (response.status === 200) {
        alert("To-Do Added Successfully!");
        setTask("");
        setDate("");
        setTime("");
        setDescription("");
      }
    } catch (error) {
      alert("Error adding To-Do. Please try again.");
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Paper elevation={3} style={{ padding: "30px", borderRadius: "12px" }}>
        <Typography variant="h5" align="center" color="primary" gutterBottom>
          Add a New To-Do
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Task Name"
            variant="outlined"
            fullWidth
            required
            value={task}
            onChange={(e) => setTask(e.target.value)}
            style={{ marginBottom: "15px" }}
          />
          <TextField
            label="Date"
            type="date"
            variant="outlined"
            fullWidth
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            style={{ marginBottom: "15px" }}
          />
          <TextField
            label="Time"
            type="time"
            variant="outlined"
            fullWidth
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
            InputLabelProps={{ shrink: true }}
            style={{ marginBottom: "15px" }}
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ marginBottom: "15px" }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add To-Do
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Addtodo;
