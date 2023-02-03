import React from "react";
import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./Category.module.css";
import images from "../../img";

const Category = () => {
    const CategoryArray = [
        {
            images: images.creatorbackground8,
            name: "Dynamic Arts",
        },
        {
            images: images.creatorbackground8,
            name: "Sport Arts",
        },
        {
            images: images.creatorbackground8,
            name: "Life Art",
        },
        {
            images: images.creatorbackground8,
            name: "Time Arts",
        },
        {
            images: images.creatorbackground8,
            name: "Animals Art",
        },
        {
            images: images.creatorbackground8,
            name: "Music Arts",
        },
        {
            images: images.creatorbackground8,
            name: "Digital Arts",
        },
        {
            images: images.creatorbackground8,
            name: "Hubby Arts",
        },
        {
            images: images.creatorbackground8,
            name: "Bad Arts",
        },
        {
            images: images.creatorbackground8,
            name: "Nonsense Arts",
        },
        {
            images: images.creatorbackground8,
            name: "Trash Arts",
        },
        {
            images: images.creatorbackground8,
            name: "Tasteful Arts",
        },
    ];
    return (
        <div className={Style.box_category}>
            <div className={Style.category}>
                {CategoryArray.map((el, i) => (
                    <div className={Style.category_box} key={i + 1}>
                        <Image
                            src={el.images}
                            className={Style.category_box_img}
                            alt="Background image"
                            width={350}
                            height={150}
                            style={{objectFit:"cover"}}
                        />

                        <div className={Style.category_box_title}>
                            <span>
                                <BsCircleFill />
                            </span>
                            <div className={Style.category_box_title_info}>
                                <h4>{el.name}</h4>
                                {/* <small>{i + 1}995 NFTS</small> */}
                                <small>N/A NFTs</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;