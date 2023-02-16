export const fakeStudentData = [
  {
    name: "Ishaan Malhotra",
    picture: "/SSS/P.3.1.a.jpg",
    studentId: "1",
    classes: [
      {
        classCode: "CHEMII2023D",
        assignments: [
          {
            name: "Organic Chemistry (REV)",
            deadline: new Date(),
            submitted: true,
            file: "/fake-thumbnail.png",
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
          },
          {
            name: "Atomic Bonding (P2)",
            deadline: new Date(),
            submitted: true,
            file: "/fake-thumbnail.png",
          },
        ],
      },
      {
        classCode: "BIOI2023A",
        assignments: [
          {
            name: "Organic Chemistry (REV)",
            deadline: new Date(),
            submitted: true,
            file: "/fake-thumbnail.png",
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
