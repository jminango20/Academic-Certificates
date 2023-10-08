export const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
export const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "issuer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "institution",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "course",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "personalIdentifier",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "studentName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "disciplineName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "issueDate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "certificateHash",
        type: "bytes32",
      },
    ],
    name: "CertificateIssued",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "issuer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "disciplineName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "studentCount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "issueDate",
        type: "uint256",
      },
    ],
    name: "NewDiscipline",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "disciplineName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "studentCount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "issueDate",
        type: "uint256",
      },
    ],
    name: "StudentCountUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "certificateHashToCertificate",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "issuer",
        type: "address",
      },
      {
        internalType: "string",
        name: "institution",
        type: "string",
      },
      {
        internalType: "string",
        name: "course",
        type: "string",
      },
      {
        internalType: "string",
        name: "disciplineName",
        type: "string",
      },
      {
        internalType: "string",
        name: "personalIdentifier",
        type: "string",
      },
      {
        internalType: "string",
        name: "studentName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "issueDate",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isValid",
        type: "bool",
      },
      {
        internalType: "bytes32",
        name: "certificateHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "certificates",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "issuer",
        type: "address",
      },
      {
        internalType: "string",
        name: "institution",
        type: "string",
      },
      {
        internalType: "string",
        name: "course",
        type: "string",
      },
      {
        internalType: "string",
        name: "disciplineName",
        type: "string",
      },
      {
        internalType: "string",
        name: "personalIdentifier",
        type: "string",
      },
      {
        internalType: "string",
        name: "studentName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "issueDate",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isValid",
        type: "bool",
      },
      {
        internalType: "bytes32",
        name: "certificateHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_disciplineName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_studentCount",
        type: "uint256",
      },
    ],
    name: "createDiscipline",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "disciplines",
    outputs: [
      {
        internalType: "address",
        name: "issuer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "studentCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
    ],
    name: "findCertificateByHash",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "issuer",
            type: "address",
          },
          {
            internalType: "string",
            name: "institution",
            type: "string",
          },
          {
            internalType: "string",
            name: "course",
            type: "string",
          },
          {
            internalType: "string",
            name: "disciplineName",
            type: "string",
          },
          {
            internalType: "string",
            name: "personalIdentifier",
            type: "string",
          },
          {
            internalType: "string",
            name: "studentName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "issueDate",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isValid",
            type: "bool",
          },
          {
            internalType: "bytes32",
            name: "certificateHash",
            type: "bytes32",
          },
        ],
        internalType: "struct AcademicCertificates.Certificate",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_disciplineName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_personalIdentifier",
        type: "string",
      },
    ],
    name: "getCertificatesByDisciplineAndPersonalIdentifier",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "issuer",
            type: "address",
          },
          {
            internalType: "string",
            name: "institution",
            type: "string",
          },
          {
            internalType: "string",
            name: "course",
            type: "string",
          },
          {
            internalType: "string",
            name: "disciplineName",
            type: "string",
          },
          {
            internalType: "string",
            name: "personalIdentifier",
            type: "string",
          },
          {
            internalType: "string",
            name: "studentName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "issueDate",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isValid",
            type: "bool",
          },
          {
            internalType: "bytes32",
            name: "certificateHash",
            type: "bytes32",
          },
        ],
        internalType: "struct AcademicCertificates.Certificate",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_personalIdentifier",
        type: "string",
      },
    ],
    name: "getCertificatesByPersonalIdentifier",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "issuer",
            type: "address",
          },
          {
            internalType: "string",
            name: "institution",
            type: "string",
          },
          {
            internalType: "string",
            name: "course",
            type: "string",
          },
          {
            internalType: "string",
            name: "disciplineName",
            type: "string",
          },
          {
            internalType: "string",
            name: "personalIdentifier",
            type: "string",
          },
          {
            internalType: "string",
            name: "studentName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "issueDate",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isValid",
            type: "bool",
          },
          {
            internalType: "bytes32",
            name: "certificateHash",
            type: "bytes32",
          },
        ],
        internalType: "struct AcademicCertificates.Certificate[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_disciplineName",
        type: "string",
      },
    ],
    name: "getDiscipline",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "issuer",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "studentCount",
            type: "uint256",
          },
        ],
        internalType: "struct AcademicCertificates.Discipline",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_institution",
        type: "string",
      },
      {
        internalType: "string",
        name: "_course",
        type: "string",
      },
      {
        internalType: "string",
        name: "_personalIdentifier",
        type: "string",
      },
      {
        internalType: "string",
        name: "_studentName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_disciplineName",
        type: "string",
      },
    ],
    name: "issueCertificate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_disciplineName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_newStudentCount",
        type: "uint256",
      },
    ],
    name: "updateStudentCount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "_institution",
        type: "string",
      },
      {
        internalType: "string",
        name: "_personalIdentifier",
        type: "string",
      },
      {
        internalType: "string",
        name: "_disciplineName",
        type: "string",
      },
    ],
    name: "validateCertificateByHash",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "issuer",
            type: "address",
          },
          {
            internalType: "string",
            name: "institution",
            type: "string",
          },
          {
            internalType: "string",
            name: "course",
            type: "string",
          },
          {
            internalType: "string",
            name: "disciplineName",
            type: "string",
          },
          {
            internalType: "string",
            name: "personalIdentifier",
            type: "string",
          },
          {
            internalType: "string",
            name: "studentName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "issueDate",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isValid",
            type: "bool",
          },
          {
            internalType: "bytes32",
            name: "certificateHash",
            type: "bytes32",
          },
        ],
        internalType: "struct AcademicCertificates.Certificate",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
