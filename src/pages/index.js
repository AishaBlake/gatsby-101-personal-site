import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

export default function Home({data}) {

    return (
        <div>
            <h1>Hello, Codeland!</h1>
            <Img fluid={data.codelandImage.childImageSharp.fluid} />
        </div>
    )
}

export const query = graphql`
    query ImageQuery {
        codelandImage: file(relativePath: {eq: "codeland-distributed.png"}) {
            childImageSharp {
                fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;