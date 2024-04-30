"use client"

import { useState } from "react";


export default function Home() {
    const [emailInput, setEmailInput] = useState<string>('');
    const [showInvalidEmail, setShowInvalidEmail] = useState(false);
    const [redFlags, setRedFlags] = useState<string[]>([]);

    function handleEmailChange(e: any) {
        setRedFlags([]); // Clear old list contents
        const value: string = e.target.value;
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; // E-mail regex
        if (value.match(re)) {
            setShowInvalidEmail(false);
            fastRedFlags(value); // Pass e-mail to red-flag check
        } else if (value.length == 0) {
            setShowInvalidEmail(false); // Hide the e-mail message on empty field
        } else {
            setShowInvalidEmail(true);
        }
        setEmailInput(value);
    }

    
    function fastRedFlags(s: string) {
        const keywords: string[] = ['careers', 'hr', 'jobs']; // Small set of common scam domain keywords
        let domain: string[] = s.split('@')[1].split(".");
        let domainName = domain[domain.length - 2];
        let key: string;
        for (let i = 0; i < keywords.length; i++) {
            key = keywords[i];
            if (domainName.includes(key)) {
                setRedFlags(redFlags => [...redFlags, `Domain contains the keyword "${key}," commonly used to spoof real companies.`]);
                break;
            }
        }
    }
    
    const redFlagArea: JSX.Element = (
        <div className="border p-2 mb-5 border-red-500">
            <p className="text-red-500 font-bold">A few red flags:</p>
            <ul className="list-disc w-3/4 px-4">
                {redFlags.map((el, key) => (<li key={key} className="text-red-500">{el}</li>))}
            </ul>
        </div>
    );


    function handleEmailSubmit() {
        let domain: string = emailInput.split('@')[1];
        console.log(domain)
    }
    
    return (
        <main className="py-8 flex flex-col items-center">
            <div className="w-3/4">
                <h1 className="mb-5 font-bold text-3xl">Sirens.</h1>
                <p className="mb-5">Does it feel too good to be true? A beacon of light after a year-long storm? In the sea of job postings and waves of e-mails, don't take the bait. Check that e-mail.</p>
                <div className="relative z-0 w-full mb-5 group">
                    <input autoComplete="off" onChange={handleEmailChange} type="email" name="floating_email" id="floating_email" className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer" placeholder=" " required />
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-gray-500 dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                { (showInvalidEmail) ?  <p className="text-yellow-500 mb-5">Enter a valid e-mail address...</p> : null }
                { (redFlags.length != 0) ? redFlagArea: null }
                <button onClick={handleEmailSubmit} className="w-full border border-fuchsia-500 mb-5 hover:bg-fuchsia-500 font-bold hover:text-black transition">Who are they?</button>
            </div>
        </main>
    );
}
