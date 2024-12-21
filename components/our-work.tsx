"use client"
import Slider from "react-slick";
import React from "react";
import Image from "next/image";

// CAROUSEL DATA
interface DataType {
    heading: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        heading: 'Interactive Gym Configurator',
        imgSrc: '/images/EQConf.gif',
    },
    {
        heading: 'Immersive 3D Home Tour',
        imgSrc: '/videos/3DHome_Kitchen.gif',
    },
    {
        heading: 'Immersive 3D Home Tour',
        imgSrc: '/images/Shot 8.jpeg',
    },
    {
        heading: 'Immersive 3D Home Tour',
        imgSrc: '/videos/Kitchen_Swap.gif',
    }
]

interface MultipleItemsData {
    id: string;
}

// CAROUSEL SETTINGS
function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center", background: "rgba(255, 165, 0, 0.4)", padding: "28px", borderRadius: "20px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center", background: "rgba(255, 165, 0, 0.4)", padding: "28px", borderRadius: "20px" }}
            onClick={onClick}
        />
    );
}

const MultipleItems = ({ id }: MultipleItemsData) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        speed: 500,
        nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
        prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    return (
        <div id={id} className="bg-white">
            <div className="mx-auto max-w-7xl sm:py-4 lg:px-8">
                <div className="pt-48 pb-10 text-center md:pt-24">
                    <h3 className="my-2 text-4xl font-bold text-orange-300 sm:text-6xl">Featured works.</h3>
                    <h3 className="my-2 text-4xl font-bold text-orange-300 text-opacity-50 sm:text-6xl lg:mr-48">Featured works.</h3>
                    <h3 className="my-2 text-4xl font-bold text-orange-300 text-opacity-25 sm:text-6xl lg:-mr-32">Featured works.</h3>
                </div>

                <Slider {...settings}>
                    {postData.map((items, i) => (
                        <div key={i}>
                            <div className="pb-12 m-3 my-10 bg-transparent rounded-3xl">
                                <Image src={items.imgSrc} alt="gaby" width={636} height={620} className="rounded-2xl" unoptimized />
                                <div className="w-345">
                                    <h4 className="mt-10 font-bold text-center text-orange-300 sm:text-5xl sm:pt-6 sm:text-start">{items.heading}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default MultipleItems;
