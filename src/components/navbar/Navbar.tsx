import Image from 'next/image';
import NavLink from './NavLink';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ProfileMenu from './ProfileMenu';
import Logo from './Logo';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';


export default async function TopMenu() {

        const session = await getServerSession(authOptions);

    return (
        <div className="fixed top-0 left-0 right-0 h-[100px] flex items-center justify-between z-[999] px-[8%] backdrop-blur-sm border-b border-white/10 bg-[#0C0C0C]/50">
            <div className="flex items-center gap-[12px]">
                <Logo />
            </div>
            <div className="flex items-center gap-[36px]">
                <NavLink title="Home" pageRef="/home" />
                <NavLink title="Search" pageRef="/search" />

                {
                    session ?
                            <div className='flex items-center gap-[36px]'>
                                <NavLink title="Booked" pageRef="/booked" />
                                <NavLink title="About us" pageRef="/about-us" />
                                <ProfileMenu />
                            </div>
                    :
                        <div className='flex items-center gap-[16px]'>
                            <NavLink title="About us" pageRef="/about-us" />
                            <SignIn title="Sign In" pageRef="/sign-in" />
                            <SignUp title="Register" pageRef="/register" />
                        </div>
                }

            </div>
        </div>
    );
}