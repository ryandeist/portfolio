import React from 'react';
import Ryan from '/images/ryan.jpg'; 

const About: React.FC = () => {
    return (
        <main className="max-w-7xl px-4 mx-auto pt-24 pb-16 text-white">
            <section className="rounded-xl">
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 text-center">
                    about me
                </h1>

                <div className="flex flex-col-reverse md:flex-row items-start gap-8">
                    <div className="w-full md:w-2/5 flex-shrink-0 my-auto">
                        <img
                            src={Ryan} 
                            alt="Ryan Deist"
                            className="rounded-lg shadow-md w-full object-cover"
                        />
                    </div>

                    <div className="w-full md:w-3/4 space-y-6 text-lg leading-relaxed text-white">
                        <p>
                            After leaving a career in recruiting, I pursued software engineering to align my work with what genuinely excites me. I’ve always been technically curious, but once I started coding, I felt a strong internal drive to keep going. I found joy in problem-solving and the rush of getting code to work just right. The more I practiced, the more it clicked. I was constantly thinking about how to improve what I had built. I’m motivated not only by the challenge but also by the satisfaction of creating something useful that others can benefit from.
                        </p>

                        <p>
                            Before engineering, I spent six years in sales leadership at Target, managing the highest-volume store in the Baltimore market, and another five years in recruiting for high-impact technical roles. These fast-paced environments sharpened my communication, problem-solving, and stakeholder management skills. I regularly had to think creatively to hit goals and support my team. Those same soft skills now help me thrive in collaborative engineering environments.
                        </p>

                        <p>
                            Outside of work, I live with my girlfriend of five years in a home we’ve built together. I enjoy gardening, beach trips, watching the Orioles and Jets (through wins and losses), and gaming with friends. I also come from a family of entrepreneurs, which has given me a deep appreciation for business, the value of a strong first impression, and the impact of well-crafted tools. This is something I strive to bring into every project I work on.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
