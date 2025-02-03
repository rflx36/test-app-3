import Image from "next/image"
import Link from "next/link"


export default function Header() {

    return (
        <header className="fixed w-full h-12 flex border-bottom-gray-800 border-b items-center justify-center">
            <Link className="px-4 hover:text-gray-800 font-bold text-gray-500 flex " href={"/"}>

                Home
            </Link>
            <Link className="px-4 hover:text-gray-800 font-bold text-gray-500 flex" href={"/register"}>
                <Image
                    aria-hidden
                    src="/window.svg"
                    alt="Window icon"
                    width={16}
                    height={16}
                    className="mr-1"
                />
                Register
            </Link>
            <Link className="px-4 hover:text-gray-800 font-bold text-gray-500 flex " href={"/users"}>
                <Image
                    aria-hidden
                    src="/file.svg"
                    alt="Window icon"
                    width={16}
                    height={16}
                    className="mr-1"
                />
                Check Users
            </Link>
        </header>
    )
}