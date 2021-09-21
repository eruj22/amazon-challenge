import React from "react"
import ContentLoader from "react-content-loader"

const Loader = () => {
  const numberOfLoaders = [0, 1, 2]
  return (
    <div className="loader">
      {numberOfLoaders.map((loader) => (
        <ContentLoader speed={2} viewBox="0 0 400 460" key={loader}>
          <rect x="10" y="10" rx="2" ry="2" width="155" height="16" />
          <rect x="10" y="35" rx="2" ry="2" width="154" height="16" />
          <rect x="10" y="60" rx="2" ry="2" width="154" height="16" />
          <rect x="10" y="90" rx="2" ry="2" width="350" height="350" />
        </ContentLoader>
      ))}
    </div>
  )
}

export default Loader
