// Content for the About page.
export const bio = [
  "I'm an M.Tech student in Computer Science and Engineering at IIT Ropar, and an AI Software Engineer Graduate Intern at Intel, Bengaluru. At Intel I build internal MCP servers, including one for natural-language-to-SQL data retrieval, that work together to power an agentic assistant.",
  'Before grad school I spent over 3 years as a Specialist Programmer at Infosys, building large-scale Spark data pipelines on Azure and cutting processing time by up to 30%.',
  'I like working where AI/ML, NLP and big data meet: systems that are intelligent, scale well and solve real problems.',
];

export const education = [
  {
    degree: 'M.Tech, Computer Science & Engineering',
    school: 'Indian Institute of Technology, Ropar',
    period: '2025 – 2027',
    grade: 'CGPA 8.3',
    courses: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'DBMS',
      'Computer Systems',
      'Mathematical Foundations for CS',
      'Internet of Things',
      'Machine Learning',
      'Deep Learning for Computer Vision',
    ],
  },
  {
    degree: 'B.Tech, Electronics & Communication Engineering',
    school: 'Haldia Institute of Technology, West Bengal',
    period: '2017 – 2021',
    grade: 'CGPA 9.06',
    courses: [] as string[],
  },
];

export const careerLog = [
  {
    role: 'AI Software Engineer Graduate Intern',
    org: 'Intel · Bengaluru',
    period: 'Jul 2025 – present',
    note: 'MCP servers (incl. natural language to SQL) and the agentic AI framework that orchestrates them.',
  },
  {
    role: 'Specialist Programmer',
    org: 'Infosys · Pune',
    period: 'Aug 2021 – Oct 2024',
    note: 'Spark pipelines on Azure HDInsight + Data Factory (30% faster), CI/CD on Azure DevOps (40% faster deploys).',
  },
];

export const recognition = [
  { year: '2025', text: 'GATE CSE: score 739' },
  { year: '2022', text: 'Outstanding Performance Rating, Infosys' },
  { year: '2022', text: 'INSTA Award, Infosys' },
];

export const toolbox = [
  { group: 'Languages', items: ['Python', 'C / C++', 'SQL', 'Scala'] },
  { group: 'AI / ML', items: ['PyTorch', 'Deep Learning', 'Computer Vision', 'LangGraph', 'LangChain', 'RAG', 'Pinecone', 'MCP'] },
  { group: 'Backend', items: ['Django', 'PostgreSQL', 'MySQL', 'Redis', 'REST APIs'] },
  { group: 'Big Data / Cloud', items: ['Apache Spark', 'PySpark', 'Kafka', 'Azure HDInsight', 'Databricks', 'Delta Lake'] },
  { group: 'DevOps', items: ['Docker', 'Azure DevOps', 'CI/CD', 'Git'] },
];

export const terminalCard = [
  { key: 'name', value: 'Manish Singh' },
  { key: 'role', value: 'AI SWE Intern @ Intel' },
  { key: 'study', value: 'M.Tech CSE, IIT Ropar' },
  { key: 'based', value: 'India' },
  { key: 'focus', value: 'agentic AI, NLP, big data' },
  { key: 'building', value: 'MCP servers, NL-to-SQL' },
];
