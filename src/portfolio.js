/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Tanmay Jhunjhunwala",
  title: "Hi all, I'm Tanmay",
  subTitle: emoji(
    "A passionate DevOps, Site Reliability & AWS-Certified Solutions Architect 🚀 | Terraform & GitHub Actions specialist who automates, secures, and cost-optimises hybrid and multi-cloud estates. Brings observability, CI/CD, andagentic AI workflows to unlock continuous innovation"
  ),
  resumeLink:
    "https://cloudwithtanmay.com/resume_tanmay_jhunjhunwala.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/tanmayj-hub",
  linkedin: "https://www.linkedin.com/in/tanmay-j/",
  gmail: "tanmay.work96@outlook.com",
  gitlab: "https://gitlab.com/tanmay.j96",
  instagram: "https://www.instagram.com/tanmay_jhunjhunwala/",
  medium: "https://medium.com/@tanmay.work96",
  stackoverflow: "https://stackoverflow.com/users/30905055/tanmay-j",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AI-POWERED MAVERICK ENGINEERING SCALABLE CLOUD SYSTEMS & AUTOMATING EVERYTHING-AS-CODE",
  skills: [
    emoji("⚡ Architect secure, scalable AWS & hybrid infrastructures"),
    emoji("⚡ Engineer agentic AI workflows with LangGraph & Bedrock Agents"),
    emoji("⚡ Automate Terraform-driven IaC and GitHub Actions CI/CD pipelines"),
    emoji("⚡ Enforce observability, Kubernetes resilience, and FinOps cost control")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Serverless",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-cubes"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Terraform/CDK",
      fontAwesomeClassname: "fas fa-code-branch"
    },
    {
      skillName: "Github-actions",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "IAM Security",
      fontAwesomeClassname: "fas fa-shield-alt"
    },
    {
      skillName: "Agentic AI",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "LangGraph",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Typescript",
      fontAwesomeClassname: "fab fa-js"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "George Brown College",
      logo: require("./assets/images/gbclogo.webp"),
      subHeader: "Post Graduate Certificate in Cloud Computing Technologies",
      duration: "May 2024 - Apr 2025, GPA 3.93",
      // desc: "Built production-grade E-commerce platform on EKS with Node/TypeScript microservices behind ALB, DynamoDB + Cognito for data & auth, GitHub Actions CI/CD, accelerated and secured by CloudFront with WAF.",
      descBullets: [
        "A three-term Ontario graduate certificate that fast-tracks talent into cloud roles through nonstop Azure, AWS and Microsoft 365 labs. Students master Linux/Windows admin, networking, architecture, security and DevOps automation, then prove it in an industry capstone that aligns with AWS SA & Azure Admin/Architect exams."
      ]
    },
    {
      schoolName: "Conestoga College",
      logo: require("./assets/images/conestogalogo.webp"),
      subHeader: "Post Graduate Certificate in Project Management",
      duration: "Sep 2023 - Apr 2024, GPA 3.58",
      // desc: "",
      descBullets: [
        "A two-term Ontario graduate certificate that blends PMBOK® and Agile Scrum in hands-on MS Project labs; as a PMI® ATP, it supplies all PDUs for PMP®, CAPM®, ACP® and RMP® prep and culminates in a portfolio-grade capstone."
      ]
    },
    {
      schoolName: "Vellore Institute of Technology",
      logo: require("./assets/images/vitlogo.webp"),
      subHeader: "Bachelor of Technology in Mechanical Engineering",
      duration: "May 2014 - Apr 2019, GPA 3.18",
      // desc: "",
      descBullets: [
        "ABET-accredited four-year B.Tech that pairs core design, thermofluids & manufacturing with 160+ electives (CFD, robotics, smart manufacturing, renewables); CDIO projects and an industry capstone turn theory into portfolio prototypes for global R&D and plant-floor roles."
        ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "AWS Cloud Architecture", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Infrastructure as Code & CI/CD",
      progressPercentage: "85%"
    },
    {
      Stack: "Containers & Kubernetes",
      progressPercentage: "80%"
    },
    {
      Stack: "Agentic and Generative AI",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Business Sales Consultant",
      company: "Bell Canada",
      companylogo: require("./assets/images/belllogo.webp"),
      date: "Oct 2024 - Present",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Exceeded 120% of monthly quota by architecting bespoke, multi-service connectivity portfolios to each client's ROI objectives.",
        "Leveraged TCO and usage-projection analyses to right-size solutions, elevating ARPU by 30%.",
        "Mentored onboarding consultants through structured solution-architecture playbooks and cost-benefit frameworks."
      ]
    },
    {
      role: "Product Process Specialist",
      company: "Best Buy Canada",
      companylogo: require("./assets/images/bestbuylogo.webp"),
      date: "Oct 2023 - Oct 2024",
      descBullets: [
        "Oversaw high-volume inventory, streamlined cross-department workflows, and sustained 100% stock accuracy while enforcing security controls for high-value assets; earned the Shrink-Prevention Excellence Reward.",
        "Steered Blueprint Team leadership, turning frontline feedback into process improvements that cut stock put-away time by 25% and lifted employee-engagement scores by 15%."
      ]
    },
    {
      role: "Self Employed Broker & Consultant",
      company: "Yarn Trading",
      companylogo: require("./assets/images/yarnlogo.webp"),
      date: "Jan 2021 - Aug 2023",
      descBullets: [
        "Brokered ~US $29 M in annual contracts (60% repeat-clients / 40% new-clients) by applying real-time price analytics and inventory forecasts to optimize trade timing and safeguard margins.",
        "Developed a mobile, real-time order-tracking dashboard that automated confirmations and shortened settlement cycles by 40%, strengthening process automation, data governance, and cost control."
      ]
    },
    {
      role: "AWS Cloud Associate - Project Engineer",
      company: "Wipro Technologies",
      companylogo: require("./assets/images/wiprologo.webp"),
      date: "Oct 2019 - Dec 2020",
      descBullets: [
        "Delivered a zero-downtime migration of legacy RMS systems to AWS (S3, RDS PostgreSQL, EC2, EKS) as part of 60-engineer program, implementing least-privilege IAM roles and VPC security-group controls.", 
        "Containerized 20 + services with Docker, Kubernetes manifests, and AWS CloudFormation, automated blue-green deployments via AWS CodeDeploy and CLI scripts, providing repeatable, scalable release pipelines.", 
        "Built Terraform / CloudFormation modules and CloudWatch alarms that cut environment spin-up time by 70%."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Certifications and milestone achievements that define my professional journey.",

  achievementsCards: [
    {
      title: "AWS Certified Solutions Architect - Associate",
      subtitle:
        "Industry-recognized proof of skill in architecting secure, scalable, cost-optimized AWS cloud solutions—mastering VPC, IAM, EC2, S3, RDS, load balancing, and auto-scaling best practices.",
      image: require("./assets/images/awsSolArchLogo.webp"),
      imageAlt: "AWS Sol Arch Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/3d693336-2f44-4c15-80c8-449343f09b24/public_url"
        }
      ]
    },
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle:
        "Validates foundational cloud fluency—understanding AWS global infrastructure, core services (EC2, S3, Lambda), security & compliance, billing models, and total-cost-of-ownership principles—so teams can confidently launch, govern, and optimize workloads in the AWS Cloud.",
      image: require("./assets/images/awsCloudPrac.webp"),
      imageAlt: "AWS Cloud Prac Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/org/amazon-web-services/badge/aws-certified-cloud-practitioner"
        }
      ]
    },
    {
      title: "AI Agents in LangGraph",
      subtitle: "Specialized credential in building agentic AI pipelines with LangChain’s LangGraph and Tavily—designing node-based graphs, integrating agentic search, adding state persistence & streaming, inserting human-in-the-loop gates, and deploying adaptive chatbots, document processors, and other generative-AI applications.",
      image: require("./assets/images/dlai-celebration-bg.webp"),
      imageAlt: "LangGraph Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://learn.deeplearning.ai/accomplishments/58e065bd-c6e5-4844-82ea-26871061d6bc?usp=sharing"
        }
      ]
    },
    {
      title: "ChatGPT Prompt Engineering for Developers",
      subtitle: "Specialized credential proving proficiency in designing zero-/few-shot and chain-of-thought prompts for GPT-4 and other LLMs—powering tasks like summarization, classification, data extraction, and creative generation—and integrating them into production apps via the OpenAI API, LangChain, and best-practice safety checks.",
      image: require("./assets/images/dlai-celebration-bg1.webp"),
      imageAlt: "Prompt Engg Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://learn.deeplearning.ai/accomplishments/37b35c5c-dc05-402a-b0b0-b9abc74a27b6?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: true, // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Lets Connect!"),
  subtitle: "Want to Collaborate on a project or just say hi? My Inbox is open for all.",
  number: "+1 437-660-8904",
  email_address: "tanmay.work96@outlook.com",
  display: false
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
