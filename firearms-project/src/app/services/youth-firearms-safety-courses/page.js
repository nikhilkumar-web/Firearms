import CoursePageContent from '@/components/services/CoursePageContent';
import { courses } from '@/data/courses';

const course = courses.find((c) => c.slug === 'youth-firearms-safety-courses');

export const metadata = {
  title: `Youth Firearms Safety Courses | American Firearms Network`,
  description: course?.overview?.tagline || course?.title,
};

export default function CoursePage() {
  return <CoursePageContent course={course} />;
}
