import { tree } from "next/dist/build/templates/app-page";
import { NextRequest, NextResponse } from "next/server";
import whoiser, { WhoisSearchResult } from "whoiser";

const month: number = 2629746000; // milliseconds in a month

export async function GET(request: NextRequest) { 
    const domain: string | null = request.nextUrl.searchParams.get("domain");

    if (domain != null) {
        const data: WhoisSearchResult = await whoiser(domain);
        const verisignData: WhoisSearchResult = data['whois.verisign-grs.com'] as WhoisSearchResult;
        const cloudflareData: WhoisSearchResult = data['whois.cloudflare.com'] as WhoisSearchResult;
    
        // Check if Verisign or Cloudflare have WHOIS data on the passed domain
        const dnsData = (verisignData != null) ? verisignData : cloudflareData;
        if (dnsData != null) {
            const now: number = Date.now();
            const createdAt = dnsData['Created Date'] as string;
            const updatedAt = dnsData['Updated Date'] as string;
            // Check if WHOISER response was valid for created and updated
            if (createdAt != null && updatedAt != null) {
                const createdAtDate: Date = new Date(createdAt);
                const updatedAtDate: Date = new Date(updatedAt);
                const monthsSinceCreation = Math.floor((now - createdAtDate.getTime()) / month);
                const monthsSinceUpdate = Math.floor((now - updatedAtDate.getTime()) / month);

                return NextResponse.json({
                    "err" : false,
                    "createdAt": createdAt,
                    "updatedAt": updatedAt,
                    "monthsSinceCreation": monthsSinceCreation,
                    "monthsSinceUpdate": monthsSinceUpdate
                });
            } else {
                return NextResponse.json({
                    "err": true, 
                    "errMessage": "missing WHOIS data" 
                });
            }
        } else {
            return NextResponse.json({ 
                "err": true, 
                "errMessage": "no WHOIS data" 
            });
        }
    } else {
        return NextResponse.json({  
            "err": true, 
            "errMessage": "domain is null" 
        });
    }
}