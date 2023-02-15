import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { CourseRepository } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseRepository';

export class CourseRepositoryMock implements CourseRepository {
	private readonly mockSave = jest.fn();

	async save(course: Course): Promise<void> {
		await this.mockSave(course);
	}

	assertLastSavedCourseIs(expected: Course): void {
		const mock = this.mockSave.mock;
		const lastSavedCourse = (mock.calls[mock.calls.length - 1] as Course[])[0];
		expect(lastSavedCourse).toBeInstanceOf(Course);
		expect(lastSavedCourse.id).toEqual(expected.id);
	}
}
