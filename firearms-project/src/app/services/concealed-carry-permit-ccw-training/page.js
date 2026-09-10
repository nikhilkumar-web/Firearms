import CoursePageContent from '@/components/services/CoursePageContent';

export const metadata = {
  title: "Concealed Carry Permit (CCW) Training | AFN",
  description: "Professional concealed carry permit training by American Firearms Network focused on legal education, safety, and responsible carry.",
};

const course = {
  "slug": "concealed-carry-permit-ccw-training",
  "title": "Concealed Carry Permit (CCW) Training",
  "videoIds": [
    "ctpQE_j8vyg",
    "JdkoNyPqL5A",
    "mqybul_khzg",
    "3FJ-QV8-FFc"
  ],
  "overview": {
    "subtitle": "Concealed Carry Permit (CCW) Training | The American Firearms Network",
    "tagline": "Your Path to Legal, Responsible, and Confident Carry starts here.",
    "paragraphs": [
      "Owning a firearm for self-defense is a significant responsibility; carrying it in public is an even greater one. The American Firearms Network (AFN) provides the gold standard in Concealed Carry Weapon (CCW) permit training. Our courses are designed not just to meet state minimums, but to ensure you have the tactical proficiency and legal knowledge to protect yourself and your loved ones within the bounds of the law."
    ],
    "image": "https://american-firearms.s3-eu-central-2.ionoscloud.com/images/services/concealed-carry-permit-ccw-training-overview.webp"
  },
  "whyTrain": {
    "heading": "Why Earn Your CCW with the AFN?",
    "subtitle": "Carrying concealed requires specialized legal and mechanical knowledge. Our program provides four key advantages:",
    "pillars": [
      {
        "title": "Multi-State Reciprocity",
        "description": "Gain the legal right to carry in dozens of other states through recognition agreements."
      },
      {
        "title": "Legal Protection",
        "description": "Proving you have undergone professional training is a powerful asset in any self-defense legal proceeding."
      },
      {
        "title": "Bypass Waiting Periods",
        "description": "In many jurisdictions, permit holders can skip the standard background check waiting period when purchasing new firearms."
      },
      {
        "title": "Tactical Proficiency",
        "description": "Our instructors provide insights that YouTube videos cannot—real-time feedback on your grip, draw stroke, and situational awareness."
      }
    ]
  },
  "curriculum": {
    "heading": "Our Comprehensive CCW Curriculum",
    "intro": "Our curriculum is built to exceed the requirements for the Florida Concealed Weapon License and similar permits nationwide.",
    "sections": [
      {
        "title": "1. Firearms Safety & Mechanics",
        "subtitle": "We begin with the universal rules of gun safety, safe storage practices, and a deep dive into handgun nomenclature and operation to ensure 100% mechanical confidence.",
        "bullets": []
      },
      {
        "title": "2. The Legalities of Self-Defense",
        "subtitle": "The most critical part of our course. We cover:",
        "bullets": [
          "The <b>\"Castle Doctrine\" and \"Stand Your Ground\"</b> laws.",
          "The definition of \"imminent threat\" and \"deadly force.\"",
          "Prohibited carry locations (Federal buildings, schools, etc.).",
          "Interacting with Law Enforcement while carrying."
        ]
      },
      {
        "title": "3. Live-Fire Qualification",
        "subtitle": "Under the direct supervision of an AFN-certified instructor, you will demonstrate competency by discharging a firearm at a target. We focus on:",
        "bullets": [
          "Safe loading and unloading.",
          "Sight alignment and trigger control.",
          "Malfunction clearing."
        ]
      },
      {
        "title": "4. Concealment Strategy & Gear",
        "subtitle": "We help you choose the right holster, carry position (Appendix, 4 o'clock, etc.), and clothing to ensure your firearm remains truly hidden and accessible.",
        "bullets": []
      }
    ],
    "image": "https://american-firearms.s3-eu-central-2.ionoscloud.com/images/services/concealed-carry-permit-ccw-training-curriculum.png"
  }
};

export default function CoursePage() {
  return <CoursePageContent course={course} />;
}
