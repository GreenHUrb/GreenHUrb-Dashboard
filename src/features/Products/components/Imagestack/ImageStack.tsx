import React from "react";
import "./ImageStack.scss";

interface IImageStackProps {
    images: string[]
    limit?: number
}

const ImageStack = (props: IImageStackProps) => {
    const { images, limit } = props
    return (
        <div className="image_stack">
            {images.slice(0, limit).map((image, index) => (
                <div className="image_stack_item" key={index}>
                    <img className="image_stack_image" src={image} alt="" />
                </div>
            ))}
            
            ...
        </div>
    );
};

export default ImageStack;
