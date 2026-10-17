export interface Project {
  name: string;
  summary: string;
  period: string;
  tech: string[];
  link?: string;
  collaborators?: string;
  featured?: boolean;
}
export interface ProjectGroup {
  id: string;
  short: string;
  group: string;
  projects: Project[];
}

export const projectGroups: ProjectGroup[] = [
  {
    id: 'industry',
    short: 'Open source & industry',
    group: 'Open Source & Industry',
    projects: [
      {
        name: 'Shepherd Model Gateway',
        summary:
          'Rust/Tokio-based model gateway that isolates streaming and the agentic loop from the data-plane API tier. Led the migration of OCI Generative AI’s OpenAI-compatible agent execution onto it — 15% lower p90 latency and 90% less memory.',
        period: 'Open source',
        tech: ['Rust', 'Tokio', 'OpenAI API', 'LLM serving'],
        link: 'https://github.com/lightseekorg/smg',
        featured: true,
      },
      {
        name: 'Agentic QA Framework',
        summary:
          'A general QA agent built on the platform’s own agent framework that automates end-to-end regression testing across diverse scenarios and edge cases, speeding up releases across GenAI services.',
        period: 'Oracle',
        tech: ['LLM Agents', 'Python', 'Test automation'],
        featured: true,
      },
    ],
  },
  {
    id: 'graduate',
    short: 'Graduate',
    group: 'Graduate — UC Davis',
    projects: [
      {
        name: 'Scaling ResilientDB by Sharding',
        summary:
          'Implemented the AHL (Attested HyperLedger) sharding protocol in ResilientDB, an open-source permissioned blockchain (later an Apache Incubator project). Enhanced PBFT with a two-phase-commit optimized protocol, increasing throughput ~3× to 240K txns/sec.',
        period: 'Jan 2020 – Jun 2020',
        tech: ['C++', 'Bash', 'Python', 'GCP'],
        link: 'https://github.com/DhruvKrish/resilientdb/tree/AHL',
        collaborators: 'With Dhruv Krishnan and Priya Holani; mentored by Prof. Mohammad Sadoghi',
        featured: true,
      },
      {
        name: 'Paxos-based Consensus in ResilientDB',
        summary:
          'Implemented the BFT-SMaRt protocol inside ResilientDB, with major changes to its Paxos-based VP consensus module — improving throughput by 10%.',
        period: 'Oct 2019 – Dec 2019',
        tech: ['C++', 'Bash', 'Python', 'Docker'],
        link: 'https://github.com/RohanSogani/library',
        collaborators: 'With Dhruv Krishnan, Priya Holani and Shubham Pandey',
      },
      {
        name: 'AutoGrader for ECS 36B',
        summary:
          'Automates grading of 190+ students’ C++ assignment submissions collected through the handin command, cutting manual grading effort by 85%.',
        period: 'Jan 2020 – Feb 2020',
        tech: ['Python', 'Bash'],
        link: 'https://github.com/RohanSogani/autoGrader',
        collaborators: 'With Qi Wu',
      },
      {
        name: 'Playing Atari Pong with Deep Q-Learning',
        summary:
          'A convolutional deep Q-learner that learns Atari Pong with 98% accuracy, plus representation learning to understand how the agent predicts moves.',
        period: 'May 2020',
        tech: ['Python', 'TensorFlow', 'NumPy'],
      },
      {
        name: 'Hand-Written Digit Recognition',
        summary: 'A multi-class Support Vector Machine that recognizes digits with 85% accuracy.',
        period: 'Apr 2020',
        tech: ['Python', 'scikit-learn'],
      },
      {
        name: 'Netflix Movie Recommender',
        summary: 'Movie recommenders using spectral clustering and matrix completion, reaching 91% accuracy.',
        period: 'Mar 2020',
        tech: ['Python', 'NumPy', 'Pandas'],
      },
    ],
  },
  {
    id: 'undergraduate',
    short: 'Undergraduate',
    group: 'Undergraduate — PICT',
    projects: [
      {
        name: 'Threat Analysis of Android Applications',
        summary:
          'A framework that performs static and dynamic analysis on Android apps and produces an easy-to-understand safety rating.',
        period: 'Aug 2015 – Apr 2016',
        tech: ['Django', 'MongoDB', 'Androwarn', 'Apktool'],
        link: 'https://github.com/RohanSogani/BEProject',
        collaborators: 'With Nishad Dawkhar, Meghraj Bendre and Pushkar Badgujar',
      },
      {
        name: 'Online Judge for the National Computing Contest',
        summary:
          'Hosted PICT’s National Computing Contest: a sandboxed Python judge that compiled and ran submissions against hidden test cases and returned verdicts (AC, WA, CTE, RTE).',
        period: 'Jan 2013 – Mar 2013',
        tech: ['Python', 'Django', 'PostgreSQL'],
        link: 'https://github.com/RohanSogani/NCC14Final',
        collaborators: 'With Abhiraj Darshankar',
      },
      {
        name: 'Android Library App for PICT',
        summary:
          'Shows library book availability, issued books and due dates, backed by a Node.js REST server over MongoDB.',
        period: 'Aug 2014 – Sep 2014',
        tech: ['Node.js', 'Java', 'MongoDB'],
        link: 'https://github.com/RohanSogani/pict-librare',
        collaborators: 'With Akash Shingte and Vishal Shelke',
      },
    ],
  },
];
