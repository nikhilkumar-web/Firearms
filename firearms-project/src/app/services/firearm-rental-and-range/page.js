import CoursePageContent from '@/components/services/CoursePageContent';

export const metadata = {
  title: "Firearm Rentals & Range Services | American Firearms Network",
  description: "Firearm rentals and professional range services. Try before you buy, train safely, and access modern AFN partner ranges.",
};

const course = {
  "slug": "firearm-rental-and-range",
  "title": "Firearm Rental & Range",
  "videoIds": [
    "ctpQE_j8vyg",
    "JdkoNyPqL5A",
    "mqybul_khzg",
    "3FJ-QV8-FFc"
  ],
  "overview": {
    "subtitle": "Firearm Rentals & Range Services | The American Firearms Network",
    "tagline": "The Ultimate \"Try Before You Buy\" Experience. Access Elite Equipment and Professional Facilities.",
    "paragraphs": [
      "At The American Firearms Network (AFN), we believe that the best way to choose a firearm is to experience it firsthand. Our Firearm Rental and Range Services provide shooters of all levels with a safe, professional, and diverse environment to test the latest platforms, sharpen their skills, and find the perfect fit for their hands and lifestyle.",
      "Whether you are a traveler without your equipment, a new shooter looking for your first handgun, or an enthusiast wanting to test a high-end tactical rifle, AFN partner ranges offer a premium experience."
    ],
    "image": "https://american-firearms.s3-eu-central-2.ionoscloud.com/images/services/firearm-rental-and-range-overview.webp"
  },
  "whyTrain": {
    "heading": "Rental & Range Requirements",
    "subtitle": "To maintain the highest safety standards at all AFN locations, the following protocols apply:",
    "pillars": [
      {
        "title": "Valid ID",
        "description": "All shooters must present a government-issued photo ID."
      },
      {
        "title": "Safety Briefing",
        "description": "First-time visitors must complete a short range safety orientation."
      },
      {
        "title": "The \"Buddy Rule\"",
        "description": "To prevent solo-shooter incidents, individuals renting a firearm must be accompanied by at least one other person or possess their own firearm."
      },
      {
        "title": "Age Limits",
        "description": "Shooters must be 18 for long guns and 21 for handguns (unless accompanied by a legal guardian)."
      }
    ]
  },
  "curriculum": {
    "heading": "Why Utilize AFN Range Services?",
    "intro": "We go beyond providing a lane and a target. We provide a comprehensive shooting ecosystem.",
    "items": [
      {
        "title": "\"Try Before You Buy\" Program",
        "desc": "If you decide to purchase a firearm through our network after renting, we apply a portion of your rental fee toward your training or purchase."
      },
      {
        "title": "Professional Range Safety Officers (RSO)",
        "desc": "Every AFN-affiliated range is staffed by certified RSOs to ensure a safe, disciplined, and helpful environment."
      },
      {
        "title": "Clean & Modern Facilities",
        "desc": "Our partner ranges feature advanced ventilation systems, programmable target retrievers, and comfortable lounges."
      },
      {
        "title": "Ammunition & Accessory Support",
        "desc": "We provide high-quality range ammunition, eye protection, ear protection, and various target options on-site."
      }
    ],
    "image": "https://american-firearms.s3-eu-central-2.ionoscloud.com/images/gallery/gallery-target-evaluation.webp"
  }
};

export default function CoursePage() {
  return <CoursePageContent course={course} />;
}
