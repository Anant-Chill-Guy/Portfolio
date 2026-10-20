export interface ProjectLink {
  label: string;
  href?: string;
  note?: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  issue: string;
  title: string;
  kicker: string;
  year: string;
  role: string;
  status: string;
  tagline: string;
  summary: string;
  problem: string;
  decision: string;
  outcome: string;
  metrics: Metric[];
  stack: string[];
  highlights: string[];
  links: ProjectLink[];
  note: string;
  snippet?: { file: string; lang: string; code: string };
  accent: 'red' | 'green';
}

export const profile = {
  name: 'Anant Awasthi',
  alias: 'KR4K3N',
  handle: 'kr4k3n',
  location: 'Ghaziabad, India',
  email: 'anantawasthi963@gmail.com',
  github: 'https://github.com/Anant-Chill-Guy',
  linkedin: 'https://www.linkedin.com/in/anant-awasthi-542b113a4/',
  tryhackme: 'https://tryhackme.com/p/kr4k3nby735',
  hackthebox: 'https://profile.hackthebox.com/profile/019c6c73-88fa-7258-8ad1-e30a59c03cf4',
  cylab: 'https://learn.cylabacademy.org/users/kr4k3nx',
  role: 'Red teamer · Web & network pentesting',
  status: 'In the lab',
  year: 'Second year, CSE (AI)',
};

export const projects: Project[] = [
  {
    id: 'webxploit',
    issue: '01',
    title: 'WEBXPLOIT',
    kicker: 'LAB PLATFORM',
    year: '2026',
    role: 'Solo — product, backend, infrastructure',
    status: 'Private build',
    tagline: 'A web-security lab where every stage is a real application, not a multiple-choice question.',
    summary: 'Six stages. Thirty levels. Six bosses. One disposable lab per learner.',
    problem:
      'Most beginner web-security practice is a form with a flag field. You learn the payload, not the reasoning that finds it. The interesting part — reading a response, noticing what the server trusts, following that thread — is exactly what a form removes.',
    decision:
      'Make every stage a small working application instead of a quiz, give each learner an isolated container with its own flags, and let the platform orchestrate the disposable instances. The trade-off is weight: this can never be a static demo, and the infrastructure becomes half the project.',
    outcome:
      'Six stages from recon to trust boundaries, thirty levels, six stage bosses and a final chain, XP, progression and a leaderboard, admin tooling, and per-user flag suffixes derived by HMAC so a shared answer is useless.',
    metrics: [
      { value: '06', label: 'Stages' },
      { value: '30', label: 'Levels' },
      { value: '07', label: 'Lab apps' },
      { value: '04', label: 'Service tiers' },
    ],
    stack: ['Python', 'Flask', 'SQLite', 'Docker', 'Traefik', 'Waitress'],
    highlights: [
      'Six stages and thirty levels, each with its own working application',
      'Per-user HMAC flag suffixes; a shared answer is already dead',
      'Disposable lab containers behind a Traefik edge, read-only runtime',
    ],
    links: [{ label: 'Private repository', note: 'Walkthrough on request' }],
    note: 'The source is private. I am happy to walk through the orchestration, the lab isolation, or the per-user flag derivation on a call.',
    snippet: {
      file: 'webxploit/flags.py',
      lang: 'python',
      code: `def derive_suffix(secret, kind, challenge_id, user_id):
    raw = f"{kind}:{challenge_id}:{user_id}".encode()
    return hmac.new(
        secret.encode(), raw, hashlib.sha256
    ).hexdigest()[:6]

# A flag copied from a friend is already dead.`,
    },
    accent: 'red',
  },
  {
    id: 'sentinel',
    issue: '02',
    title: 'SENTINEL',
    kicker: 'RECON TOOL',
    year: '2026',
    role: 'Solo — design, engine, CLI',
    status: 'v1.0 · Public',
    tagline: 'Directory enumeration without the archaeology.',
    summary: 'One async scanner. The filters that matter. Four report formats. No ceremony.',
    problem:
      'Directory discovery is usually the first real step of a web test, and the popular tools carry years of options. For a lab, a CTF, or a small scope, configuring the tool becomes more work than the target.',
    decision:
      'Keep the engine async and the surface small: status, size, word and line filters, soft-404 calibration, recursion, proxy support. Remove the ASCII art and the progress theatre. The trade-off is deliberate — no plugin ecosystem, and no advanced fuzzing.',
    outcome:
      'A 533-line Python package with 25 CLI options, four report formats, recursive scanning, and a v1.0 that prints one target line, the matching results, and a count. Installable with pipx; usable through Burp.',
    metrics: [
      { value: '25', label: 'CLI options' },
      { value: '04', label: 'Report formats' },
      { value: '09', label: 'Core modules' },
      { value: '1.0', label: 'Release' },
    ],
    stack: ['Python', 'aiohttp', 'Typer', 'Rich', 'pytest'],
    highlights: [
      'Async engine with concurrency and rate limits',
      'Soft-404 calibration, recursion, filters, Burp proxy',
      'JSON, JSONL, CSV and TXT reports from one scan',
    ],
    links: [
      {
        label: 'GitHub repository',
        href: 'https://github.com/Anant-Chill-Guy/Sentinel',
      },
    ],
    note: 'Built for authorized testing only. Sentinel does not exploit anything — it performs HTTP path discovery and reports what answered.',
    snippet: {
      file: 'terminal',
      lang: 'bash',
      code: `sentinel scan \\
  -u "https://target.tld" \\
  -w common.txt \\
  -mc 200,301,302,401,403 \\
  --recursive --max-depth 2 \\
  -o reports/scan.json --format json`,
    },
    accent: 'green',
  },
];

export const skillGroups = [
  {
    title: 'WEB',
    subtitle: 'Where trust leaks',
    icon: 'web',
    skills: [
      'Injection: SQL, NoSQL, template',
      'Authentication & session flaws',
      'Access control & IDOR',
      'SSRF & request smuggling',
      'File, path & upload handling',
      'API testing',
    ],
  },
  {
    title: 'NETWORK',
    subtitle: 'Where the map ends',
    icon: 'network',
    skills: [
      'Recon & enumeration',
      'Active Directory',
      'Windows & Linux internals',
      'Privilege escalation',
      'Pivoting & tunnelling',
      'Traffic analysis',
    ],
  },
  {
    title: 'CODE',
    subtitle: 'What I build with',
    icon: 'code',
    skills: ['Python', 'C / C++', 'Bash', 'JavaScript', 'Flask', 'Docker & Arch Linux'],
  },
  {
    title: 'ARSENAL',
    subtitle: 'What I reach for',
    icon: 'arsenal',
    skills: [
      'Burp Suite',
      'Nmap',
      'Metasploit',
      'Wireshark',
      'BloodHound',
      'Impacket',
      'ffuf',
      'Hashcat',
      'NetExec',
      'sqlmap',
    ],
  },
];

export const ctf = [
  { place: '3rd', event: '07CTF 2026', division: 'Human Division', year: '2026' },
  { place: '4th', event: 'Hack Or Crack 2.0', division: 'CTF 2026', year: '2026' },
  { place: '7th', event: 'Jail CTF 2026', division: 'Human Division', year: '2026' },
  { place: '10th', event: 'Aerospace StarPwn', division: '@ DEFCON', year: '2026' },
  { place: '10th', event: 'MythX Offline CTF', division: 'International', year: '2026' },
];

export const platforms = [
  { name: 'TryHackMe', handle: 'kr4k3nby735', href: profile.tryhackme, note: 'Guided rooms, AD & web paths' },
  { name: 'Hack The Box', handle: 'kR444k3n', href: profile.hackthebox, note: 'Boxes, labs, real attack chains' },
  { name: 'CyLab Academy', handle: 'kr4k3nx', href: profile.cylab, note: 'Hands-on labs & training' },
];

export const tools = [
  'Metasploit',
  'Wireshark',
  'BloodHound',
  'Impacket',
  'ffuf',
  'Hashcat',
  'NetExec',
  'Subfinder',
  'sqlmap',
  'Hydra',
  'John the Ripper',
  'Burp Suite',
  'Nmap',
];

export const navItems = [
  { id: 'origin', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'powers', label: 'Capabilities' },
  { id: 'record', label: 'Achievements' },
  { id: 'signal', label: 'Contact' },
];
