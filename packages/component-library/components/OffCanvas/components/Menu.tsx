import classNames from "classnames"
import * as React from "react"

const styles = require("./Menu.module.scss")

type MenuProps = {
  links: any[]
}

const Menu = ({ links }: MenuProps) => {
  const indexOfFirstSecondaryLink = links.findIndex(
    link => link.props.secondary
  )

  return (
    <nav className={styles.links}>
      <ul>
        {links.map((link, index) => (
          <li
            key={link.key || index}
            className={classNames(styles.child, {
              [styles.active]: link.props.active,
              [styles.secondary]: link.props.secondary,
              [styles.first]: index === indexOfFirstSecondaryLink,
            })}
          >
            {link}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
