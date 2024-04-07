'use client'
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import axios from "axios";
import "./style.css"

const Page = () => {
    const [question, setQuestion] = useState("");
    const [topic, setTopic] = useState("");
    const [showEvaluation, setShowEvaluation] = useState(false);
    const [result, setResult] = useState("");
    const [evaluation, setEvaluation] = useState("");


    useEffect(() => {
        async function fetchQuestion() {
            try {
                const response = await axios.get('https://5d2b-34-16-144-10.ngrok-free.app/getQues');
                if (response.data && typeof response.data === 'object' && response.data.hasOwnProperty('question')) {
                    setQuestion(response.data.question);
                } else {
                    console.error('Invalid response format:', response.data);
                }
            } catch (error) {
                console.error('Error fetching question:', error);
            }
        }
        fetchQuestion();
    }, []);

    const handleSubmit = async () => {
        try {
            const answerElement = document.getElementById('ans') as HTMLTextAreaElement;
            const answer = answerElement ? answerElement.value : '';
            const response = await axios.post('https://5d2b-34-16-144-10.ngrok-free.app/getEvaluation', { response: answer });
            setResult(response.data.response);
            setShowEvaluation(true);
        } catch (error) {
            console.error('Error evaluating response:', error);
        }
    };
    
    const handleNoted = () => {
        setShowEvaluation(false);
    };

    return (
        <>
            <Navbar />
            <div className={`h-screen bg-white flex mt-10`}>
                <div className="w-full text-center mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`w-full text-left ${showEvaluation ? 'make-blur' : ''}`}>
                        <h1 className="text-black text-2xl font-bold leading-9 md:text-3xl">
                            Practice Interview for Data Science
                        </h1>
                    </div>
                    <div className="ques-ans w-[80%] mx-auto">
                        <div className={`ques bg-[#DEDBBC] px-36 py-12 m-5 ${showEvaluation ? 'make-blur' : ''}`}>
                            <h1 id="ques" className="text-black text-2xl font-bold leading-9 md:text-3xl">
                                {question}
                            </h1>
                        </div>
                        <div className={`ans bg-[#DEDBBC] px-5 py-12 m-5 ${showEvaluation ? 'make-blur' : ''}`}>
                            <textarea
                                id="ans"
                                className="appearance-none h-[150px] text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Answer"
                            ></textarea>
                        </div>
                        <div className={`end-sub flex justify-center gap-10 ${showEvaluation ? 'make-blur' : ''}`}>
                            <button
                                type="button"
                                className="inline-flex items-center px-10 py-3 border-[3px] font-semibold bg-white border-[#591E16] text-[#591E16] hover:bg-[#f0f0f0]">
                                <a href="">End test</a>
                            </button>
                            <button
                                id="result"
                                type="button"
                                onClick={handleSubmit}
                                className="inline-flex items-center px-10 py-3 border border-transparent font-semibold text-black bg-[#BA932F] hover:bg-[#a5822a]">
                                Submit
                            </button>
                        </div>
                        {showEvaluation && (
                            <div id="eval-div" className="bg-[#DEDBBC] centered-div px-36 py-12">
                                <h1 className="text-[#591E16] text-2xl font-bold leading-9 md:text-3xl mb-3">
                                    PERFORMANCE
                                </h1>
                                <p id="eval" className="text-black mb-5">good performance</p>
                                <button
                                    id="note"
                                    onClick={handleNoted}
                                    className="inline-flex items-center px-10 py-3 m-5 border border-transparent font-semibold text-black bg-[#BA932F] hover:bg-[#a5822a]"
                                >Noted!
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
