import courseData from "./courseData";

interface Lesson {
	title: string;
	slug: string;
	duration: string;
	lessonPathL?: string;
}

interface Chapter {
	title: string;
	slug: string;
	lessons: Lesson[];
}

interface Course {
	title: string;
	chapters: Chapter[];
}

export const useCourse = (): Course => {
	return {
		...courseData,
		chapters: courseData.chapters.map((chapter: Chapter) => ({
			...chapter,
			lessons: chapter.lessons.map((lesson: Lesson) => ({
				...lesson,
				path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
			})),
		})),
	};
};
