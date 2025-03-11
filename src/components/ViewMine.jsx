import React, { useEffect, useState } from "react";
import { Container, Typography, CircularProgress, Paper, List, ListItem, ListItemText } from "@mui/material";

const ViewMine = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      const token = sessionStorage.getItem("token"); // Get token from session storage
      if (!token) {
        setError("User not authenticated. Please login.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("http://localhost:8080/todo/mine", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Send token in the request header
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch tasks.");
        }

        const data = await response.json();
        setTasks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, mt: 5, borderRadius: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center", mb: 3 }}>
          My To-Do List
        </Typography>

        {loading && <CircularProgress sx={{ display: "block", margin: "auto" }} />}
        {error && <Typography color="error">{error}</Typography>}

        {!loading && !error && tasks.length === 0 && (
          <Typography>No tasks found. Start by adding one!</Typography>
        )}

        <List>
          {tasks.map((task) => (
            <ListItem key={task.id} divider>
              <ListItemText
                primary={task.task}
                secondary={`Date: ${task.date} | Time: ${task.time} | Description: ${task.description}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default ViewMine;
