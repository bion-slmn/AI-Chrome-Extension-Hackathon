import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen text-center">
			<h1 className="text-4xl font-bold mb-4">Resume Wizard</h1>
			<div className="card mb-4">
				<button
					onClick={() => setCount((count) => count + 1)}
					className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
				>
					count is {count}
				</button>
			</div>
		</div>
	);
}

export default App;
