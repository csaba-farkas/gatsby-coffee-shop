import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { FaGulp } from 'react-icons/fa'
import BackgroundSection from '../components/Globals/BackgroundSection'

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />
        <BackgroundSection
            img={data.img.childImageSharp.fluid}
            title="regular joe's"
            styleClass="default-background"
        />
    </Layout>
)

export const query = graphql`
    {
        img: file(relativePath: { eq: "default-background.jpeg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`

export default IndexPage
