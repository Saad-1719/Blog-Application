import React from "react";

import { Link } from "react-router-dom";

const Blogs = [
	{
		title: "Should I Be The Sun Or The Moon",
		slug: "Should+I+Be+The+Sun+Or+The+Moon",
		thumbnail: "src/assets/ShouldIBe.jpg",
	},
	{
		title: "Say Thanks, Get Happy",
		slug: "Say+Thanks+Get+Happy",
		thumbnail: "src/assets/Thanks.jpg",
	},
	{
		title: "Connection With God",
		slug: "Connection+With+God",
		thumbnail: "src/assets/Connection.jpg",
	},
	{
		title: "Moments Before The End",
		slug: "Moments+Before+The+End",
		thumbnail: "src/assets/BeforeEnd.jpg",
	},
];

function BlogList() {
	return (
		<div className="blog-list-container">
			<h1>Saad Writes</h1>
			<h2>Blog List</h2>
			<div className="blog-grid">
				{Blogs.map((blog) => (
					<div key={blog.slug} className="blog-card">
						<Link to={`/blog/${blog.slug}`}>
							<img src={blog.thumbnail} alt={blog.title} />
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}

export default BlogList;
