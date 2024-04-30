import Image from "next/image";

export default function NavBar() {

    return (
        <nav className="flex items-center justify-between flex-wrap bg-fuchsia-500 p-6">
            <div className="flex items-center flex-shrink-0 text-black mr-6">
                <Image
                    src="security-user-svgrepo-com.svg"
                    alt="CheckThatEmail Logo"
                    width={50}
                    height={50}
                    priority
                />
                <span className="font-semibold text-xl tracking-tight">CheckThatEmail</span>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <a href="/" className="block mt-4 lg:inline-block lg:mt-0 hover:underline text-black mr-4">
                        Home
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:underline text-black mr-4">
                        Red Flags
                    </a>
                    <a href="/about" className="block mt-4 lg:inline-block lg:mt-0 hover:underline text-black">
                        About
                    </a>
                </div>
            </div>
        </nav>
    );
}