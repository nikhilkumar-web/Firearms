import CoursePageContent from '@/components/services/CoursePageContent';

export const metadata = {
  title: "Tactical Firearms Training | American Firearms Network",
  description: "Advanced tactical firearms training by AFN. Learn movement, CQB, cover usage, and combat mindset for real-world threats.",
};

const course = {
  "slug": "tactical-training",
  "title": "Tactical Training",
  "videoIds": [
    "ctpQE_j8vyg",
    "JdkoNyPqL5A",
    "mqybul_khzg",
    "3FJ-QV8-FFc"
  ],
  "overview": {
    "subtitle": "Tactical Firearms Training | The American Firearms Network",
    "tagline": "Master the Tactical Edge. High-Intensity Training for Real-World Conflict.",
    "paragraphs": [
      "Static range practice is the foundation, but tactical proficiency is the survival standard. The American Firearms Network (AFN) offers advanced Tactical Firearms Training designed for those who refuse to be a victim. Our curriculum moves beyond marksmanship, focusing on the high-speed decision-making, movement, and technical skills required to prevail in dynamic, high-threat environments.",
      "Whether you are a civilian looking to protect your home, a CCW holder wanting to level up, or a security professional, our tactical courses provide the bridge between shooting and fighting."
    ],
    "image": "https://american-firearms.s3-eu-central-2.ionoscloud.com/images/gallery/gallery-tactical-carbine.png"
  },
  "whyTrain": {
    "heading": "Why Train With The American Firearms Network?",
    "subtitle": "While many states have moved toward \"Constitutional Carry,\" holding a formal Concealed Carry Permit remains the best practice for serious shooters.",
    "pillars": [
      {
        "title": "Combat-Experienced Instructors",
        "description": "Our trainers come from elite backgrounds in Special Operations, Law Enforcement SWAT, and Executive Protection."
      },
      {
        "title": "Modern Equipment Standards",
        "description": "We train you with the gear you actually carry—optics (Red Dots), weapon lights, and everyday holsters."
      },
      {
        "title": "Force-on-Force Training",
        "description": "Where available, we utilize non-lethal marking rounds (Simunitions) to provide the most realistic \"opponent-based\" training possible."
      }
    ]
  },
  "curriculum": {
    "heading": "Our Tactical Training Pillars",
    "intro": "At AFN, we don't teach \"range tricks.\" We teach combat-proven techniques optimized for civilian and professional application.",
    "sections": [
      {
        "title": "1. Dynamic Movement & Fluidity",
        "subtitle": "In a fight, a stationary target is a vulnerable target.",
        "bullets": [
          "<b>Fighting on the Move:</b> Learn to maintain accurate fire while advancing, retreating, and traversing laterally.",
          "<b>Positional Shooting:</b> Master unconventional shooting positions, including kneeling, prone, and supine, to utilize the terrain around you."
        ]
      },
      {
        "title": "2. Close Quarters Battle (CQB) Fundamentals",
        "subtitle": "Defending a home or navigating an urban environment requires specialized geometry.",
        "bullets": [
          "<b>Room Clearing:</b> Learn the \"Fatal Funnel\" and how to safely clear angles (pieing the corner).",
          "<b>Retention Shooting:</b> Techniques for engaging threats at extreme close range (0–3 feet) while maintaining control of your firearm."
        ]
      },
      {
        "title": "3. Working From Cover & Concealment",
        "subtitle": "Understand the difference between what hides you and what stops a bullet.",
        "bullets": [
          "<b>Barricade Theory:</b> How to maximize the use of walls, vehicles, and furniture for protection.",
          "<b>Slicing the Pie:</b> Tactical geometry to engage threats while minimizing your exposure."
        ]
      },
      {
        "title": "4. Tactical Communication & Stress Management",
        "subtitle": "We utilize \"Stress Inoculation\" to help you maintain cognitive function when your heart rate is elevated.",
        "bullets": [
          "<b>Combat Mindset:</b> Maintaining situational awareness during and after an engagement.",
          "<b>Reloading Under Pressure:</b> Mastering the tactical reload and emergency \"slid-lock\" reload while moving."
        ]
      }
    ],
    "image": "https://american-firearms.s3-eu-central-2.ionoscloud.com/images/home/tactical-banner-bg.png"
  }
};

export default function CoursePage() {
  return <CoursePageContent course={course} />;
}
