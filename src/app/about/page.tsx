export default function About() {
    return (
        <main className="py-8 flex flex-col items-center">
            <div className="w-3/4">
                <h1 className="mb-5 font-bold text-3xl">You're probably wondering how we got here.</h1>
                <p className="mb-2">
                    It was a bright sunny morning in the spring of my senior year. 
                    As a soon-to-be computer science graduate, I was eager to 
                    land a job and start building my life. Like all 2024 graduates, 
                    I had no idea what I was in for. Despite having what I thought 
                    to be an impressive resume and a can-do attitude, the dozens 
                    of rejection letters made me wary of when such a job would show itself.
                </p>
                <p className="mb-2">
                    Until this, the one that started it all. An attractive
                    offer at a legitimate (yes, I checked) start-up. They were as 
                    keen to hire me as I was to be hired. After a few weeks of 
                    regular correspondence (even a screening) an offer was handed 
                    to me, paperwork and everything.
                </p>
                <p className="mb-2">
                    Given how fast everything was happening, my excitement was 
                    replaced with skepticism. I was ready to return the paperwork
                    when I decided, strictly out of curiosity, to paste the e-mail 
                    into Google...
                </p>
                <p className="mb-2">
                    Hours on Reddit all but convinced me this was a scam, but I wanted to 
                    be sure. Zero LinkedIn results for that recruiter's name at the company (but
                    hey, not everyone is on LinkedIn right?).
                </p>
                <p className="mb-2">
                    Let's at least see where the e-mail was sent from, surely that will clear 
                    things up. A quick SMTP header parse and reverse IP lookup later... a server in 
                    Palo Alto? That's where the real company operates, but I'm still a little 
                    skeptical. Let's pull the WHOIS record on their domain just to be certain.
                </p>
                <p className="mb-2">
                    Finally, the proof I needed. The domain was registered a mere four days prior to 
                    my offer, yet the company has existed for several years. Their main domain (which did 
                    not have "careers" in the name) was set up several years ago. My rose tinted lenses
                    finally shattered, and the red flags revealed themselves to me. Angry and frustrated, I 
                    went to bed. In the morning, I checked the company's real site only to see a message
                    not there the night prior: "@[company name]careers.com is not a domain we use..."
                </p>
                <p>
                    That brings us to now. I wanted to make a quick, clean site to help those in the 
                    same boat as me. Don't waste your time filling out fake interview exams or feeding
                    your information to the enemy. Don't feel like you have to go learning how SMTP 
                    works, or how to make DNS queries just to (barely) stay safe. Do look for red flags. Do 
                    check that email.
                </p>
            </div>
        </main>
    );
}