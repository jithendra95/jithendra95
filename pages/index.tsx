import Card from "../components/card/card";
import Timeline from "../components/timeline/timeline";
import Image from "next/image"
import  avatar from "../assets/avatar.png";

function HomePage() {
    return (
        <div className="flex flex-col content-center h-full w-4/6">
            <div className='flex flex-row flex-wrap h-4/5 justify-between'>
                <div className='text-4xl pt-8 w-2/5' >
                    <Image src={avatar} width={250} height={250} className='rounded-full'/>
                </div>

                <div className='my-12 text-left text-lg w-3/5'>
                    <div className='text-4xl font-bold uppercase'>Hi, I am</div>
                    <div className='text-5xl font-bold uppercase pt-4'> Jithendra Thenuwara</div>

                    <div className='text-2xl font-bold pt-4'> A Fullstack Software engineer with 6+ years of Industry experience.</div>

                    {/* I am an experienced software engineer with a proven track record as a full stack engineer. I have worked with a wide range of 
                    programming languages and technologies while being involved in all stages of software development. 
                    I possess strong technical skills as well as excellent communication skills which helps me work well within a team and with a wide range of clients. 
                    I am eager to challenge myself to grow and broaden my technical
                    skills for the benefit of other people and the organization I work for. */}
                </div>
            </div>
            

            <div className='text-4xl w-full  pt-12 text-center'>
                Technical Skills
            </div>

            <div className='text-lg w-full text-gray-400 italic pt-4 text-center'>
                "Click skills to see my level of expertise"
            </div>

            <div className='w-full pt-6 flex flex-row flex-wrap justify-center'>
                <div className='w-1/3 m-3 pt-6 flex flex-col flex-wrap'>
                        <div className='p-5'>
                            <div className='flex flex-row justify-between'>
                                <span>Java</span>
                                <span>90%</span>
                            </div>
                            <div className='w-80 h-1 bg-green-800 relative'>
                                <div className='w-72 h-1 bg-green-600 absolute'></div>
                            </div>
                        </div>

                        
                        <div className='p-5'>
                            <div className='flex flex-row justify-between'>
                                <span>Web Development</span>
                                <span>80%</span>
                            </div>
                            <div className='w-80 h-1 bg-green-800 relative'>
                                <div className='w-64 h-1 bg-green-600 absolute'></div>
                            </div>
                        </div>
                        
                        <div className='p-5'>
                            <div className='flex flex-row justify-between'>
                                <span>Python</span>
                                <span>50%</span>
                            </div>
                            <div className='w-80 h-1 bg-green-800 relative'>
                                <div className='w-44 h-1 bg-green-600 absolute'></div>
                            </div>
                        </div>
                        
                </div>

                <div className='w-1/3 m-3  pt-6 flex flex-col flex-wrap'>
                        <div className='p-5'>
                            <div className='flex flex-row justify-between'>
                                <span>PL/SQL</span>
                                <span>90%</span>
                            </div>
                            <div className='w-80 h-1 bg-green-800 relative'>
                                <div className='w-72 h-1 bg-green-600 absolute'></div>
                            </div>
                        </div>

                        <div className='p-5'>
                            <div className='flex flex-row justify-between'>
                                <span>C++</span>
                                <span>55%</span>
                            </div>
                            <div className='w-80 h-1 bg-green-800 relative'>
                                <div className='w-52 h-1 bg-green-600 absolute'></div>
                            </div>
                        </div>
                </div>
            </div>
            


            <div className='flex flex-row flex-wrap w-full my-20 text-black justify-center'>

                <Card className={'m-3 w-72'} items={["Angular", "React", "Ionic", "Flask", "Next JS","Tailwind"]} title={"Frameworks"} key='1' />

                <Card className={'m-3 w-72'} items={["Java", "Typescript", "C++", "Python", "C#", "PL/SQL"]} title={"Programming Languages"} key='2'/>

                <Card className={'m-3 w-72'} items={["Oracle", "MySQL", "Firebase", "Firestore", "Mongo DB"]} title={"Databases"} key='3'/>
            </div>

            <div className='text-4xl w-full text-center'>
                Experience
            </div>

            <Timeline/>
           

        </div>
    );
    
 }
 
 export default HomePage