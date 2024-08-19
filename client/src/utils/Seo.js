import React from "react"
import {Helmet} from "react-helmet"

export const SEO = ({title, description, meta = []}) => {
 return(
  <Helmet title = {title}
          htmlAttributes={{ lang: "en" }}
          meta={[
        {
          name: `description`,
          content: description,
        },
        ...meta 
      ]}
   />
  )
}

