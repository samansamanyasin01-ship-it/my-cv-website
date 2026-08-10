export const profile = {
  name: "Saman Yaseen",
  title: "AWS Cloud & DevOps Engineer",
  location: "Lahore, PK",
  experienceStart: "2024-08-01",
  summary:
    "DevOps Engineer with 2 years of hands-on experience in Linux system administration, DevOps, cloud infrastructure, and CI/CD automation. Proven ability to design, deploy, and maintain scalable infrastructure on AWS — spanning EC2, ECS, RDS, S3, VPC, IAM, CloudWatch, and more.",
  focus: [
    "Automated pipelines with GitLab CI/CD, Jenkins, and GitHub Actions",
    "Containerized applications with Docker and Docker Compose",
    "Container orchestration with Kubernetes (basic) and infra as code with Terraform (basic)",
    "Observability with Prometheus, Grafana, Alertmanager, CloudWatch, and Zabbix",
  ],
  education: {
    school: "COMSATS University Islamabad, Lahore Campus",
    degree: "BS Software Engineering",
    years: "2026 – 2029",
  },
};

export const contact = {
  phone: "+92-329-9773408",
  email: "samam.yaseen26@gmail.com",
  location: "Lahore, Pakistan",
};

export const skills = [
  {
    category: "Cloud Platform & Services",
    items: [
      "AWS EC2", "AWS ECS (Fargate)", "AWS Amplify", "AWS Lightsail",
      "AWS Elastic Beanstalk", "AWS RDS (PostgreSQL)", "AWS S3", "AWS ECR",
      "AWS Lambda", "AWS VPC", "AWS IAM", "AWS CloudWatch", "AWS CloudTrail",
      "AWS SNS", "AWS SES", "AWS KMS", "AWS Secrets Manager", "AWS Config",
      "AWS Trusted Advisor", "AWS Route 53", "AWS ELB", "AWS Auto Scaling",
      "AWS NAT Gateway", "AWS Internet Gateway", "AWS VPC Peering",
      "AWS Private Endpoints", "Elastic IP", "EBS", "MongoDB Atlas",
    ],
  },
  {
    category: "DevOps & CI/CD",
    items: ["GitLab CI/CD", "Jenkins", "GitHub Actions", "PM2", "Apache2"],
  },
  {
    category: "Containerization & Orchestration",
    items: ["Docker", "Docker Compose", "Kubernetes (basic)", "Amazon ECR"],
  },
  {
    category: "Infrastructure as Code",
    items: ["Terraform (basic)"],
  },
  {
    category: "Monitoring & Observability",
    items: ["Prometheus", "Grafana", "Alertmanager", "Amazon CloudWatch", "Zabbix"],
  },
  {
    category: "Web Servers & Networking",
    items: ["Apache2", "Cloudflare (DNS & CDN)", "Nginx"],
  },
  {
    category: "Databases & Caching",
    items: ["PostgreSQL", "MongoDB", "MongoDB Atlas", "Redis"],
  },
  {
    category: "Operating Systems",
    items: ["Linux (Ubuntu, Amazon Linux, Fedora, CentOS)"],
  },
  {
    category: "Security",
    items: [
      "AWS IAM", "AWS KMS", "AWS Security Groups", "AWS Secrets Manager",
      "S3 Bucket Policies", "VPC Security", "Resource-Based Policies", "SSL/TLS",
    ],
  },
  {
    category: "Version Control",
    items: ["Git", "GitHub", "GitLab"],
  },
];

// Work experience reframed as project cards, grouped by role
export const projects = [
  {
    role: "AWS Cloud & DevOps Engineer",
    company: "Cyber Braces (Pvt.) Ltd",
    period: "Jan 2025 – Present",
    items: [
      {
        title: "Multi-Environment AWS Infrastructure",
        stack: ["EC2", "ECS (Fargate)", "Amplify", "Lightsail", "RDS", "VPC"],
        description:
          "Designed and managed multi-environment AWS infrastructure spanning EC2, ECS (Fargate), Amplify, Lightsail, and RDS, supporting development and production workloads across public and private subnets within a custom VPC.",
      },
      {
        title: "Secure VPC Architecture",
        stack: ["VPC", "NAT Gateway", "VPC Peering", "Private Endpoints"],
        description:
          "Architected a secure VPC with public/private subnet separation, NAT Gateway, Internet Gateway, VPC Peering (including MongoDB Atlas), private endpoints, and routing tables to control traffic flow across environments.",
      },
      {
        title: "Load-Balanced Microservices on ECS",
        stack: ["ELB", "ECS", "Auto Scaling"],
        description:
          "Configured an Elastic Load Balancer with host-based routing and target groups to distribute traffic across 8 containerized backend microservices running on ECS in private subnets with auto-scaling enabled.",
      },
      {
        title: "Self-Hosted GitLab CI/CD Runner",
        stack: ["GitLab CI/CD", "Docker", "ECR", "ECS"],
        description:
          "Set up a self-hosted GitLab CI/CD runner on a production EC2 instance, enabling automated pipelines for container builds, image pushes to ECR, and ECS deployments.",
      },
      {
        title: "Production Deployment Fleet",
        stack: ["EC2", "PM2", "Apache2", "Amplify", "Cloudflare"],
        description:
          "Deployed and managed 10 services (2 frontend, 8 backend) on EC2 with PM2 and Apache2, plus 2 production frontend apps on AWS Amplify with custom domains configured via Cloudflare DNS.",
      },
      {
        title: "Docker-Based Microservices on ECR/ECS",
        stack: ["Docker", "ECR", "ECS", "CloudWatch"],
        description:
          "Built and maintained a Docker-based microservices architecture with images stored in ECR, deployed to ECS in private subnets with CloudWatch logging, auto-scaling policies, and load balancing.",
      },
      {
        title: "Data Layer: PostgreSQL, MongoDB & Redis",
        stack: ["RDS", "MongoDB Atlas", "Redis", "Jump Server"],
        description:
          "Managed PostgreSQL (RDS in private subnet), MongoDB (EC2 dev / Atlas production), and Redis, with access to private-subnet instances secured through a jump server pattern and security groups.",
      },
      {
        title: "IAM, Encryption & Audit Logging",
        stack: ["IAM", "KMS", "Secrets Manager", "CloudTrail"],
        description:
          "Implemented least-privilege IAM policies, encrypted data at rest with AWS KMS, managed application secrets through Secrets Manager, and enabled CloudTrail for full audit logging.",
      },
      {
        title: "Automated Incident Remediation",
        stack: ["AWS Config", "Lambda", "SNS"],
        description:
          "Configured incident remediation workflows using AWS Config and Lambda functions to automatically respond to policy violations, with SNS alerts on threshold breaches to notify the team.",
      },
      {
        title: "Cost & Reliability Optimization",
        stack: ["Trusted Advisor", "Billing & Cost Mgmt", "Elastic Beanstalk"],
        description:
          "Used AWS Trusted Advisor to optimize cost, performance, security, and fault tolerance, and managed AWS Billing to track spend and set budgets across environments.",
      },
    ],
  },
  {
    role: "Cloud & DevOps Intern",
    company: "CodeTuple Solutions",
    period: "August 2024 – Jan 2025",
    items: [
      {
        title: "Linux Server Administration",
        stack: ["Linux", "systemd", "Log Analysis"],
        description:
          "Administered Linux-based servers: user management, file permissions, package installs, system updates, and process monitoring, with systemd for service configuration.",
      },
      {
        title: "Containerized Dev Environments",
        stack: ["Docker", "Docker Compose"],
        description:
          "Deployed and managed containerized applications using Docker and Docker Compose, writing Dockerfiles and multi-service compose configurations for development environments.",
      },
      {
        title: "Jenkins CI/CD Pipelines",
        stack: ["Jenkins", "PM2"],
        description:
          "Assisted in setting up and maintaining Jenkins CI/CD pipelines for automated build and deployment workflows, and managed app processes on Linux with PM2 clustering and auto-restart.",
      },
      {
        title: "PostgreSQL & Redis Setup",
        stack: ["PostgreSQL", "Redis"],
        description:
          "Installed, configured, and managed PostgreSQL databases (roles, permissions, backups, basic query optimization) and set up Redis for caching in development environments.",
      },
      {
        title: "Zabbix Monitoring Dashboards",
        stack: ["Zabbix"],
        description:
          "Deployed and configured Zabbix monitoring on Linux servers, building dashboards to visualize CPU load, memory usage, disk I/O, and network traffic with alert triggers for critical thresholds.",
      },
      {
        title: "Core AWS Foundations",
        stack: ["EC2", "Lightsail", "RDS", "S3", "VPC"],
        description:
          "Gained hands-on experience with EC2, Lightsail, RDS, S3, and VPC — launching instances, managing SSH access and Elastic IPs, configuring subnets and security groups, and provisioning RDS within a VPC.",
      },
    ],
  },
];
