import courseData from "./courseData";

type Lesson = {
	title: string;
	slug: string;
	duration: string;
	path?: string;
	number: number;
};

type Chapter = {
	title: string;
	slug: string;
	lessons: Lesson[];
};

type Course = {
	title: string;
	chapters: Chapter[];
};

export const useCourse = (): Course => {
	const chapters: Chapter[] = courseData.chapters.map((chapter) => {
		const lessons: Lesson[] = chapter.lessons.map((lesson) => ({
			...lesson,
			path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
		}));
		return {
			...chapter,
			lessons,
		};
	});
	return {
		...courseData,
		chapters,
	}
};
