"use client";

import Carousel from "@/components/ui/carousel";
export function CarouselDemo() {
    const slideData = [
    {
        title: "Issue Tracker",
        button: "Visit",
        // src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        src: "https://mygeneralpurposebuckett.s3.amazonaws.com/issue_tracker.png"
    },
    {
        title: "CSV File Viewer",
        button: "Visit",
        // src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        src: "https://mygeneralpurposebuckett.s3.amazonaws.com/csv_viewer.png"
    },
    {
        title: "E-Commerce API",
        button: "Visit",
        // src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        src: 'https://mygeneralpurposebuckett.s3.amazonaws.com/ecom_api.png'
    },
    {
        title: "MERN E-Commerce Application",
        button: "Visit",
        // src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        src: "https://ninjasfiles.s3.amazonaws.com/asset_0000000000000024_1550237299_codezen.png"
    },
    {
        title: "IPOD in React",
        button: "Visit",
        // src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        src: "https://mygeneralpurposebuckett.s3.amazonaws.com/ipod.png"
    },
    {
        title: "SuperHero Hunter",
        button: "Visit",
        // src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        src: "https://mygeneralpurposebuckett.s3.amazonaws.com/superhero_hunter.png"
    },
    {
        title: "StopWatch",
        button: "Visit",
        // src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        src: "https://mygeneralpurposebuckett.s3.amazonaws.com/stopwatch.png"
    },
    {
        title: "PingPong Game",
        button: "Visit",
        // src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        src: "https://mygeneralpurposebuckett.s3.amazonaws.com/pingpong_game.png"
    },
    ];
    return (
    <div className="relative overflow-hidden w-full h-full pb-20">
        <h1 className="text-center text-6xl p-4">Portfolio</h1>
        <Carousel slides={slideData} />
    </div>
    );
}
