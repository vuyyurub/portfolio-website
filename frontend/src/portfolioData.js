export const experiences = [
  {
    title: 'Computer Science and Engineering Research Assistant',
    company: 'University of Michigan - College of Engineering',
    date: 'May 2025 – Present',
    bullets: [
      'Conducted a pilot study on a sample dataset of Reddit conversations to investigate how value alignment between users relates to the likelihood of a shift in viewpoint in argumentative discourse',
      'Built a Python program to classify 300+ conversation threads according to Schwartz’s value framework',
      'Analyzed data results with R by running a linear mixed-effects model to predict probability of viewpoint shifts',
      'Collaborated with faculty mentor to synthesize findings, culminating in a research poster presented to 100+ peers'
    ],
    pdf: '/research-poster.pdf',
    logo: '/umich-logo.png',
    skills: [
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'R', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' },
      {name: 'pandas', logo:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg'},
      {name: 'Numpy', logo:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-plain.svg'}
    ]
  },
  {
    title: 'Web Development Team Lead',
    company: 'University of Michigan Multidisciplinary Design Program',
    date: 'Jan 2025 – Present',
    bullets: [
      'Build HIPAA-compliant healthcare platform with React and Flask to provide personalized pregnancy care guidance by offering educational resources, mental health support, and telehealth features',
      'Lead team of 7 students by overseeing code reviews, managing Agile sprints, and collaborating with sponsors',
      'Generated nurse–patient meeting summaries and key findings by fine-tuning OpenAI’s o4-mini model with Retrieval-Augmented Generation (RAG), reducing documentation time by 33%'
    ],
    logo: '/umich-logo.png',
    skills: [
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
      {name:'Redis', logo:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-plain.svg'},
      {name:'Linux', logo:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg'},
      {name:'Oracle', logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg'}
    ]
  },
  {
    title: 'Application Development Intern',
    company: 'Delta Dental of Michigan',
    date: 'May 2024 – April 2025',
    bullets: [
      'Contributed to the development of Angular-based enterprise business application platforms, including a dental provider lookup and a claims patient portal, serving a network of over 500,000 users',
      'Engineered secure Java Spring Boot REST APIs streamlining patient claims processing time by 15%',
      'Automated deployment workflows with Jenkins and Kubernetes for services processing 5,000+ claims monthly',
      'Developed PL/SQL scripts to curate over 3,500 rows in Oracle databases, achieving 100% data accuracy'
    ],
    logo: '/deltadental-logo.png',
    skills: [
      { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      {name: 'Java/Jakarta EE', logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'},
      { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'Maven', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg' },
      { name: 'Oracle', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
      { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
      { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    ]
  }
]


export const projects = [
  {
    name: 'PodifyNews',
    tech: 'React, FastAPI, AWS, Terraform',
    desc: 'Converts articles into podcasts using AWS Polly; infra provisioned with Terraform.',
    githubLink: 'https://github.com/vuyyurub/podcast-converter',
    link: 'https://www.podifynews.com',
    bullets: [
      'Developed website that converts online articles into podcasts with AWS Polly, enabling anytime listening',
      'Provisioned AWS infrastructure with Terrafrom, includign VPC networking, security groups, Application Load Balancer, SSL/TLS via ACM, and EC2 hosting Dockerized services, ensuring consistency across various environments',
      'Configured Nginx reverse proxy and path-based ALB routing to securely serve frontend and API over HTTPS, integrating Auth0 JWT authentication ensuring secure, high-availability access (99.9% uptime)'
    ],
    skills: [
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
      { name: 'Terraform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    ],
    demo:''
  },
  {
    name: 'EC2 Instance Metrics Dashboard',
    tech: 'React, Chart.js, Node.js, AWS',
    desc: 'Dashboard showing EC2 metrics with CloudWatch and Lambda alerts.',
    githubLink: 'https://github.com/vuyyurub/metrics-dashboard',
    link: 'https://metrics-dashboard-two.vercel.app/',
    bullets: [
      'Implemented dynamic EC2 monitoring with AWS CloudWatch metrics',
      'Automated alerts via Lambda for proactive server maintenance',
      'Visualized metrics with Chart.js for real-time tracking'
    ],
    skills: [
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
      { name: 'Chart.js', logo: 'https://www.chartjs.org/media/logo-title.svg' },
      { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    ],
    demo:''
  },
  {
    name: 'Micro-Transit Rideshare Platform (Safe)',
    tech: 'Swift, iOS SDK, PostgreSQL',
    desc: 'Driver MVP with navigation and passenger management.',
    githubLink: 'https://github.com/alportoricensis/Safe',
    link: 'https://github.com/alportoricensis/Safe/wiki',
    bullets: [
      'Developed driver app MVP with real-time navigation and passenger list',
      'Integrated PostgreSQL backend for ride and passenger data',
      'Designed system to optimize driver assignment efficiency'
    ],
    skills: [
      { name: 'Swift', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    ],
    demo:''
  }
]


export const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'C/C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Swift', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
      { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'HTML/CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'R', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' }
    ]
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
      { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
      { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'Jakarta EE', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'JUnit', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg' }
    ]
  },
  {
    title: 'Developer Tools',
    skills: [
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
      { name: 'Terraform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
      { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
      { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
      { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Xcode', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg' },
      { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
      { name: 'Maven', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg' },
      { name: 'RStudio', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rstudio/rstudio-original.svg' }
    ]
  },
  {
    title: 'Database',
    skills: [
      { name: 'Oracle', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'AWS DynamoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dynamodb/dynamodb-original.svg' },
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
    ]
  }
]

export const sectionClasses = [
  "bg-gradient-to-br from-gray-900 via-purple-900 to-black",
  "bg-gradient-to-br from-black via-indigo-900 to-gray-900",
  "bg-gradient-to-br from-gray-900 via-blue-900 to-black",
  "bg-gradient-to-br from-black via-emerald-900 to-gray-900",
  "bg-gradient-to-br from-gray-900 via-pink-900 to-black"
]