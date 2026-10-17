// Bullets support **bold** for emphasis.
export interface Role {
  title: string;
  start: string;
  end: string;
  bullets?: string[];
  tech?: string[];
}
export interface Org {
  org: string;
  url?: string;
  logo?: string;
  location: string;
  roles: Role[];
}

export const work: Org[] = [
  {
    org: 'Oracle',
    url: 'https://www.oracle.com/cloud/',
    logo: '/images/oracle.svg',
    location: 'Seattle, WA',
    roles: [
      {
        title: 'Senior Member of Technical Staff',
        start: 'Aug 2022',
        end: 'Present',
        bullets: [
          '**Architected** the control plane and data plane for OCI Generative AI Agent Service using **Kubernetes Operators** and **Knative + Istio**, eliminating noisy neighbours with **Redis-backed memory** and **scale-to-zero** endpoints serving thousands of customers across **10,000+ agent endpoints** at **99.9% availability**.',
          '**Led the migration** of OCI Generative AI’s **OpenAI-compatible agent** execution from a Java runtime to the independently deployable **Rust/Tokio-based Shepherd Model Gateway** ([open source](https://github.com/lightseekorg/smg)), achieving **15% p90 latency** and **90% memory** reduction.',
          '**Spearheaded an Agent-Tool Gateway**: a managed connectivity and security layer exposing OpenAPI specs and **MCP servers** as discoverable agent tools with protocol translation — **80% onboarding reduction** per integration.',
          '**Designed and built** a multi-tenant **sandboxed code execution** environment for Code Interpreter and Hosted Shell; authored a **Go-based sandbox supervisor** with **gVisor** isolation and **mitmproxy-controlled egress** to safely run untrusted LLM-generated code for **Tier-1 enterprise customers**.',
          '**Engineered a warm-pool provisioning strategy** using atomic Kubernetes label updates, delivering **sub-100ms container provisioning** on the hot path, with a custom **HPA scaling on lease velocity** to grow capacity ahead of demand.',
          '**Led a team of 5 engineers** to deliver provider-agnostic model selection (per-agent and per-tool-path routing for RAG and SQL generation) behind a unified adapter interface, cutting new-model onboarding from **~2 weeks to 1 day**.',
          '**Reduced infrastructure costs by 60%** by consolidating Kubernetes nodes from 500 to 150, and built a phased-rollout **CRD** that canaries new agent versions — lifting availability from **95% to 99.9%**.',
          '**Improved RAG pipeline throughput 4.5×** by profiling with Locust, fixing FastAPI async I/O starvation and right-sizing GPUs — end-to-end latency from **35s to under 15s at 500 QPS**.',
          '**Built a decentralized rate-limiting library** using **gossip protocols** over headless Kubernetes services, enforcing fair **multi-tenant resource isolation** without a central coordinator.',
        ],
        tech: ['Kubernetes', 'Knative', 'Istio', 'Rust', 'Go', 'Java', 'Python', 'Redis', 'gVisor', 'MCP'],
      },
      {
        title: 'Member of Technical Staff',
        start: 'Apr 2021',
        end: 'Jul 2022',
        bullets: [
          'Built a microservice **code-generation framework** that automated control-plane service scaffolding across Oracle Cloud — application code, infrastructure modules and observability — saving **100+ developer hours** per team for every new OCI control-plane service.',
          '**Modernized** legacy cloud workflows using the **Strangler Fig pattern**, scaling to **5K+ orders per minute** and cutting deployment cycles by **40%**.',
        ],
        tech: ['Java', 'Dropwizard', 'Terraform', 'Kafka', 'OCI'],
      },
    ],
  },
  {
    org: 'Amazon',
    url: 'https://www.amazon.com/',
    logo: '/images/amazon.png',
    location: 'Remote, CA',
    roles: [
      {
        title: 'Software Development Engineering Intern',
        start: 'Jun 2020',
        end: 'Sep 2020',
        bullets: [
          'Built a **debugging console** for on-call engineers to analyze error logs and generate diagnostic reports, reducing data-mismatch investigation time by **10 hours/week**.',
          'Collaborated with cross-functional teams to unify two web consoles into a single, seamless data view.',
        ],
        tech: ['Java', 'Spring MVC', 'React', 'AWS Lambda', 'Elasticsearch', 'S3'],
      },
    ],
  },
  {
    org: 'SAP Labs',
    url: 'https://www.sap.com/',
    logo: '/images/sap.svg',
    location: 'Bangalore, India',
    roles: [
      {
        title: 'Software Developer',
        start: 'Mar 2019',
        end: 'Aug 2019',
        bullets: [
          'Led the design and development of SAP’s **Demand-Driven Material Requirements Planning (DDMRP)** application, deployed on-premise and on **SAP HANA Cloud**, and adopted by **Fortune 500 customers** across smart fashion and manufacturing.',
          'Built scalable cloud applications for SAP’s Intelligent ERP S/4HANA Cloud; a new app to manage and visualize hierarchical objects increased profits by **20%**.',
          'Mentored two junior developers through code reviews and guidance on complex tasks.',
        ],
        tech: ['Java', 'SAP HANA', 'SQL', 'SAP Fiori', 'REST'],
      },
      {
        title: 'Associate Developer',
        start: 'Aug 2016',
        end: 'Mar 2019',
        bullets: [
          'Developed reusable REST APIs integrating S/4HANA Cloud with third-party solutions for seamless data synchronization.',
          'Designed time-series charts visualizing product supply and demand; built customer dashboards that increased efficiency by **70%**.',
          'Set up the initial automation testing framework with Selenium and Appium, and moved on-premise code to the cloud.',
          'Earned the **SAP Catalyst award** for outstanding contribution and a **Peer Award** for supporting the team.',
        ],
        tech: ['Java', 'ABAP', 'OData', 'SAP HANA', 'Selenium'],
      },
    ],
  },
];

export const research: Org[] = [
  {
    org: 'Exploratory Systems Lab, UC Davis',
    url: 'https://expolab.org/',
    logo: '/images/expolab.png',
    location: 'Davis, CA',
    roles: [
      {
        title: 'Graduate Student Researcher',
        start: 'Jan 2020',
        end: 'Jun 2020',
        bullets: [
          'Worked on [ResilientDB](https://resilientdb.com/), an open-source permissioned blockchain fabric (later an Apache Incubator project), guided by Prof. Mohammad Sadoghi, Suyash Gupta and Sajjad Rahnama.',
          'Implemented the **AHL (Attested HyperLedger)** sharding protocol, enhancing PBFT with **two-phase commit** — increasing throughput by **~3× to 240K txns/sec**.',
        ],
        tech: ['C++', 'Bash', 'Python', 'Google Cloud'],
      },
    ],
  },
];

export const teaching: Org[] = [
  {
    org: 'Department of Computer Science, UC Davis',
    url: 'https://cs.ucdavis.edu/',
    logo: '/images/ucdavis.png',
    location: 'Davis, CA',
    roles: [
      {
        title: 'Teaching Assistant — ECS 36B (Object-Oriented Programming in C++)',
        start: 'Jan 2020',
        end: 'Mar 2020',
        bullets: [
          'Ran discussion sessions on object-oriented programming with an emphasis on practical approaches.',
          'Built an open-source [auto-grader](https://github.com/RohanSogani/autoGrader) for C++ assignments, reducing manual grading effort by **85%**.',
        ],
      },
    ],
  },
];
