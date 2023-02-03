import React from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";

//INTERNAL IMPORT
import Style from "./DaysComponents.module.css";
import images from "../../../img";

const DaysComponents = ({ el, i }) => {
    return (
        <div className={Style.daysComponent}>
            <div className={Style.daysComponent_box}>
                <div className={Style.daysComponent_box_img}>
                    <Image
                        src={el.background}
                        className={Style.daysComponent_box_img_img}
                        alt="profile background"
                        width={500}
                        height={300}
                        style={{objectFit:"cover"}}
                    />
                </div>

                <div className={Style.daysComponent_box_profile}>
                    <Image
                        src={images[`creatorbackground${i + 2}`]}
                        alt="profile"
                        width={200}
                        height={200}
                        className={Style.daysComponent_box_img_1}
                        style={{objectFit:"cover"}}
                    />
                    <Image
                        src={images[`creatorbackground${i + 4}`]}
                        alt="profile"
                        width={200}
                        height={200}
                        className={Style.daysComponent_box_img_2}
                        style={{objectFit:"cover"}}
                    />
                    {/* <Image
                        src={images[`creatorbackground${i + 3}`]}
                        alt="profile"
                        width={200}
                        height={200}
                        className={Style.daysComponent_box_img_3}
                        style={{objectFit:"cover"}}
                    /> */}
                </div>

                <div className={Style.daysComponent_box_title}>
                    <h2>Naname Collection</h2>
                    <div className={Style.daysComponent_box_title_info}>
                        <div className={Style.daysComponent_box_title_info_profile}>
                            <Image
                                src={el.user}
                                alt="profile"
                                width={30}
                                height={30}
                                style={{objectFit:"cover"}}
                                className={Style.daysComponent_box_title_info_profile_img}
                            />

                            <p>
                                Creator
                                <span>
                                    Naname
                                    <small>
                                        <MdVerified />
                                    </small>
                                </span>
                            </p>
                        </div>

                        <div className={Style.daysComponent_box_title_info_price}>
                            {/* <small>{i + 4}.255 ETH</small> */}
                            <small>N/A ETH</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DaysComponents;