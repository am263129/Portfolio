import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
	import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
	return (
		<div className="">
			<SEO
				data={{
					title: "Mufasa",
					description:
						"A passionate Full Stack Web Developer and Mobile App Developer.",
					image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
					url: "https://developer-portfolio-1hanzla100.vercel.app",
					keywords: [
						"Mufasa",
						"Mufasa",
						"@King-Mufasa",
						"King-Mufasa",
						"Portfolio",
						"Mufasa Portfolio ",
						"Mufasa Portfolio",
						"web developer",
						"full stack",
						"full stack web developer",
						"mobile app developer",
						"android developer",
						"django",
						"flask",
						"django rest framework",
						"nodejs ",
						"expressjs",
						"reactjs ",
						"contextapi",
						"redux",
						"flutter",
					],
				}}
			/>
			<Navigation />
			<Greetings />
			<div className="bg-black">
				<Skills />
			</div>
			<div className="bg-dark">
				<Proficiency />
				<Education />
			</div>
			<div className="bg-black">
				<Experience />
				<Feedbacks />
				<Projects />
			</div>
			<GithubProfileCard prof={githubProfileData} />
		</div>
	);
}

Home.prototype = {
	githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
	const githubProfileData = await fetch(
		`https://api.github.com/users/King-Mufasa`
	).then((res) => res.json());

	return {
		props: { githubProfileData },
	};
}
