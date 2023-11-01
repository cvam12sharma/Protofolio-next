import React from 'react';
import GithubIcon from "/Users/shivamsharma/port-website/public/github.svg";
import LinkedinIcon from "/Users/shivamsharma/port-website/public/linkdin.svg";
import Link from 'next/link';
import Image from 'next/image';


const EmailSection = () => {
    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
 <div className="  absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full blur-lg top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>

            <div>
                <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
                <p className=' text-teal-100 mb-4 max-w-md '>
                    {" "}
                    I m currently looking for new opportunities ,my inbox is open.
                    wheather u have a question or just want to say hi, I'll try my best to get back to you !
                </p>
                <div className='social flex flex-row gap-2'>
                    <Link href="github.com">
                        <Image src='/assets/github.svg' width={23} height={23} alt="Github Icon " />
                    </Link>
                    <Link href="linkedin.com">
                        <Image src='/assests/linkdin.svg' width={34} height={34} alt="linkedin Icon " />
                    </Link>

                </div>
            </div>
            <div className=' flex flex-col '>
                <form className='flex flex-col '>
                    <div className='mb-6'>  <label htmlFor="email" className='text-white text-sm mb-2 font-medium'>Your email</label>
                        <input type="email"
                            id="email"
                            required
                            className=" bg-[#18191E] border  border-black placeholder-white text-gray-500 text-sm rounded-lg block w-full p-2 "
                            placeholder='shivamsharma1212dec@gmail.com' />
                    </div>
                    <div className='mb-6'>                 
                      <label htmlFor="subject" className='text-white text-sm mb-2 font-medium'>Subject</label>
                        <input type="text"
                            id="subject"
                            required
                            className=" bg-[#18191E] border  border-black placeholder-white text-gray-500 text-sm rounded-lg block w-full p-2 "
                            placeholder='just saying hi!!!!' />
                    </div>

                    <div className='mb-6'>                 
                      <label htmlFor="message" className='text-white text-sm mb-2 font-medium'>Message</label>
                        <textarea
                            id=" message"
                    
                            className=" bg-[#18191E] border  border-black placeholder-white text-gray-500 text-sm rounded-lg block w-full p-2 "
                            placeholder='Lets talk about ' />
                    </div>
                    
                    <button
                    type='submit'
                    className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-2 rounded-lg w-full '
                      >
      Send Message
                    </button>
                </form>


            </div>
        </section>
    )
}

export default EmailSection;