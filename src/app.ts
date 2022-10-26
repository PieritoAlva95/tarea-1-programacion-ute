import "dotenv/config";
import express from "express";
import cors from "cors";
import contactRouter from "../src/features/contacts/infrastructure/routes/contact_routes";

const PORT = process.env.PORT || 3001;
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use("/api", contactRouter);

app.listen(PORT, () => {
  console.log(`Server running on http:localhost:${PORT}`);
});
