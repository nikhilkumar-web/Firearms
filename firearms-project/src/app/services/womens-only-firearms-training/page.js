import CoursePageContent from '@/components/services/CoursePageContent';

export const metadata = {
  title: "Women’s Only Firearms Training | American Firearms Network",
  description: "Women-only firearms training by AFN. Build confidence, safety, and self-defense skills in a supportive, female-led setting.",
};

const course = {
  "slug": "womens-only-firearms-training",
  "title": "Women’s Only Firearms Training",
  "videoIds": [
    "ctpQE_j8vyg",
    "JdkoNyPqL5A",
    "mqybul_khzg",
    "3FJ-QV8-FFc"
  ],
  "overview": {
    "subtitle": "Women’s Only Firearms Training | The American Firearms Network",
    "tagline": "Empowerment Through Education. Confidence Through Proficiency.",
    "paragraphs": [
      "At The American Firearms Network (AFN), we recognize that the fastest-growing demographic of firearm owners is women. We also understand that many women prefer a training environment that is supportive, ego-free, and tailored to their specific needs.",
      "Our <b>Women’s Only Firearms Training</b> program is designed by women, for women. Whether you are interested in home defense, personal protection, or recreational shooting, our courses provide a comfortable space to ask questions, build skills, and join a community of like-minded, empowered women."
    ],
    "image": "https://american-firearms.s3-eu-central-2.ionoscloud.com/images/gallery/gallery-pistol-fundamentals.webp"
  },
  "whyTrain": {
    "heading": "Why Choose Women-Only Training?",
    "subtitle": "Many women find traditional co-ed ranges intimidating or overly focused on \"tactical\" jargon. Our program shifts the focus to:",
    "pillars": [
      {
        "title": "A Supportive Environment",
        "description": "Learn alongside other women in a low-pressure, high-encouragement setting."
      },
      {
        "title": "Specialized Instruction",
        "description": "Our female-led instructional teams understand the unique challenges women face, from holster fit on a female frame to managing recoil with smaller hands."
      },
      {
        "title": "Comprehensive Safety",
        "description": "We prioritize mechanical confidence so you never feel \"afraid\" of your own firearm."
      },
      {
        "title": "Practical Self-Defense",
        "description": "We focus on real-world scenarios that women are likely to encounter, emphasizing situational awareness and threat avoidance."
      }
    ]
  },
  "curriculum": {
    "heading": "Our Women-Focused Curriculum",
    "intro": "Our tiered courses take you from your first time holding a gun to advanced defensive proficiency.",
    "sections": [
      {
        "title": "1. Women's Handgun Fundamentals",
        "subtitle": "Perfect for absolute beginners. We cover:",
        "bullets": [
          "The 4 Universal Rules of Gun Safety.",
          "The anatomy of semi-automatics and revolvers.",
          "How to load, unload, and clear a firearm safely.",
          "The \"7 Fundamentals\" of a perfect shot."
        ]
      },
      {
        "title": "2. Concealed Carry for Women (CCW)",
        "subtitle": "Carrying a firearm as a woman presents unique challenges. This course dives into:",
        "bullets": [
          "<b>On-Body Carry:</b> Exploring appendix, hip, and corset holsters designed for female clothing.",
          "<b>Off-Body Carry:</b> The pros, cons, and safety requirements of \"purse carry.\"",
          "<b>The Legalities of Self-Defense:</b> Understanding when you are legally justified to use force."
        ]
      },
      {
        "title": "3. Defensive Shooting & Situational Awareness",
        "subtitle": "Move beyond the target and learn how to protect yourself in the real world:",
        "bullets": [
          "Identifying pre-attack indicators in parking lots or public spaces.",
          "Effective \"boundary setting\" and verbal commands.",
          "Drawing from a concealed holster under stress."
        ]
      }
    ],
    "image": "https://american-firearms.s3-eu-central-2.ionoscloud.com/images/gallery/gallery-target-evaluation.webp"
  }
};

export default function CoursePage() {
  return <CoursePageContent course={course} />;
}
