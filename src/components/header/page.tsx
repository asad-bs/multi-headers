import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
    theme?: string;
};


const Header = ({ theme = 'dark' }: HeaderProps) => {


    const darkTheme = `bg-black text-white`
    const lightTheme = `bg-white text-black border-b-[1px]`
    const grayTheme = `bg-gray-500 text-white`


    return (

        <header className={`${theme === 'light' ? lightTheme : theme === 'gray' ? grayTheme : darkTheme} w-full h-[50px] fixed z-[100] flex justify-between items-center px-4 py-2`}>
            <p>{theme === 'light' ? 'Light' : theme === 'gray' ? 'Gray' : 'Dark'} Header</p>
            <div className="flex items-center gap-x-[20px]">
                <Link href={'/'}>Home</Link>
                <Link href={'/dashboard'}>Dashboard</Link>
                <Link href={'/services'}>Services</Link>
                <Link href={'/projects'}>Projects</Link>

                <Image src={`${theme === 'light' ? "/next.svg" : "/vercel.svg"}`} alt="" width={120} height={20} />
            </div>
        </header>
    );
}

export default Header