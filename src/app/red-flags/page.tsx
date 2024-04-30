export default function RedFlags() {
    return (
        <main className="py-8 flex flex-col items-center">
            <div className="w-3/4">
                <h1 className="mb-5 font-bold text-3xl">Warning, live without warning.</h1>
                <p className="mb-5">
                    We are all hopeful that an offer is real. When hopes are high and options 
                    are thin, we tend to overlook telltale signs of a scam. Here are the major 
                    ones:
                </p>
                <ul>
                    <li className="border border-red-500 text-red-500 p-2 mb-5">
                        <h2 className="font-bold mb-2">
                            The e-mail domain is not the company domain
                        </h2>
                        <ul className="list-disc px-4">
                            <li className="mb-2">
                                An emerging scam in the era of remote work is dependent on this red flag.
                                Scammers bank on a lack of understanding of sub-domains. Be weary of e-mails 
                                from addresses like "recruiter@examplecareers.com", as companies rarely use 
                                a unique "careers" domain.
                            </li>
                            <li className="text-green-500">
                                Real companies will often use "example.com" as their main website, and will 
                                use a subdomain like "recruiter@careers.example.com" as their e-mail. Check 
                                with the company for specifics.
                            </li>
                        </ul>
                    </li>
                    <li className="border border-red-500 text-red-500 p-2">
                        <h2 className="font-bold mb-2">
                            Recruiter seems too eager to hire you
                        </h2>
                        <ul className="list-disc px-4">
                            <li className="mb-2">
                                Not trying to discredit your accomplishments with this one. Realistically, 
                                getting hired takes time, even as the most qualified (or only) candidate. 
                                Be weary of offers that happen unrealistically fast. Its unlikely an offer 
                                will take less than a few weeks, all said and done.
                            </li>
                            <li className="text-green-500">
                                Real companies tend to take time getting back. Be patient, and the validity 
                                of the offer should become more clear.
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </main>
    );
}