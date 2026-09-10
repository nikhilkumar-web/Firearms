import CoursePageContent from '@/components/services/CoursePageContent';

export const metadata = {
  title: "Basic Firearms Safety Courses | American Firearms Network",
  description: "Beginner-friendly firearms safety courses by American Firearms Network. Learn safe handling, gun operation, and core shooting fundamentals.",
};

const course = {
  "slug": "basic-firearms-safety-courses",
  "title": "Basic Firearms Safety Courses",
  "videoIds": [
    "ctpQE_j8vyg",
    "JdkoNyPqL5A",
    "mqybul_khzg",
    "3FJ-QV8-FFc"
  ],
  "overview": {
    "subtitle": "Basic Firearms Safety Courses | The American Firearms Network",
    "tagline": "The Foundation of Responsible Ownership. Start Your Journey with Confidence.",
    "paragraphs": [
      "Whether you have just purchased your first handgun or are considering your first trip to the range, the Basic Firearms Safety Course at The American Firearms Network (AFN) is your essential first step. Firearms ownership is a fundamental right, but proficiency is a learned skill.",
      "Our beginner-friendly courses are designed to strip away the intimidation factor, replacing it with a solid foundation of mechanical knowledge, safety protocols, and marksmanship fundamentals."
    ],
    "image": "https://american-firearms.s3-eu-central-2.ionoscloud.com/images/services/basic-firearms-safety-courses-overview.webp"
  },
  "whyTrain": {
    "heading": "Why Start with a Basic Safety Course?",
    "subtitle": "At AFN, our beginner-friendly courses are built on four core pillars:",
    "pillars": [
      {
        "title": "Eliminate Fear",
        "description": "Learn how firearms actually function in a controlled, supportive environment."
      },
      {
        "title": "Prevent Accidents",
        "description": "Master the \"4 Universal Rules of Gun Safety\" until they become second nature."
      },
      {
        "title": "Build Correct Habits",
        "description": "Avoid the common mistakes that \"self-taught\" shooters often struggle to unlearn later."
      },
      {
        "title": "Expert Guidance",
        "description": "Our AFN-certified instructors specialize in teaching beginners, ensuring a patient and non-intimidating experience."
      }
    ]
  },
  "curriculum": {
    "heading": "What You Will Learn",
    "intro": "The AFN Basic Safety Course is a comprehensive 4-hour program (available in-person or as a hybrid) that covers:",
    "sections": [
      {
        "title": "1. The 4 Universal Rules of Safety",
        "subtitle": "The bedrock of all firearm handling. We teach you how to maintain situational awareness and ensure a safe environment at home and on the range.",
        "bullets": []
      },
      {
        "title": "2. Handgun Anatomy & Operation",
        "subtitle": "Understand the difference between <b>revolvers</b> and <b>semi-automatics</b>. We break down:",
        "bullets": [
          "Action types and triggers.",
          "Magazine loading and unloading.",
          "How to safely clear a \"stoppage\" or malfunction."
        ]
      },
      {
        "title": "3. The Fundamentals of Marksmanship",
        "subtitle": "Before you fire a shot, we master the \"Dry Fire\" fundamentals:",
        "bullets": [
          "<b>Stance:</b> Building a stable platform.",
          "<b>Grip:</b> Controlling recoil before it happens.",
          "<b>Sight Alignment:</b> Learning how to focus your eyes for accuracy.",
          "<b>Trigger Control:</b> The secret to a smooth, consistent shot."
        ]
      },
      {
        "title": "4. Cleaning, Maintenance & Storage",
        "subtitle": "A safe gun is a clean gun. We demonstrate how to field-strip your firearm, clean it properly, and—most importantly—how to store it securely to prevent unauthorized access by children or intruders.",
        "bullets": []
      }
    ],
    "image": "https://american-firearms.s3-eu-central-2.ionoscloud.com/images/services/basic-firearms-safety-courses-curriculum.png"
  }
};

export default function CoursePage() {
  return <CoursePageContent course={course} />;
}
