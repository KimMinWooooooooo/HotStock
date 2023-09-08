import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/hotstocklogo.png";

export default function Navbar() {
    return (
        <header>
            <nav className="mx-auto flex justify-between items-center sm:px-10 px-6 py-2 bg-[#2A509D]">
                <Link href="/">
                    <Image
                        src={logo}
                        alt="logo"
                        width={90}
                        className="object-contain"
                    />
                </Link>
                <div>
                    <Link
                        className="px-5 text-white hover:text-black"
                        href="/ranking"
                    >
                        랭킹
                    </Link>
                    <Link className="px-5 text-white" href="/theme">
                        업종
                    </Link>
                    <Link className="px-5 text-white" href="/aboutus">
                        더보기
                    </Link>
                </div>
            </nav>
        </header>
    );
}