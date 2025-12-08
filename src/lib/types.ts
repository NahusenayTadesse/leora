export type Project = {
	id: string;
	name: string;
	description: string;
	status: "planning" | "in-progress" | "completed";
	team: "frontend" | "backend" | "fullstack" | "design";
	createdAt: Date;
};