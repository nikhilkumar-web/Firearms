import CoursePageContent from '@/components/services/CoursePageContent';

export const metadata = {
  title: "Youth Firearms Safety Courses | American Firearms Network",
  description: "Youth firearms safety courses by AFN. Age-appropriate training that teaches children and teens safe, responsible gun handling.",
};

const course = {
  "slug": "youth-firearms-safety-courses",
  "title": "Youth Firearms Safety Courses",
  "videoIds": [
    "ctpQE_j8vyg",
    "JdkoNyPqL5A",
    "mqybul_khzg",
    "3FJ-QV8-FFc"
  ],
  "overview": {
    "subtitle": "Youth Firearms Safety Courses | The American Firearms Network",
    "tagline": "Education is the Best Safety Lock. Empowering the Next Generation of Responsible Citizens.",
    "paragraphs": [
      "At The American Firearms Network (AFN), we believe that curiosity without education is a safety risk. For families who choose to have firearms in the home, the most effective way to prevent accidents is through early, age-appropriate education.",
      "Our <b>Youth Firearms Safety Courses</b> are designed to demystify firearms, remove the \"curiosity factor,\" and instill a lifelong respect for safety. We provide a non-political, safety-first environment where children and teenagers can learn the gravity of firearm handling under the guidance of certified professionals."
    ],
    "image": "https://american-firearms.s3-eu-central-2.ionoscloud.com/images/services/youth-firearms-safety-courses-overview.webp"
  },
  "whyTrain": {
    "heading": "Why Parents Trust The American Firearms Network",
    "subtitle": "We understand that as a parent, your child’s safety is your highest priority. We share that commitment.",
    "pillars": [
      {
        "title": "Patience-Based Instruction",
        "description": "Our instructors are specifically trained to work with children, using encouraging and calm communication."
      },
      {
        "title": "Small Class Sizes",
        "description": "We maintain a low student-to-instructor ratio (often 2:1 or 1:1 during live-fire) to ensure constant supervision."
      },
      {
        "title": "Controlled Environment",
        "description": "All youth courses are held in private or semi-private bays away from the \"noise\" of a standard public range."
      },
      {
        "title": "Family Participation",
        "description": "We encourage parents to sit in on the classroom portions so the safety language used at the range can be reinforced at home."
      }
    ]
  },
  "curriculum": {
    "heading": "Our \"Safety First\"<br class=\"hidden sm:inline\" /> Curriculum for Kids & Teens",
    "intro": "We offer tiered programming based on the age and maturity of the student. Our goal is to ensure every child knows exactly what to do if they encounter an unsecured firearm.",
    "sections": [
      {
        "title": "1. The \"Stop, Don't Touch\" Program (Ages 5–10)",
        "subtitle": "Designed for younger children, this curriculum focuses on the <b>NRA Eddie Eagle GunSafe®</b> principles. We use engaging, age-appropriate methods to teach the four vital steps:",
        "bullets": [
          "STOP!",
          "Don’t Touch.",
          "Run Away.",
          "Tell a Grown-up."
        ]
      },
      {
        "title": "2. Introduction to Firearm Responsibility (Ages 11–14)",
        "subtitle": "As children grow, their curiosity often turns into a desire to learn how things work. This course focuses on:",
        "bullets": [
          "<b>The 4 Universal Rules of Safety:</b> Applied in a way that relates to their daily lives.",
          "<b>Safe vs. Unsafe:</b> Identifying the difference between \"toy\" guns and real firearms.",
          "<b>Mechanical Understanding:</b> A strictly supervised look at how a firearm is cleared and made safe."
        ]
      },
      {
        "title": "3. Junior Marksmanship & Safety (Ages 15–17)",
        "subtitle": "For teenagers ready to take the next step, this course introduces the fundamentals of shooting in a highly disciplined environment.",
        "bullets": [
          "<b>Stance and Grip:</b> Proper physical foundations.",
          "<b>Supervised Live-Fire:</b> Utilizing low-recoil .22 LR platforms to build confidence without fear.",
          "<b>The Ethics of Ownership:</b> A deep dive into the responsibility that comes with being a shooter."
        ]
      }
    ],
    "image": "https://american-firearms.s3-eu-central-2.ionoscloud.com/images/gallery/gallery-target-evaluation.webp"
  }
};

export default function CoursePage() {
  return <CoursePageContent course={course} />;
}
