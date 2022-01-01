import { faAngular, faCuttlefish, faDocker, faJava, faJs } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Timeline: React.FC = (): JSX.Element => {
    return (
        <div className='flex flex-row justify-center w-full'>
            <div className='flex flex-col my-20 w-2/5'>
                <div className='rounded-xl bg-gray-700 w-full mt-20 text-black'>
                    <div className='flex flex-row pt-2 text-green-500 justify-between'>
                        <div className='font-bold text-base pl-3'>Senior Software Engineer</div>
                        <div className='font-bold italic text-xs pl-3 pt-1 pr-3'>Jan 2021 - Present | 1yr</div>
                    </div>
                    <div className='font-bold italic text-xs pt-1 text-green-500 pl-3'>IFS R&D International (Pvt) Ltd</div>

                    <div className='flex flex-row justify-between text-sm mt-5 mb-2 text-center text-white'>
                        <div className='flex flex-row  text-2xl'>
                            <div className='text-red-600 pl-3'>
                                <FontAwesomeIcon icon={faAngular} />
                            </div>

                            <div className='text-yellow-600 pl-3'>
                                <FontAwesomeIcon icon={faJs} />
                            </div>

                            <div className='text-red-600 pl-3'>
                                <FontAwesomeIcon icon={faJava} />
                            </div>

                            <div className='text-blue-600 text-xl pl-3 pt-1'>
                                <FontAwesomeIcon icon={faCuttlefish} /><span className='text-sm -mt-2'>++</span>
                            </div>

                            <div className='text-red-600 text-xl pl-3 pt-1'>
                                <FontAwesomeIcon icon={faDatabase} />
                                <span className='text-sm pl-2 -mt-2'>PL/SQL</span>
                            </div>

                            <div className='text-blue-400 pl-3  pt-1'>
                                <FontAwesomeIcon icon={faDocker} />
                            </div>

                        </div>
                        <button className='bg-green-600 px-3 py-1  hover:bg-green-800 rounded-full w-30 mr-2'>Highlights</button>
                    </div>

                    {/* <div className='pl-3 text-sm mt-3'>
                            <li className='p-2'>Spearheaded a project to convert a legacy web application to typescript (Angular Framework), which resulted in enhanced user experience and developer experience.</li>
                            <li className='p-2'>Improved web application load time by 60% by implementing virtual scrolling in datatables.</li>
                            <li className='p-2'>Integrated Machine learning APIs and weather forecasting API with existing forecasting applications using C++, Typescript and HTML Canvas which was instrumental in product revenue amplification.</li>
                            <li className='p-2'>Coached a team of 06 members on Agile practices as a SCRUM master, created a collaborative environment and increased team efficiency by 15%.</li>
                            <li className='p-2'>Mentored junior software engineers and shared knowledge about the product, way of working and coding standards.</li>

                        </div> */}
                </div>


                <div className='rounded-xl bg-gray-700 w-full mt-96 text-black'>
                    <div className='flex flex-row pt-2 text-green-500 justify-between'>
                        <div className='font-bold text-base pl-3'>Trainee Software Engineer</div>
                        <div className='font-bold italic text-xs pl-3 pt-1 pr-3'>Feb 2015 - May 2019 | 4yrs  4mos</div>
                    </div>
                    <div className='font-bold italic text-xs pt-1 text-green-500 pl-3'>Sasianet (Pvt) Ltd</div>

                    <div className='flex flex-row justify-between text-sm mt-5 mb-2 text-center text-white'>
                        <div className='flex flex-row  text-2xl'>

                            <div className='text-yellow-600 pl-3'>
                                <FontAwesomeIcon icon={faJs} />
                            </div>

                            <div className='text-red-600 pl-3'>
                                <FontAwesomeIcon icon={faJava} />
                            </div>

                            <div className='text-red-600 pl-3 text-xl pt-1'>
                                <FontAwesomeIcon icon={faDatabase} />
                                <span className='text-sm pl-2 -mt-2'>PL/SQL</span>
                            </div>

                        </div>
                        <button className='bg-green-600 px-3 py-1  hover:bg-green-800 rounded-full w-30 mr-2'>Highlights</button>
                    </div>

                    {/* <div className='pl-3 text-sm mt-3'>
                            <li className='p-2'>Spearheaded a project to convert a legacy web application to typescript (Angular Framework), which resulted in enhanced user experience and developer experience.</li>
                            <li className='p-2'>Improved web application load time by 60% by implementing virtual scrolling in datatables.</li>
                            <li className='p-2'>Integrated Machine learning APIs and weather forecasting API with existing forecasting applications using C++, Typescript and HTML Canvas which was instrumental in product revenue amplification.</li>
                            <li className='p-2'>Coached a team of 06 members on Agile practices as a SCRUM master, created a collaborative environment and increased team efficiency by 15%.</li>
                            <li className='p-2'>Mentored junior software engineers and shared knowledge about the product, way of working and coding standards.</li>

                        </div> */}
                </div>



            </div>

            <div className='flex flex-col items-center justify-center my-20 w-1/5'>
                <div className="w-20 h-20 rounded-full bg-green-500 shadow text-center">
                    <div className='m-3 font-bold'>Present</div>
                </div>

                <div className="h-40 w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
                </div>

                <div className="w-20 h-20 rounded-full bg-green-500 shadow text-center">
                    <div className='m-4 font-bold'>2020</div>
                </div>

                <div className="h-40 w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
                </div>

                <div className="w-20 h-20 rounded-full bg-green-500 shadow text-center">
                    <div className='m-4 font-bold'>2019</div>
                </div>

                <div className="h-40 w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
                </div>

                <div className="w-20 h-20 rounded-full bg-green-500 shadow text-center">
                    <div className='m-4 font-bold'>2015</div>
                </div>




            </div>


            <div className='flex flex-col items-center my-20 w-2/5'>
                <div className='rounded-xl bg-gray-700 w-full mt-80 text-black'>
                    <div className='flex flex-row pt-2 text-green-500 justify-between'>
                        <div className='font-bold text-base pl-3'>Software Engineer</div>
                        <div className='font-bold italic text-xs pl-3 pt-1 pr-3'>Jun 2019 - Dec 2020 | 1yr  7mos</div>
                    </div>
                    <div className='font-bold italic text-xs pt-1 text-green-500 pl-3'>IFS R&D International (Pvt) Ltd</div>

                    <div className='flex flex-row justify-between text-sm mt-5 mb-2 text-center text-white'>
                        <div className='flex flex-row  text-2xl'>

                            <div className='text-yellow-600 pl-4'>
                                <FontAwesomeIcon icon={faJs} />
                            </div>

                            <div className='text-red-600 pl-4'>
                                <FontAwesomeIcon icon={faJava} />
                            </div>

                            <div className='text-blue-600 pl-4 text-xl pt-1'>
                                <FontAwesomeIcon icon={faCuttlefish} /><span className='text-sm -mt-2'>++</span>
                            </div>

                            <div className='text-blue-800 pl-4 text-xl pt-1'>
                                <FontAwesomeIcon icon={faCuttlefish} />#
                            </div>

                            <div className='text-red-600 pl-4 text-xl pt-1'>
                                <FontAwesomeIcon icon={faDatabase} />
                                <span className='text-sm pl-2 -mt-2'>PL/SQL</span>
                            </div>

                        </div>
                        <button className='bg-green-600 px-3 py-1  hover:bg-green-800 rounded-full w-30 mr-2'>Highlights</button>
                    </div>

                    {/* <div className='pl-3 text-sm mt-3'>
                            <li className='p-2'>Spearheaded a project to convert a legacy web application to typescript (Angular Framework), which resulted in enhanced user experience and developer experience.</li>
                            <li className='p-2'>Improved web application load time by 60% by implementing virtual scrolling in datatables.</li>
                            <li className='p-2'>Integrated Machine learning APIs and weather forecasting API with existing forecasting applications using C++, Typescript and HTML Canvas which was instrumental in product revenue amplification.</li>
                            <li className='p-2'>Coached a team of 06 members on Agile practices as a SCRUM master, created a collaborative environment and increased team efficiency by 15%.</li>
                            <li className='p-2'>Mentored junior software engineers and shared knowledge about the product, way of working and coding standards.</li>

                        </div> */}
                </div>
            </div>


        </div>
    );
}

export default Timeline;