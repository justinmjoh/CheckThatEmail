import Image from "next/image";
import Link from 'next/link';

export default function NavBar() {

    return (
        <nav className="flex items-center justify-between flex-wrap bg-fuchsia-500 p-6">
            <div className="mr-6">
                <Link className="flex items-center flex-shrink-0 text-black" href="/">
                    <Image
                        src="security-user-svgrepo-com.svg"
                        alt="CheckThatEmail Logo"
                        width={50}
                        height={50}
                        priority
                        />
                    <span className="font-semibold text-xl tracking-tight">CheckThatEmail</span>
                </Link>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 hover:underline text-black mr-4">
                        Home
                    </Link>
                    <Link href="/red-flags" className="block mt-4 lg:inline-block lg:mt-0 hover:underline text-black mr-4">
                        Red Flags
                    </Link>
                    <Link href="/about" className="block mt-4 lg:inline-block lg:mt-0 hover:underline text-black">
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
}