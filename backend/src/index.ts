import express, { NextFunction } from "express";
import { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (__: Request, res: Response) => {
	res.send("The API is up ☀️");
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	console.error("Unhandled error:", err.message);
	res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => {
	console.log(`The server is running at http://localhost:${PORT}`);
});
