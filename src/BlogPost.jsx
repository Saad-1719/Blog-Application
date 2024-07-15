import React from "react";
import { useParams } from "react-router-dom";
const Blogs = [
	{
		title: "Should I Be The Sun Or The Moon",
		slug: "Should+I+Be+The+Sun+Or+The+Moon",
		content: `Should I be the Sun or the Moon? This is a question that has lingered in my mind for what feels like an eternity. But I've recently come to an answer that feels right to me. Nature, our closest companion, has always had a way of guiding us towards answers that are elusive to others. It's almost as if we are an extension of nature itself.\n\nOur connection with nature depends on how we perceive and relate to it. I've realized that abstract thinking plays a significant role in understanding nature and, by extension, ourselves. `,
	},
	{
		title: "Say Thanks, Get Happy",
		slug: "Say+Thanks+Get+Happy",
		content: `You know that awesome feeling when someone says "thanks" to you? It's like a burst of happiness, making you feel super accomplished.
        Let's talk about humans being social.\n\n It's like we're creatures that stick together, kinda like animals. We have some rules that stop us from going all wild. These rules are like the training wheels for becoming more human. We like to be in groups and connect with others, and that can be either good or not-so-good for our society.\n\n Now, think about our society. Different people have different jobs to make a place where we all can live. Since we're social, we have to deal with each other.`,
	},
	{
		title: "Connection With God",
		slug: "Connection+With+God",
		content: `Lemme share my view point.
        So recently, I came across two events back to back, the same theme but different ways to portray it. What I think, when we have a tough time, we seek a place to share ourselves, our feelings and emotions.
        And at those moment, we are in dire need of a confidant.So, we may not be ashamed in front of the world for being so weak in difficult situations.
        God, who loves 70 times more than a mother, gives that privilege to share our emotions with Him. But, we only avail it in our time of distress. Witness it, when we are broke, why our sujood and duas are so long?
        In those moments, when we stand in front of Him, we arespiritually connected with Him. As we begin to express ourselves, it feels as though a weight is lifted off our shoulders, incrementally easing our tensions with each word spoken. Simultaneously, tears well up in our eyes, a testament to the depth of our emotions.
        So, when you're feeling broken, offer your prayers, and after that go in sujood, have a heartfelt conversation with Allah.
        That situation is literally like 
         تو ہم کلام ہو جائے ، ہمارا کام ہو جائے
        Pour out your problems, knowing they'll remain between you and your confidant. Though instant solutions may not appear, you'll find solace in unburdening yourself and returning to your tasks with renewed resolve, trusting that guidance or clues will follow.`,
	},
	{
		title: "Moments Before The End",
		slug: "Moments+Before+The+End",
		content: `This morning, in my dream, I boarded a plane, and the flight took off. After some time, something happened, and the flight was going to crash. It was certain I would be dead. In those moments, in my subconscious mind, I was trying to figure out if I had offered my last prayer and what the last good deed I did was. If I were to die, how would I face Allah? My entire life flashed in front of my eyes in a few seconds.\n\nIn the nick of time, my phone started to vibrate. As the vibration persisted, it grew more intense, jolting me awake.`,
	},
];
function BlogPost() {
	const { slug } = useParams();
	const foundBlog = Blogs.find((Blog) => Blog.slug === slug);
	if (!foundBlog) {
		return <h2>Content Not Found</h2>;
	}
	return (
		<div className="blog-post-container">
			<h1>{foundBlog.title}</h1>
			<p>
				{foundBlog.content.split("\n").map((line, index) => (
					<span key={index}>
						{line}
						<br />
					</span>
				))}
			</p>
		</div>
	);
}

export default BlogPost;
