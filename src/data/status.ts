// What you are doing right now (the /status/ page, the status strip on the home page,
// and the `status` command in the home-page terminal).
// Edit this file and change `updated` whenever things change.
export const status = {
  updated: '2 November 2026',
  items: [
    {
      name: 'building',
      short: 'MCP servers and an agentic assistant at Intel',
      text: 'Internal Model Context Protocol (MCP) servers at Intel, including one that turns natural-language questions into SQL, and the agent framework that uses them together to help people across internal systems.',
    },
    {
      name: 'studying',
      short: 'M.Tech in Computer Science at IIT Ropar',
      text: 'Second year of my M.Tech in Computer Science and Engineering at IIT Ropar: machine learning, deep learning for computer vision and systems courses.',
    },
    {
      name: 'learning',
      short: 'Multi-step agents, evals and retrieval',
      text: 'How to make multi-step agents reliable: tool design, evaluation, and retrieval (RAG) that holds up on real data.',
    },
  ],
  // Shown as `history` on the status page, newest first.
  history: [
    { date: 'May 2026', text: 'Finished the Multi-Paradigm CBIR and YouTube Trend & Sentiment projects.' },
    { date: 'Jul 2025', text: 'Joined Intel as an AI Software Engineer Graduate Intern and started my M.Tech at IIT Ropar.' },
    { date: 'Oct 2024', text: 'Left Infosys after 3+ years as a Specialist Programmer to go back to grad school.' },
  ],
};
