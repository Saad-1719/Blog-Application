import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlogList from "./BlogList";
import BlogPost from "./BlogPost";
function App() {
	const router = createBrowserRouter([
		{ path: "/", element: <BlogList /> },
		{ path: "/blog/:slug", element: <BlogPost /> },
	]);
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
