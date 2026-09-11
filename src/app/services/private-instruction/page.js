import CoursePageContent from '@/components/services/CoursePageContent';

export const metadata = {
  title: "Private Firearms Instruction | American Firearms Network",
  description: "One-on-one private firearms instruction with elite AFN instructors. Personalized coaching for beginners, CCW holders, and advanced shooters.",
};

const course = {
  "slug": "private-instruction",
  "title": "Private Instruction",
  "videoIds": [
    "ctpQE_j8vyg",
    "JdkoNyPqL5A",
    "mqybul_khzg",
    "3FJ-QV8-FFc"
  ],
  "overview": {
    "subtitle": "Private Firearms Instruction | The American Firearms Network",
    "tagline": "Elite One-on-One Coaching Tailored to Your Goals. Accelerated Mastery Starts Here.",
    "paragraphs": [
      "Group classes are excellent for foundations, but private instruction is where true mastery is forged. At The American Firearms Network (AFN), our Private Instruction program connects you with the nation’s top tactical shooters and certified instructors for a personalized training experience that evolves at your pace.",
      "Whether you are a high-profile individual seeking discreet training, a beginner who wants a low-pressure environment, or a competitive shooter looking to shave milliseconds off your draw, our private sessions are the fastest way to achieve your objectives."
    ],
    "image": "https://american-firearms.s3-eu-central-2.ionoscloud.com/images/reviews/caucasian-woman-observing-black-male-instructor.webp"
  },
  "whyTrain": {
    "heading": "How It Works",
    "subtitle": "",
    "pillars": [
      {
        "title": "Consultation",
        "description": "We discuss your current experience level and specific goals.",
        "icon": "crosshair"
      },
      {
        "title": "Instructor Match",
        "description": "We pair you with an AFN-certified specialist (e.g., a female instructor for women's safety, or a former LEO for tactical training).",
        "icon": "star"
      },
      {
        "title": "Range Session",
        "description": "You meet at a premier AFN-partner facility for high-intensity, focused coaching.",
        "icon": "star"
      },
      {
        "title": "After-Action Report",
        "description": "Receive a digital summary of your progress and a \"Homework\" drill plan to maintain your skills.",
        "icon": "crosshair"
      }
    ]
  },
  "curriculum": {
    "heading": "Personalized Training Modules",
    "intro": "You define the mission; we provide the expertise. Our private sessions commonly focus on:",
    "sections": [
      {
        "title": "1. The \"First-Time Owner\" Fast Track",
        "subtitle": "Go from \"unboxing\" to \"confident\" in a single session. We cover your specific firearm's controls, maintenance, and safe storage, followed by your first successful live-fire experience.",
        "bullets": []
      },
      {
        "title": "2. Precision Marksmanship & Recoil Management",
        "subtitle": "For the intermediate shooter, we diagnose the subtle habits—like recoil anticipation or improper trigger finger placement—that are holding you back from \"tight groups.\"",
        "bullets": []
      },
      {
        "title": "3. Advanced CCW & Everyday Carry (EDC)",
        "subtitle": "Work on the \"Real World\" skills of carrying a gun:",
        "bullets": [
          "Drawing from your specific holster and clothing.",
          "One-handed shooting and weak-hand transitions.",
          "Integrating movement and situational awareness."
        ]
      },
      {
        "title": "4. Diagnostic \"Tune-Ups\" for Competitors",
        "subtitle": "Using high-speed video analysis and shot timers, we identify inefficiencies in your transitions, reloads, and stage movement to help you climb the leaderboards.",
        "bullets": []
      }
    ],
    "image": "https://americanfirearmsnetwork.com/wp-content/uploads/2026/01/TheFirearmsLearningAnnex_img8-800h.webp"
  }
};

export default function CoursePage() {
  return <CoursePageContent course={course} />;
}
