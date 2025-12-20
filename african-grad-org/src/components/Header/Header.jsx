import React from "react";
// import agsoLogo from '../assets/images/AGSO_UD.svg';
import agsoLogo from '../../assets/images/AGSO_UD.svg';


function Header() {

    const navItems = [
        {id:1, name: "Home", href: "/"},
        {id:2, name: "About", href: "/about"},
        {id:3, name: "Leadership", href: "/leadership"},
        {id:4, name: "Alumni", href: "/alumni"},
        {id:5, name: "Events", href: "#events"},
        {id:6, name: "Contact", href: "#contact"}
    ];




    return (
        <header>
            <div>
                <div>
                    {/* Logo and Brand! */}
                    <a>
                        {/* Logo! */}
                        <div>
                            <img src={agsoLogo} alt="AGSO University of Delaware"/>
                        </div>
                        {/* Brand */}
                        <div>
                            <h1> AFRICAN GRADUATE STUDENT ORGANIZATION</h1>
                            <p> University of Delaware</p>
                        </div>
                    </a>

                    {/* DeskTop Navigation */}
                    <nav>
                        {navItems.map(item => {
                            return <a key={item.id} href={item.href}> {item.name}</a>
                        })}
                    </nav>

                    {/* CTA Button */}
                    <div>
                        <a href="#contact"> Join AGSO</a>
                    </div>
                </div>
                
            </div>
        </header>
    );
}

export default Header