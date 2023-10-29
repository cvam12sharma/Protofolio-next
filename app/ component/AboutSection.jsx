"use client";
import React, { useState, useTransition } from "react";
import { TabButton } from "./TabButton";
import Image from 'next/image';



const TAB_DATA=[
    {
        title:"Skills",
        id:"skills",
        content:(
            <ul className="list-disc pl-2">
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwindcss</li>
                <li>
                    JavaScript
                </li>
                <li>React</li>
                <li>MongoDb</li>
            </ul>
        )
    },

{
    title:"Education ",
  id: "education",
  content:(
    <ul className="list-disc pl-2">
        <li>Delhi Public School</li>
        <li>NIT,SRINAGAR</li>
            </ul>
  )
},

{
 title:"Experience",
 id:"experience",
 content:(
    <ul className="list-disc pl-2">
<li>web developer </li>
    </ul>
 )




},
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, starTransition] = useTransition();

    const handleTabChange = (id) => {
        starTransition(() => {
            setTab(id);
        }
        );
    }

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4  xl:gap-16 sm:py-16 xl:px-16">
                <img src="/images/PC.png" width={500} height={500} />
                <div>
                    <h2 className='text-4xl font-bold text-white mb-4'>About me </h2>
                    <p className='text-base lg:text-lg'>
                        Hello, I'm Shivam Sharma, a front-end developer with a passion for crafting digital experiences. Beyond coding,
                        I find joy in watching movies, diving into books,
                        and hitting the gym. Exploring the world of technology and enjoying
                        life's little pleasures is what defines me.I thrive on creating intuitive user interfaces and bringing designs to life with code. My love for storytelling extends from coding to the worlds portrayed in books and movies.
                    </p>
                    <div className='flex flex-row mt-8 justify-between '>
                        <TabButton
                            onClick={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            Skills
                        </TabButton>

                        <TabButton
                            onClick={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            Education
                        </TabButton>
                        <TabButton
                            onClick={() => handleTabChange("experience")}
                            active={tab === "experience"}
                        >
                            Experience
                        </TabButton>

                    </div>
                    <div className="mt-8">{TAB_DATA.find((t)=>t.id==tab).content } 
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;