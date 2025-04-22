export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
        className: "lg:col-span-1 md:col-span-6 md:row-span-2 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/portfolio/b1.svg",
        spareImg: "",
    },
    // {
    //     id: 2,
    //     title: "I'm very flexible with time zone communications",
    //     description: "",
    //     className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    //     imgClassName: "",
    //     titleClassName: "justify-start",
    //     img: "",
    //     spareImg: "",
    // },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        // className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/portfolio/grid.svg",
        spareImg: "/portfolio/b4.svg",
    },

    {
        id: 5,
        title: "Currently building a Voting App using SocketIO and Next.js",
        description: "The Inside Scoop",
        // className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/portfolio/b5.svg",
        spareImg: "/portfolio/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-3 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "GitTix - Ticketing Reselling Platform",
        des: "A Platform to buy and sell tickets.",
        img: "/portfolio/ticketResell.png",
        iconLists: ["/portfolio/next.svg", "/portfolio/tail.svg", "/portfolio/ts.svg", "/portfolio/node.svg", "/portfolio/mongodb.svg"],
        link: "http://shivamkesarwani.in/",
    },
    {
        id: 2,
        title: "Issue Tracker - Issue Reporting App",
        des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
        img: "/portfolio/issueTracker.png",
        iconLists: ["/portfolio/node.svg", "/portfolio/mongodb.svg"],
        link: "http://shivamkesarwani.in/issuetracker",
    },
    {
        id: 3,
        title: "CSV File Reader",
        des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
        img: "/portfolio/csvfile.png",
        iconLists: ["/portfolio/node.svg"],
        link: "https://csv-upload-9ljq.onrender.com/",
    },
    {
        id: 4,
        title: "BuyBusy ECommerce Application",
        des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
        img: "/portfolio/buybusy.png",
        iconLists: ["/portfolio/re.svg", "/portfolio/firebase.svg"],
        link: "https://busybuy-shivamk001.netlify.app/",
    },
];

export const testimonials = [
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
];

export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/portfolio/cloud.svg",
        nameImg: "/portfolio/cloudName.svg",
    },
    {
        id: 2,
        name: "appwrite",
        img: "/portfolio/app.svg",
        nameImg: "/portfolio/appName.svg",
    },
    {
        id: 3,
        name: "HOSTINGER",
        img: "/portfolio/host.svg",
        nameImg: "/portfolio/hostName.svg",
    },
    {
        id: 4,
        name: "stream",
        img: "/portfolio/s.svg",
        nameImg: "/portfolio/streamName.svg",
    },
    {
        id: 5,
        name: "docker.",
        img: "/portfolio/dock.svg",
        nameImg: "/portfolio/dockerName.svg",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "System Engineer - TCS",
        desc: "Contributed in the end-to-end development of a mission critical data-intensive internal web application.",
        className: "md:col-span-2",
        thumbnail: "/portfolio/exp1.svg",
    },
    {
        id: 2,
        title: "Backend Developer - Growlytics",
        desc: "Contributed in the feature development of Growlytics Application.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/portfolio/exp2.svg",
    },
    {
        id: 3,
        title: "Software Engineer - Kenscio",
        desc: "Designed and developed Kenlyser to monitor email volumes. Contributed to the feature development of Growlytics Application.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/portfolio/exp4.svg",
    },
    // {
    //     id: 4,
    //     title: "Lead Frontend Developer",
    //     desc: "Developed and maintained user-facing features using modern frontend technologies.",
    //     className: "md:col-span-2",
    //     thumbnail: "/exp4.svg",
    // },
];

export const socialMedia = [
    {
        id: 1,
        img: "/portfolio/git.svg",
    },
    {
        id: 2,
        img: "/portfolio/twit.svg",
    },
    {
        id: 3,
        img: "/portfolio/link.svg",
    },
];