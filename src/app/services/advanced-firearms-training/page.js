import CoursePageContent from '@/components/services/CoursePageContent';

export const metadata = {
  title: "Advanced Firearms Training | American Firearms Network",
  description: "Advanced firearms training by American Firearms Network. Master tactical movement, stress shooting, low-light drills, and elite gun skills.",
};

const course = {
  "slug": "advanced-firearms-training",
  "title": "Advanced Firearms Training",
  "videoIds": [
    "ctpQE_j8vyg",
    "JdkoNyPqL5A",
    "mqybul_khzg",
    "3FJ-QV8-FFc"
  ],
  "overview": {
    "subtitle": "Advanced Firearms Training | The American Firearms Network",
    "tagline": "Push Beyond the Fundamentals. Master the Art of Tactical Proficiency.",
    "paragraphs": [
      "Static range shooting is a starting point—but it is not a destination. To truly master the use of a firearm in a defensive or competitive environment, you must learn to shoot on the move, clear malfunctions under stress, and win the fight when the conditions are against you.",
      "The American Firearms Network (AFN) offers Advanced Firearms Training for shooters who are ready to transition from \"proficient\" to \"elite.\" Our advanced modules are designed to push your physical and mental limits through high-intensity, reality-based training."
    ],
    "image": "https://american-firearms.s3-eu-central-2.ionoscloud.com/images/home/military-tactical-strategy-rifle-position.webp"
  },
  "whyTrain": {
    "heading": "The AFN Advanced Standards",
    "subtitle": "At the American Firearms Network, we believe that \"Advanced\" doesn't mean \"Complex.\" It means performing the Fundamentals to a higher standard under Extreme Pressure.",
    "pillars": [
      {
        "title": "Force-on-Force Training",
        "description": "Utilizing UTM/Simunition for the most realistic non-lethal tactical training available."
      },
      {
        "title": "Video Diagnostic Analysis",
        "description": "Our instructors use high-speed video to analyze your draw stroke and recoil management down to the millisecond."
      },
      {
        "title": "Peer Competition",
        "description": "Train alongside other high-level shooters in a culture of accountability and excellence."
      }
    ]
  },
  "curriculum": {
    "heading": "Elevate Your Tactical Edge",
    "intro": "Our advanced courses are not for the casual hobbyist. These programs are designed for CCW holders, security professionals, and competitive shooters who demand the highest level of performance from themselves and their equipment.",
    "sections": [
      {
        "title": "1. Dynamic Movement & Positional Shooting",
        "subtitle": "In a real-world encounter, you will rarely be standing still.",
        "bullets": [
          "<b>Shooting on the Move:</b> Maintain accuracy while advancing, retreating, or lateral tracking.",
          "<b>Unconventional Positions:</b> Learn to engage targets from seated, kneeling, prone, and supine positions.",
          "<b>Barricade Work:</b> Master the use of \"urban\" cover—using vehicles, doorways, and corners to your tactical advantage."
        ]
      },
      {
        "title": "2. High-Stress Malfunction Clearance",
        "subtitle": "When your firearm fails in a fight, you don't have time to think. We drill <b> Type 1, Type 2, and Type 3 (Double Feed) </b> clearances until they are subconscious reactions, even when one-handed or under physical exertion.",
        "bullets": []
      },
      {
        "title": "3. Low-Light / No-Light Operations",
        "subtitle": "Over 60% of defensive encounters occur in low-light conditions. Our advanced curriculum includes:",
        "bullets": [
          "<b>Handheld vs. Weapon-Mounted Lights:</b> Pros, cons, and techniques (FBI, Harries, etc.).",
          "<b>Positive Identification (PID):</b> Identifying threats in the shadows.",
          "<b>Flash-and-Move Tactics:</b> Using light as a tool to disorient threats."
        ]
      },
      {
        "title": "4. Tactical Speed & Target Transitions",
        "subtitle": "We utilize shot timers to push your \"split times\" without sacrificing \"A-zone\" accuracy.",
        "bullets": [
          "<b>Multiple Target Engagement:</b> Efficiently transitioning between threats at varying distances.",
          "<b>Emergency & Tactical Reloads:</b> Keeping your weapon in the fight through proactive ammo management."
        ]
      }
    ],
    "image": "https://american-firearms.s3-eu-central-2.ionoscloud.com/images/gallery/gallery-defensive-posture.png"
  }
};

export default function CoursePage() {
  return <CoursePageContent course={course} />;
}
