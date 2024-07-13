import React,{useState} from "react";
import semesters from '../data file/pyqData'

function Pyq(){

    const [visibleSubject, setVisibleSubject] = useState(null);

    const toggleVisibility = (index) => {
        setVisibleSubject(visibleSubject === index ? null : index)
    }

    return(
        <main 
            className="bg-gradient-to-b from-green-100 from-10% to-green-200 to-90% dark:bg-gradient-to-b dark:from-slate-800  dark:to-slate-900 dark:text-white px-5 py-8 md:px-10 dark:border-t-2">
            
            {
                semesters.map((semester, index) => (
                    <div 
                        key={index} className="semester border-2 border-black bg-cyan-50 my-6 rounded-lg overflow-hidden  mx-auto lg:max-w-md md:max-w-md sm:max-w-md">
                        <h2 
                            className="bg-blue-300 px-10 py-3 text-xl "
                            dangerouslySetInnerHTML={{__html: semester.name}}/>

                        {semester.subjects.map((subject,subjectIndex) => (
                            <div key={subjectIndex} className="subject">
                                <div 
                                    className="subject-name pl-10 py-2 cursor-pointer hover:bg-slate-300 duration-200 bg-white/90 dark:bg-slate-600  dark:hover:bg-slate-700 dark:text-white mx-auto border-1   shadow-2xl "
                                    onClick={() => toggleVisibility(`${index}-${subjectIndex}`)}>  

                                    <p>
                                    {`${subject.code} => ${subject.name}`}

                                    </p>                          
                                </div>
                                <div className={`previousYear ${visibleSubject === `${index}-${subjectIndex}` ? 'block' : 'hidden' }  text-center `}>
                                    {
                                        Object.keys(subject.links).map((year)=>(
                                            <div key={year}
                                            className="bg-cyan-100 hover:bg-cyan-200 py-1 font-semibold duration-150 m-2 rounded-md
                                            dark:bg-slate-500 dark:hover:bg-slate-600">
                                              <a href={subject.links[year]} target="_blank" rel="noopener noreferrer" >{year}</a>  
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>                                     
                        ))}
                    </div>
                ))
            }
        </main>
    )
}
export default Pyq;