import React, { useEffect, useState } from "react";
import { Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, CircularProgress, Alert } from "@mui/material";
import axios from "axios";

const ViewAllList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:8080/todo/all", {
          headers: {
            Authorization: `Bearer 930e2744-c272-41ac-a104-0bb6c2feedfc`,
          },
        });
        setTasks(response.data);
      } catch (error) {
        setError("Failed to fetch tasks. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  return (
    <Container maxWidth="md" style={{ marginTop: "50px" }}>
      <Paper elevation={3} style={{ padding: "20px", borderRadius: "12px" }}>
        <Typography variant="h5" align="center" color="primary" gutterBottom>
          View All Tasks
        </Typography>

        {loading ? (
          <CircularProgress style={{ display: "block", margin: "20px auto" }} />
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : tasks.length === 0 ? (
          <Typography align="center" variant="body1">
            No tasks available.
          </Typography>
        ) : (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><b>Task</b></TableCell>
                  <TableCell><b>Date</b></TableCell>
                  <TableCell><b>Time</b></TableCell>
                  <TableCell><b>Description</b></TableCell>
                  <TableCell><b>User</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tasks.map((task) => (
                  <TableRow key={task.id}>
                    <TableCell>{task.task}</TableCell>
                    <TableCell>{task.date}</TableCell>
                    <TableCell>{task.time}</TableCell>
                    <TableCell>{task.description}</TableCell>
                    <TableCell>{task.user.fullName} ({task.user.email})</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Paper>
    </Container>
  );
};

export default ViewAllList;
