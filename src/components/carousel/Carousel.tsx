import React from "react";
import styles from './Carousel.module.css';
import { Image, Carousel as AntCarousel, } from "antd";

interface PropsType {
    image: any[];
}

export const Carousel: React.FC<PropsType> = ({image}) => {
    return (
        <AntCarousel autoplay className={styles.carousel}>
            <Image src={image[0]} />
            <Image src={image[1]} />
            <Image src={image[2]} />
        </AntCarousel>
    );
};
