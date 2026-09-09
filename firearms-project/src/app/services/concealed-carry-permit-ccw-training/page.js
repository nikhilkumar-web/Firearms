import CoursePageContent from '@/components/services/CoursePageContent';
import { courses } from '@/data/courses';

const course = courses.find((c) => c.slug === 'concealed-carry-permit-ccw-training');

export const metadata = {
  title: `Concealed Carry Permit (CCW) Training | American Firearms Network`,
  description: course?.overview?.tagline || course?.title,
};

export default function CoursePage() {
  return <CoursePageContent course={course} />;
}
