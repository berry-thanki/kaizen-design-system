import classnames from "classnames"
import { graphql, StaticQuery } from "gatsby"
import * as React from "react"
import Tag from "./Tag"
const styles = require("./PageHeader.scss")

type PageHeaderProps = {
  children?: React.ReactNode
  headingText: string | React.ReactNode
  summaryParagraph?: string
  tags?: Array<string>
  headingOnly?: boolean
  headerImageName?: string
}

const PageHeader: React.SFC<PageHeaderProps> = ({
  children,
  headingText,
  summaryParagraph,
  tags,
  headingOnly,
  headerImageName,
}) => (
  <StaticQuery
    query={graphql`
      query PageHeaderImagesQuery {
        amoeba: file(name: { eq: "amoeba" }) {
          publicURL
        }
        emptyStateHeaderImage: file(name: { eq: "empty-state-placeholder" }) {
          publicURL
        }
        headerImages: allFile(
          filter: { sourceInstanceName: { eq: "headerImages" } }
        ) {
          edges {
            node {
              publicURL
              name
            }
          }
        }
      }
    `}
    render={data => {
      const foundImage = data.headerImages.edges.find(
        edge => edge.node.name === headerImageName
      )
      const headerImageURL =
        foundImage !== undefined ? foundImage.node.publicURL : undefined
      const emptyStateHeaderImageURL = data.emptyStateHeaderImage.publicURL

      return (
        <div
          className={classnames({
            [styles.pageHeader]: true,
            [styles.headingOnly]: headingOnly,
          })}
        >
          <div className={styles.pageHeaderInner}>
            {!headingOnly && (
              <div className={styles.sideSection}>
                <div className={styles.image}>
                  <img
                    src={data.amoeba.publicURL}
                    className={styles.imageBackdrop}
                    alt=""
                  />
                  <img
                    src={headerImageURL || emptyStateHeaderImageURL}
                    className={styles.headerImage}
                    alt=""
                  />
                </div>
                <div className={styles.tagsContainer}>
                  {tags && (
                    <>
                      <div className={styles.tagsLabel}>Also known as:</div>
                      <div className={styles.tags}>
                        {tags.map((tagText, i) => (
                          <Tag text={tagText} key={`tag-${i}`} />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
            <div className={styles.mainSection}>
              <h1 className={styles.headingText}>{headingText}</h1>
              {summaryParagraph && (
                <h3 className={styles.summaryParagraph}>{summaryParagraph}</h3>
              )}
              {children}
            </div>
          </div>
        </div>
      )
    }}
  />
)

export default PageHeader
