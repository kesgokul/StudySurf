export const fakeStudentData = [
  {
    name: "Ishaan Malhotra",
    picture: "/SSS/P.3.1.a.jpg",
    studentId: "1",
    email: "ishaan.m@devfolio.edu",
    contact: "+91-7348793434",
    classes: [
      {
        classCode: "CHEMII2023D",
        assignments: [
          {
            name: "Organic Chemistry (REV)",
            deadline: new Date(),
            submitted: true,
            file: "/fake-thumbnail.png",
            date: new Date(),
            plagScore: 44,
          },
          {
            name: "Atomic Bonding (P2)",
            deadline: new Date(),
            submitted: false,
            file: "",
          },
        ],
      },
      {
        classCode: "PHYII2023D",
        assignments: [
          {
            name: "Bernouli's Theorem ",
            deadline: new Date(),
            submitted: true,
            file: "/fake-thumbnail.png",
            date: new Date(),
            plagScore: 56,
          },
          {
            name: "Newton's laws (pre)",
            deadline: new Date(),
            submitted: false,
            file: "",
          },
        ],
      },
    ],
  },
  {
    name: "Praksh Kumar",
    picture: "/SSS/P.3.2.a.jpg",
    studentId: "2",
    classes: [
      {
        classCode: "CHEMII2023D",
        assignments: [
          {
            name: "Organic Chemistry (REV)",
            deadline: new Date(),
            submitted: true,
            file: "/fake-thumbnail.png",
            date: new Date(),
            plagScore: 76,
          },
          {
            name: "Atomic Bonding (P2)",
            deadline: new Date(),
            submitted: true,
            file: "/fake-thumbnail.png",
            date: new Date(),
            plagScore: 12,
          },
        ],
      },
      {
        classCode: "BIOI2023A",
        assignments: [
          {
            name: "Human anatomy (II)",
            deadline: new Date(),
            submitted: true,
            file: "/fake-thumbnail.png",
            date: new Date(),
            plagScore: 54,
          },
          {
            name: "Vaccines history (P2)",
            deadline: new Date(),
            submitted: false,
            file: "",
          },
        ],
      },
    ],
  },
  {
    name: "Nora Fatehi",
    picture: "/SSS/P.4.a 1.jpg",
    studentId: "3",
    classes: [
      {
        classCode: "CHEMII2023D",
        assignments: [
          {
            name: "Organic Chemistry (REV)",
            deadline: new Date(),
            submitted: true,
            file: "/fake-thumbnail.png",
            date: new Date(),
            plagScore: 22,
          },
          {
            name: "Atomic Bonding (P2)",
            deadline: new Date(),
            submitted: false,
            file: "",
          },
        ],
      },
      {
        classCode: "PHYII2023D",
        assignments: [
          {
            name: "Bernouli's Theorem ",
            deadline: new Date(),
            submitted: true,
            file: "/fake-thumbnail.png",
            date: new Date(),
            plagScore: 68,
          },
          {
            name: "Newton's laws (pre)",
            deadline: new Date(),
            submitted: false,
            file: "",
          },
        ],
      },
    ],
  },
  {
    name: "Ranveer Singh",
    picture: "/SSS/P.4.a.jpg",
    studentId: "4",
    classes: [
      {
        classCode: "CHEMII2023D",
        assignments: [
          {
            name: "Organic Chemistry (REV)",
            deadline: new Date(),
            submitted: true,
            file: "/fake-thumbnail.png",
            date: new Date(),
            plagScore: 16,
          },
          {
            name: "Atomic Bonding (P2)",
            deadline: new Date(),
            submitted: false,
            file: "",
          },
        ],
      },
    ],
  },
];

export const fakeSubbmissions = [
  {
    studentId: "1",
    assignment: "Organic Chemistry",
    file: "/fake-pdf.png",
    date: new Date(),
    plagScore: 76,
  },
  {
    studentId: "2",
    assignment: "Organic Chemistry",
    file: "/fake-pdf.png",
    date: new Date(),
    plagScore: 27,
  },
  {
    studentId: "3",
    assignment: "Organic Chemistry",
    file: "/fake-pdf.png",
    date: new Date(),
    plagScore: 20,
  },
];


export const premiumPlans = [
  {
    name: "Basic",
    price: 0.0,
    features: [
      "Unlimited SignUps",
      "1:1 comparisons only",
      "512MB Cloud Storage",
    ],
  },
  {
    name: "Standard",
    price: 0.01,
    features: [
      "All features in Basic",
      "Upto 25 Comparisons",
      "30GB Cloud Storage",
    ],
  },
  {
    name: "Enterprise",
    price: 0.07,
    features: [
      "All features in Standard",
      "Superfast ML processing",
      "Unlimited Cloud Storage",
    ],
  },
];
