import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Example API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "baum" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
