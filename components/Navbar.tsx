import Logo from '@/assets/Images/logo.webp';
import { NavbarData } from '@/data/NavbarData';
import { cn } from '@/Utils/Utils';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';

const mont = Montserrat({
    subsets: ['latin'], // Add appropriate subsets if needed
    weight: ['700'], // Specify the weights you need
});

export const Navbar = () => {
    return (
        <div className="flex items-center justify-between px-28 py-10">
            <div className="flex items-center">
                <img src={Logo.src} alt="logo" className='w-56' />
            </div>
            <div className="flex items-center">
                {NavbarData.map((item, index) => (
                    <Link
                        href={item.href}
                        key={index}
                        className={`${mont.className} text-sm text-white px-4 py-6 hover:bg-[#007AFF] transition-all ease-in-out`} // Apply font class here
                    >
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};
