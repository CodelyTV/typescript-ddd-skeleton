import { Course } from '../domain/Course';
import { CourseRepository } from '../domain/CourseRepository';

export class CourseCreator {
	private readonly repository: CourseRepository;

	constructor(repository: CourseRepository) {
		this.repository = repository;
	}

	async run(id: string, name: string, duration: string): Promise<void> {
		const course = new Course({ id, name, duration });

		return this.repository.save(course);
	}
}
