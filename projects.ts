interface IProject {
  id: string;
  title: string;
  previewImg: string;
  description: string;
  techUsed: string[];
  features: string[];
  repoLink: string;
  hostedLink: string;
}

// https://github.com/shehza-d/weather
// https://github.com/shehza-d/weather-html
// https://github.com/shehza-d/weather-forecast

export const projects: IProject[] = [
  {
    id: "1",
    title: "Governors Initiative Website",
    previewImg: "",
    description:
      "An official website for Governor Sindh's Initiative for IT, creating a seamless platform for students to apply to the program with student application forms and ID Card functionality. By designing an intuitive interface and integrating a secure database system, I streamlined the application process, resulting in increased efficiency for the Governors Initiative team. This project allowed me to enhance my web development skills while effectively collaborating with stakeholders, delivering a high-quality product that significantly contributed to the program's success.",
    techUsed: ["NextJS 13", "TailwindCSS", "TypeScript"],
    features: ["Dynamic routing", "Form Submission"],
    repoLink: "https://github.com/governor-sindh/website",
    hostedLink: "https://www.governorsindh.com/",
  },
  {
    id: "2",
    title: "News App",
    previewImg:
      "https://res.cloudinary.com/deh1sqok6/image/upload/v1679250971/portfolio-ss/e32i6sdh1mzc72pdawm6.png",
    description: "The News App is a dynamic web application built using ReactJS, incorporating the Bing API to provide real-time news updates and information. The app enables users to stay informed with the latest news on various topics and categories. Utilizing the power of dynamic APIs, the app ensures that the content remains up-to-date and relevant. Users can access the app through the hosted link, where they can explore news articles seamlessly. The project's source code is available on GitHub, promoting collaboration and potential enhancements. Overall, the News App offers a user-friendly and efficient way to access current news information on diverse subjects.",
    techUsed: ["ReactJS", "Dynamic", "API"],
    features: [""],
    repoLink: "https://github.com/shehza-d/news-app/",
    hostedLink: "https://shehzad-news-app.web.app/",
  },
  {
    id: "3",
    title: "Panaverse Website",
    previewImg:
      "https://res.cloudinary.com/deh1sqok6/image/upload/v1679250981/portfolio-ss/tpjt0re3wsw0wajsoemq.png",
    description: "The Panaverse Website is an aesthetically pleasing landing page designed for Panaverse Education. The site boasts a modern and efficient front-end implementation. Notably, it offers a Dark Mode feature, enhancing user experience and accessibility. With a captivating UI, the website effectively showcases the educational services provided by Panaverse Education. Users can seamlessly explore the site through the hosted link, and GitHub repository.",
    techUsed: ["NextJS 13", "TailwindCSS", "TypeScript"],
    features: ["Dark Mode"],
    repoLink: "https://github.com/shehza-d/panaverse-site/",
    hostedLink: "https://panavercity-by-shehzad.vercel.app/",
  },
  {
    id: "4",
    title: "Twitter Clone",
    previewImg: "",
    description: "",
    techUsed: ["ReactJS", "Firebase", "Cloudinary", "netlify"],
    features: [""],
    repoLink: "https://github.com/shehza-d/twitter-clone",
    hostedLink: "https://shehzad-twitter.netlify.app/",
  },
  {
    id: "5",
    title: "CLI Calculator",
    previewImg: "",
    description: "A CLI Calculator based on NodeJS with TypeScript",
    techUsed: ["NODE JS", "TypeScript"],
    features: [""],
    repoLink: "https://github.com/shehza-d/cli-calculator",
    hostedLink: "npx shehzad-cal",
  },
  {
    id: "6",
    title: "Personal Portfolio",
    previewImg: "",
    description: "",
    techUsed: ["NextJS", "TailwindCSS", "TypeScript", "animation CSS"],
    features: [
      "Custom cursor",
      "Drawing name svg on scroll",
      "Only 1 external library used",
      "First app that was designed by me",
    ],
    repoLink: "https://github.com/shehza-d/portfolio",
    hostedLink: "https://shehzad.vercel.app",
  },
  {
    id: "6",
    title: "e commerce store",
    previewImg: "",
    description: "The project is a modern NextJS and TypeScript-based web application focused on delivering a seamless online shopping experience. It features dynamic routing, secure payment integration with Stripe, and efficient content management through Sanity CMS. Utilizing Context API for state management ensures smooth performance. With serverless APIs for backend operations and open-source availability on GitHub, the project showcases a well-structured, scalable, and user-friendly e-commerce platform.",
    techUsed: [
      "NextJS",
      "TypeScript",
      "Stripe",
      "Sanity CMS",
      "Context API",
      "Drizzle ORM",
      "Serverless APIs",
    ],
    features: ["Dynamic Routing", "Payment integration", "Cart functionality"],
    repoLink: "https://github.com/shehza-d/e-commerce",
    hostedLink: "",
  },
  {
    id: "6",
    title: "Forms",
    previewImg: "",
    description: "",
    techUsed: ["ReactJS", "Formik", "Yup", "ExpressJS"],
    features: [""],
    repoLink: "https://github.com/shehza-d/forms",
    hostedLink: "",
  },
  {
    id: "6",
    title: "e commerce components",
    previewImg: "",
    description: "e commerce components for axiom",
    techUsed: [""],
    features: [""],
    repoLink: "https://github.com/shehza-d/axiom",
    hostedLink: "https://axiom-task-1.surge.sh/",
  },
  {
    id: "6",
    title: "",
    previewImg: "Pricing UI",
    description: "Pricing UI with ChakraUI for Practice ",
    techUsed: ["Chakra UI", "NextJS"],
    features: [""],
    repoLink: "https://github.com/shehza-d/pricing-ui-nextjs-chakra",
    hostedLink: "https://pricing-chakra-ui-shehzad.vercel.app/",
  },
  {
    id: "6",
    title: "LinkedIn Prototype",
    previewImg: "",
    description: "",
    techUsed: [""],
    features: [""],
    repoLink: "https://github.com/shehza-d/linkedin-prototype",
    hostedLink: "https://shehzad-react-project.netlify.app/",
  },
  {
    id: "6",
    title: "Expense Tracker",
    previewImg: "",
    description: "",
    techUsed: ["JavaScript", "Firebase"],
    features: [""],
    repoLink: "https://github.com/shehza-d/expense-tracker",
    hostedLink: "https://shehza-d.github.io/expense-tracker/",
  },
  {
    id: "6",
    title: "todo-localstorage",
    previewImg: "",
    description: "",
    techUsed: [""],
    features: [""],
    repoLink: "https://github.com/shehza-d/todo-localstorage",
    hostedLink: "https://shehza-d.github.io/todo-localstorage/",
  },
  {
    id: "6",
    title: "paint-app",
    previewImg: "",
    description: "",
    techUsed: [""],
    features: [""],
    repoLink: "https://github.com/shehza-d/paint-app",
    hostedLink: "https://shehza-d.github.io/paint-app/",
  },
  {
    id: "6",
    title: "",
    previewImg: "",
    description: "",
    techUsed: [""],
    features: [""],
    repoLink: "",
    hostedLink: "",
  },
  {
    id: "6",
    title: "",
    previewImg: "",
    description: "",
    techUsed: [""],
    features: [""],
    repoLink: "",
    hostedLink: "",
  },
  {
    id: "6",
    title: "",
    previewImg: "",
    description: "",
    techUsed: [""],
    features: [""],
    repoLink: "",
    hostedLink: "",
  },

  //   {
  //     id: "6",
  //     title: "",
  //     previewImg: "",
  //     description: "",
  //     techUsed: [""],
  //     features: [""],
  //     repoLink: "",
  //     hostedLink: "",
  //   },
];
