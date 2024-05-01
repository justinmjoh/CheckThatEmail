"use client"

import { useState } from "react";

export default function Home() {

    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; // E-mail regex

    const [emailInput, setEmailInput] = useState<string>('');
    const [showInvalidEmail, setShowInvalidEmail] = useState(false);
    const [redFlags, setRedFlags] = useState<string[]>([]);

    async function handleEmailChange(e: any) {
        const value: string = e.target.value;
        if (value.match(re)) {
            setShowInvalidEmail(false);
            // await fastRedFlags(value); // Pass e-mail to red-flag check
        } else if (value.length == 0) {
            setShowInvalidEmail(false); // Hide the e-mail message on empty field
        } else {
            setShowInvalidEmail(true);
        }
        setEmailInput(value);
    }

    
    async function fastRedFlags() {
        setRedFlags([]);
    
        if (!emailInput.match(re)) {
            return;
        }

        const keywords: string[] = ['careers', 'hr', 'jobs']; // Small set of common scam domain keywords
        const domain: string = emailInput.split('@')[1];
        const domainHierarchy: string[] = domain.split("."); // Pieces of domain split from sub-most domain [0] to TLD [length -1]
        const domainName = domainHierarchy[domainHierarchy.length - 2];

        // Iterate over suspicious keywords and check if in domain
        let key: string;
        for (let i = 0; i < keywords.length; i++) {
            key = keywords[i];
            if (domainName.includes(key)) {
                setRedFlags(redFlags => [...redFlags, `Domain contains the keyword "${key}," commonly used to spoof real companies.`]);
                break;
            }
        }

        // Call internal WHOIS API to check for further quick red-flags
        const res = await fetch(`/api/whois?domain=${domain}`);
        const data = await res.json();
    
        if (data["err"] == false) {
            // Check if the domain was recently created
            if (data["monthsSinceCreation"] < 12) {
                setRedFlags(redFlags => [...redFlags, `The domain "${domain}" was created less than a year ago.`]);
            }
        } else if (data["err"] == true ){
            // Check if missing/no WHOIS data was returned
            if (data["errMessage"] == "missing WHOIS data" || data["errMessage"] == "no WHOIS data") {
                setRedFlags(redFlags => [...redFlags, `No WHOIS data could be found for "${domain}"`]);
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
    
    return (
        <main className="py-8 flex flex-col items-center">
            <div className="w-3/4">
                <h1 className="mb-5 font-bold text-3xl">Who can it be now?</h1>
                <p className="mb-5">Does it feel too good to be true? A beacon of light after a year-long storm? In the sea of job postings and waves of e-mails, don't take the bait. Check that e-mail.</p>
                <div className="relative z-0 w-full mb-5 group">
                    <input autoComplete="off" onChange={handleEmailChange} type="email" name="floating_email" id="floating_email" className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer" placeholder=" " required />
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-gray-500 dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">E-mail address</label>
                </div>
                { (showInvalidEmail) ?  <p className="text-yellow-500 mb-5">Enter a valid e-mail address...</p> : null }
                <button onClick={fastRedFlags} className="w-full border border-fuchsia-500 mb-5 hover:bg-fuchsia-500 font-bold hover:text-black transition">Who are they?</button>
                { (redFlags.length != 0) ? redFlagArea : null }
            </div>
        </main>
    );
}
