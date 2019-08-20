// import classnames from "classnames"
import { Icon } from "@cultureamp/kaizen-component-library"
import companyLogo from "@cultureamp/kaizen-component-library/icons/ca-monogram.icon.svg"
import * as React from "react"
import styles from "./Footer.scss"

const Footer: React.SFC = () => (
  <div className={styles.footer}>
    <div className={styles.footerInner}>
      <span>&copy; Culture Amp Pty Ltd</span>
      <a href="https://cultureamp.com" className={styles.logoLink}>
        <Icon
          icon={companyLogo}
          title="Culture Amp"
          desc="Link to Culture Amp site"
          role="img"
        />
      </a>
      <span className={styles.privacy}>
        <a href="https://www.cultureamp.com/privacy-policy/">Privacy</a>
      </span>
      <span className={styles.github}>
        <a href="https://github.com/cultureamp/kaizen-design-system">GitHub</a>
      </span>
    </div>
  </div>
)

export default Footer