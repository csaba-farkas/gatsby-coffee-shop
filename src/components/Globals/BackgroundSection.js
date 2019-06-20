import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default function BackgroundSection({
    img,
    styleClass,
    title,
    children,
}) {
    return (
        <BackgroundImage fluid={img} className={styleClass}>
            <h1 className="title text-white text-uppercase text-center diplay-4 font-weight-bold">
                {title}
            </h1>
            {children}
        </BackgroundImage>
    )
}

BackgroundSection.defaultProps = {
    title: 'default title',
    styleClass: 'default-background',
}
