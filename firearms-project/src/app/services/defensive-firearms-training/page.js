import CoursePageContent from '@/components/services/CoursePageContent';

export const metadata = {
  title: "Defensive Firearms Training | American Firearms Network",
  description: "Elite defensive firearms training by American Firearms Network focused on real-world self-defense, safety, and lawful decision-making.",
};

const course = {
  "slug": "defensive-firearms-training",
  "title": "Defensive Firearms Training",
  "videoIds": [
    "ctpQE_j8vyg",
    "JdkoNyPqL5A",
    "mqybul_khzg",
    "3FJ-QV8-FFc"
  ],
  "overview": {
    "subtitle": "Defensive Firearms Training | AFN",
    "tagline": "Master the Skills to Protect What Matters Most. Professional Tactical Instruction for the Modern Citizen.",
    "paragraphs": [
      "Master the Skills to Protect What Matters Most. Professional Tactical Instruction for the Modern Citizen.",
      "In a world where seconds count, the difference between a victim and a survivor is training. The American Firearms Network (AFN) provides elite-level defensive firearms training designed to bridge the gap between basic range shooting and real-world self-defense.",
      "Whether you are a new gun owner or an experienced shooter looking to sharpen your tactical edge, our curriculum is engineered to build the muscle memory, mindset, and marksmanship required to prevail in a high-stress encounter."
    ],
    "image": "https://american-firearms.s3-eu-central-2.ionoscloud.com/images/services/defensive-firearms-training-overview.webp"
  },
  "whyTrain": {
    "heading": "Why Train with The American Firearms Network?",
    "subtitle": "At AFN, we don’t just teach you how to shoot; we teach you how to fight with a firearm. Our defensive programs are built on four core pillars:",
    "pillars": [
      {
        "title": "Elite Certified Instructors",
        "description": "Our network consists of the nation’s top tactical trainers, including former military, law enforcement professionals, and competitive shooters. We bring real-world combat experience to every drill."
      },
      {
        "title": "Reality-Based Training Scenarios",
        "description": "Standing still and shooting at paper targets isn't enough. Our courses utilize modern training methodologies to simulate real-world stress, including movement, use of cover, and rapid decision-making."
      },
      {
        "title": "Safety-First Culture",
        "description": "Safety is the foundation of everything we do. We instill a rigorous safety mindset that ensures you are a responsible and competent firearm owner both on and off the range."
      },
      {
        "title": "Comprehensive Legal Education",
        "description": "Understanding how to shoot is only half the battle. We provide deep insights into the legalities of self-defense, \"Stand Your Ground\" laws, and the aftermath of a defensive encounter."
      }
    ]
  },
  "curriculum": {
    "heading": "Our Defensive Training Curriculum",
    "intro": "Our courses are structured to take you from the fundamentals to advanced tactical proficiency. Key components of the AFN Defensive Program include:",
    "items": [
      {
        "title": "Defensive Marksmanship",
        "desc": "Mastering recoil management, rapid sight acquisition, and combat-effective accuracy."
      },
      {
        "title": "Draw & Presentation",
        "desc": "Perfecting the draw from concealment or duty holsters under pressure."
      },
      {
        "title": "Tactical Movement",
        "desc": "Learning how to move safely with a firearm and effectively clear angles."
      },
      {
        "title": "Utilization of Cover & Concealment",
        "desc": "Understanding the difference between what hides you and what stops a bullet."
      },
      {
        "title": "Multiple Target Engagement",
        "desc": "Developing the situational awareness to identify and neutralize multiple threats."
      },
      {
        "title": "Shoot/No-Shoot Decision Making",
        "desc": "Interactive drills designed to test your judgment in split-second scenarios."
      }
    ],
    "image": "https://american-firearms.s3-eu-central-2.ionoscloud.com/images/about/outdoor-range-group.webp"
  }
};

export default function CoursePage() {
  return <CoursePageContent course={course} />;
}
