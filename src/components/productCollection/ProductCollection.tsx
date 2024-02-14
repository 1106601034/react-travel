import React from "react";
import styles from "./ProductCollection.module.css";
import { Row, Col, Divider } from "antd";
import { ProductImage } from "./ProductImage";

interface PropsType {
    string: [JSX.Element, string];
    sideImage: string;
    products: any[];
}

export const ProductCollection: React.FC<PropsType> = ({ string, sideImage, products }) => {
    return (
        <div className={styles.content}>
            <Divider orientation="left">{string[0]}</Divider>
            <Row>
                <Col span={4}>
                    <img src={sideImage} className={styles["side-image"]} alt="" />
                </Col>
                <Col span={20}>
                    <Row>
                        <Col span={12}>
                            <ProductImage
                                id={products[0].id}
                                size={"large"}
                                productImageString={[products[0].title, string[1]]}
                                imageSrc={products[0].touristRoutePictures[0].url}
                                price={products[0].price}
                            />
                        </Col>
                        <Col span={12}>
                            <Row>
                                <Col span={12}>
                                    <ProductImage
                                        id={products[1].id}
                                        size="small"
                                        productImageString={[products[1].title, string[1]]}
                                        imageSrc={products[1].touristRoutePictures[0].url}
                                        price={products[1].price}
                                    />
                                </Col>
                                <Col span={12}>
                                    <ProductImage
                                        id={products[2].id}
                                        size="small"
                                        productImageString={[products[2].title, string[1]]}
                                        imageSrc={products[2].touristRoutePictures[0].url}
                                        price={products[2].price}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <ProductImage
                                        id={products[3].id}
                                        size="small"
                                        productImageString={[products[3].title, string[1]]}
                                        imageSrc={products[3].touristRoutePictures[0].url}
                                        price={products[3].price}
                                    />
                                </Col>
                                <Col span={12}>
                                    <ProductImage
                                        id={products[4].id}
                                        size="small"
                                        productImageString={[products[4].title, string[1]]}
                                        imageSrc={products[4].touristRoutePictures[0].url}
                                        price={products[4].price}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <ProductImage
                                id={products[5].id}
                                size="small"
                                productImageString={[products[5].title, string[1]]}
                                imageSrc={products[5].touristRoutePictures[0].url}
                                price={products[5].price}
                            />
                        </Col>
                        <Col span={6}>
                            <ProductImage
                                id={products[6].id}
                                size="small"
                                productImageString={[products[6].title, string[1]]}
                                imageSrc={products[6].touristRoutePictures[0].url}
                                price={products[6].price}
                            />
                        </Col>
                        <Col span={6}>
                            <ProductImage
                                id={products[7].id}
                                size="small"
                                productImageString={[products[7].title, string[1]]}
                                imageSrc={products[7].touristRoutePictures[0].url}
                                price={products[7].price}
                            />
                        </Col>
                        <Col span={6}>
                            <ProductImage
                                id={products[8].id}
                                size="small"
                                productImageString={[products[8].title, string[1]]}
                                imageSrc={products[8].touristRoutePictures[0].url}
                                price={products[8].price}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}