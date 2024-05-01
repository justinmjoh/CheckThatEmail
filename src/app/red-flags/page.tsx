export default function RedFlags() {
    return (
        <main className="py-8 flex flex-col items-center">
            <div className="w-3/4">
                <h1 className="mb-5 font-bold text-3xl">Warning, live without warning.</h1>
                <p className="mb-5">
                    We are all hopeful that an offer is real. When hopes are high and options 
                    are thin, we tend to overlook telltale signs of a scam. <b>Here are the major 
                    ones:</b>
                </p>
                <ul>
                    <li className="border border-red-500 p-2 mb-5">
                        <h2 className="font-bold text-red-500 mb-2">
                            The e-mail domain is not the company domain
                        </h2>
                        <ul className="list-disc px-4">
                            <li className="mb-2">
                                An emerging scam in the era of remote work is dependent on this red flag.
                                Scammers bank on a lack of understanding of sub-domains. Be weary of e-mails 
                                from addresses like "recruiter@examplecareers.com", as companies rarely use 
                                a unique "careers" domain.
                            </li>
                            <li className="underline">
                                Real companies will often use "example.com" as their main website, and will 
                                use a subdomain like "careers.example.com" for their job-specific e-mails. Check 
                                with the company for specifics.
                            </li>
                        </ul>
                    </li>
                    <li className="border border-red-500 mb-5 p-2">
                        <h2 className="font-bold text-red-500 mb-2">
                            Recruiter seems too eager to hire you
                        </h2>
                        <ul className="list-disc px-4">
                            <li className="mb-2">
                                Not trying to discredit your accomplishments with this one. Realistically, 
                                getting hired takes time, even as the most qualified (or only) candidate. 
                                Be wary of offers that happen unrealistically fast. Its unlikely an offer 
                                will take less than a few weeks, all said and done.
                            </li>
                            <li className="underline">
                                Real companies tend to take time getting back. Be patient, and the validity 
                                of the offer should become more clear.
                            </li>
                        </ul>
                    </li>
                    <li className="border border-red-500 mb-5 p-2">
                        <h2 className="font-bold text-red-500 mb-2">
                            You've never seen a face
                        </h2>
                        <ul className="list-disc px-4">
                            <li className="mb-2">
                                In an era of remote work and time being stretched thinner than thought possible, 
                                it doesn't seem too far-fetched to just skip the live interviews. Scammers pray on 
                                this assumption, especially to new-grads who don't know any better.
                            </li>
                            <li className="underline">
                                The vast majority of the time, at least one live interview will happen before any phrases
                                like "welcome to the team" get thrown around.
                            </li>
                        </ul>
                    </li>
                    <li className="border border-red-500 p-2">
                        <h2 className="font-bold text-red-500 mb-2">
                            The recruiter is invisible
                        </h2>
                        <ul className="list-disc px-4">
                            <li className="mb-2">
                                What's in a name? Well, hopefully something. Statistics show <a className="text-cyan-500 hover:text-cyan-300" href="https://www.linkedin.com/pulse/how-recruiters-find-evaluate-candidates-3wvdf/">95% of recruiters use LinkedIn </a> 
                                to search for candidates. While it is possible that a recruiter is not on the platform, its 
                                something to keep in mind.
                            </li>
                            <li className="mb-2">
                                Start-ups and small companies tend to be the most imitated companies in these scams. Check the actual 
                                company website or Google to see if their name shows up.
                            </li>
                            <li className="underline">
                                Recruiters are typically active on job-posting sites. When in doubt, check if the name can be tied back to the 
                                company.
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </main>
    );
}