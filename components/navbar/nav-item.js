import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const NavItem = ({ label, onclick }) => {
    const router = useRouter()

    return (
        <Link href={label.toLowerCase()} passHref>
            <div className={`flex h-1/6 text-2xl hover:text-Ice ${router.asPath.replace('/', '') === label.toLowerCase() ? 'text-Blue' : 'text-white'}`}
                onClick={onclick}>
                <h1 className="my-auto">{label}</h1>
            </div>
        </Link>
    )
}
export default NavItem;
/*<Link href={label.toLowerCase()}> */
