import Link from 'next/link'
import logo from '@/assets/logo.png'
import logoCss from "./main-header.module.css"
import Image from 'next/image'
import MainHeaderBackground from './main-header-background'
import NavLink from './nav-link'

const MainHeader = () => {
    return (
        <>
            <MainHeaderBackground />
            <header className={logoCss.header}>
                <Link href="/" className={logoCss.logo}>
                    <Image src={logo} alt="Food served on Plate" priority />
                    <label>Next Level Food!</label>
                </Link>

                <nav className={logoCss.nav}>
                    <ul>
                        <li><NavLink href='/meals'>Meals</NavLink></li>
                        <li><NavLink href='/community'>Community</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default MainHeader