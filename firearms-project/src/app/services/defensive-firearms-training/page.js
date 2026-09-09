import CoursePageContent from '@/components/services/CoursePageContent';
import { courses } from '@/data/courses';

const course = courses.find((c) => c.slug === 'defensive-firearms-training');

export const metadata = {
  title: `Defensive Firearms Training | American Firearms Network`,
  description: course?.overview?.tagline || course?.title,
};

export default function CoursePage() {
  return <CoursePageContent course={course} />;
}
