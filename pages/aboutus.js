import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "../styles/aboutus.module.css";
import { Brand } from "../components/componentsindex";
import images from "../img";

const aboutus = () => {
    const founderArray = [
        {
            name: "N/A",
            position: "Co-founder and Chief Executive",
            images: images.founder1,
        },
        {
            name: "N/A",
            position: "Co-founder and Chief Executive",
            images: images.founder2,
        },
        {
            name: "N/A",
            position: "Co-founder, Chairman",
            images: images.founder3,
        },
        {
            name: "N/A",
            position: "Co-Founder, Chief Strategy Officer",
            images: images.founder4,
        },
    ];

    const factsArray = [
        {
            title: "N/A",
            info: "Articles have been public around the world (as of 2/2/2023)",
        },
        {
            title: "N/A",
            info: "Registered users account (as of 2/2/2023)",
        },
        {
            title: "N/A",
            info: "Countries and regions have our presence (as of 2/2/2023)",
        },
    ];
    return (
        <div className={Style.aboutus}>
            <div className={Style.aboutus_box}>
                <div className={Style.aboutus_box_hero}>
                    <div className={Style.aboutus_box_hero_left}>
                        <h1>👋 About Us</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <div className={Style.aboutus_box_hero_right}>
                        <Image src={images.hero2} />
                    </div>
                </div>

                <div className={Style.aboutus_box_title}>
                    <h2>⛱ Founder</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                <div className={Style.aboutus_box_founder}>
                    <div className={Style.aboutus_box_founder_box}>
                        {founderArray.map((el, i) => (
                            <div className={Style.aboutus_box_founder_box_img}>
                                <Image
                                    src={el.images}
                                    alt={el.name}
                                    width={100}
                                    height={100}
                                    className={Style.aboutus_box_founder_box_img_img}
                                />
                                <h3>{el.name}</h3>
                                <p>{el.position}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={Style.aboutus_box_title}>
                    <h2>🚀 Fast Facts</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                <div className={Style.aboutus_box_facts}>
                    <div className={Style.aboutus_box_facts_box}>
                        {factsArray.map((el, i) => (
                            <div className={Style.aboutus_box_facts_box_info}>
                                <h3>{el.title}</h3>
                                <p>{el.info}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Brand />
        </div>
    );
};

export default aboutus;