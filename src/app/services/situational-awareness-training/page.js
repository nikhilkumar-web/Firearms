import CoursePageContent from '@/components/services/CoursePageContent';

export const metadata = {
  title: "Situational Awareness Training | American Firearms Network",
  description: "Situational awareness training by AFN. Learn threat recognition, de-escalation, and mindset skills to avoid danger before it happens.",
};

const course = {
  "slug": "situational-awareness-training",
  "title": "Situational Awareness Training",
  "videoIds": [
    "ctpQE_j8vyg",
    "JdkoNyPqL5A",
    "mqybul_khzg",
    "3FJ-QV8-FFc"
  ],
  "overview": {
    "subtitle": "Situational Awareness Training | The American Firearms Network",
    "tagline": "The Best Way to Win a Fight is to Never Be There in the First Place.",
    "paragraphs": [
      "The most important tool for your protection isn't carried in a holster—it sits between your ears. At The American Firearms Network (AFN), we believe that tactical proficiency is incomplete without the \"Left of Bang\" skills required to identify, avoid, and de-escalate threats before they turn violent.",
      "Our <b>Situational Awareness (SA)</b> Training is designed for everyone: from corporate professionals and solo travelers to concealed carry holders who understand that a firearm is always the last resort, not the first."
    ],
    "subsections": [
      {
        "title": "What is Situational Awareness?",
        "description": "Situational awareness is the ability to perceive, understand, and anticipate environmental elements and events. In a self-defense context, it means recognizing the \"pre-attack indicators\" that most people miss because they are distracted by their phones or surroundings."
      },
      {
        "title": "The AFN Mindset: <b>The OODA Loop</b>",
        "description": "We teach the legendary <b>OODA Loop</b> (Observe, Orient, Decide, Act) framework, used by elite military units and law enforcement to make split-second decisions in high-stakes environments."
      }
    ],
    "image": "https://american-firearms.s3-eu-central-2.ionoscloud.com/images/services/situational-awareness-training-overview.webp"
  },
  "whyTrain": {
    "heading": "Why Situational Awareness Training?",
    "subtitle": "Situational awareness is the ability to perceive, understand, and anticipate environmental elements and events. In a self-defense context, it means recognizing the \"pre-attack indicators\" that most people miss because they are distracted by their phones or surroundings.",
    "pillars": [
      {
        "title": "Pre-Attack Indicators",
        "description": "Learn to detect body language shifts, glancing behavior, and staging movements before an encounter initiates."
      },
      {
        "title": "The <b>OODA Loop</b> Mindset",
        "description": "We teach the legendary <b>OODA Loop</b> (Observe, Orient, Decide, Act) framework used to make split-second tactical decisions."
      },
      {
        "title": "Preventing Conflict",
        "description": "Develop proactive security habits that make you a hard target, ensuring potential attackers look for an easier mark."
      },
      {
        "title": "Civilian & Professional Application",
        "description": "Applicable in parking lots, public transit, international travel, corporate facilities, and your own neighborhood."
      }
    ]
  },
  "curriculum": {
    "heading": "Our Situational Awareness Curriculum",
    "intro": "This course goes beyond \"paying attention.\" We provide actionable frameworks for personal security in the modern world.",
    "sections": [
      {
        "title": "1. The Color Code of Mental Readiness",
        "subtitle": "We utilize Colonel Jeff Cooper's famous Color Code to help you manage your mental state:",
        "bullets": [
          "<b>Condition White:</b> Unaware and unprepared (The \"Victim\" state).",
          "<b>Condition Yellow:</b> Relaxed alertness (The \"Lifelong\" state).",
          "<b>Condition Orange:</b> Specific alert (Identifying a potential threat).",
          "<b>Condition Red:</b> Action (The fight or flight response)."
        ]
      },
      {
        "title": "2. Recognizing Pre-Attack Indicators",
        "subtitle": "Criminals rarely attack without warning. We teach you how to spot:",
        "bullets": [
          "<b>Targeting behavior:</b> Identifying when you are being \"scoped.\"",
          "<b>Anomalies in body language:</b> Identifying nervous tics or aggressive posturing.",
          "<b>Environmental Red Flags:</b> Recognizing \"funnels\" or \"choke points\" where attacks are likely to occur."
        ]
      },
      {
        "title": "3. Strategic Positioning & \"The Wall\"",
        "subtitle": "Learn how to navigate public spaces like a professional:",
        "bullets": [
          "Where to sit in restaurants to maintain visual control.",
          "How to use reflections (windows, phone screens) to see behind you.",
          "Maintaining your \"Personal Space Bubble\" to prevent being ambushed."
        ]
      },
      {
        "title": "4. Verbal De-escalation & Exit Strategies",
        "subtitle": "If a threat is identified, the goal is \"Escape and Evasion.\" We cover:",
        "bullets": [
          "Using command presence to deter an attacker.",
          "Verbal scripts to de-escalate aggressive individuals.",
          "Identifying exits in unfamiliar buildings (Home, Office, Malls)."
        ]
      }
    ],
    "image": "https://american-firearms.s3-eu-central-2.ionoscloud.com/images/gallery/gallery-target-evaluation.webp"
  }
};

export default function CoursePage() {
  return <CoursePageContent course={course} />;
}
