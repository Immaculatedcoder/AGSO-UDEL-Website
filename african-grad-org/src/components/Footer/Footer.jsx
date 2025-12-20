import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Footer() {

    const quickLinks = [
        {id:1, name: "Home", href: "/"},
        {id:2, name: "About Us", href: "/about"},
        {id:3, name: "Leadership", href: "/leadership"},
        {id:4, name: "Events", href: "#events"}
    ];


    return (
        <footer>
            <div>
                {/* Top section */}
                <div>
                    {/* About */}
                    <div>
                        <h3> About AGSO</h3>
                        <p> 
                            The African Graduate Student Organization at the University of 
                            Delaware fosters community, celebrates African culture, and support 
                            graduate students.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3> Quick Links</h3>
                        <ul>
                            {quickLinks.map(links => {
                                return (
                                    <li key={links.id}>
                                        <a href={links.href}> {links.name}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3> Connect With Us</h3>
                        <div>
                            <a href="#"> <InstagramIcon /></a>
                            <a href="#"> <WhatsAppIcon /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer