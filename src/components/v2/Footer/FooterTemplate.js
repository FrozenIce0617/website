import React from "react"
import { Container } from "reactstrap"
import PropTypes from "prop-types"
import CollapsibleList from "../../CollapsibleList"
import Image from "../../Image"
import Link from "../../Link"

export const FooterTemplate = ({
  images = {},
  emailLink = {},
  navCategories = [],
  copyright = "",
  legalLinks = [],
}) => (
  <footer>
    <Container fluid="md">
      <div className="footer-columns">
        <ul className="footer-column-1">
          <li className="keep-logo">Keep</li>
          <li>
            <a className="email-btn" href={`mailto:${emailLink.email}`}>
              {emailLink.label}
            </a>
          </li>
        </ul>
        {navCategories.map((category, i) => (
          <CollapsibleList
            key={`nav-category-${i}`}
            label={category.title}
            className={`footer-column-${i + 2}`}
          >
            <ul>
              {category.items.map((item, j) => (
                <li key={`nav-category-item-${j}`}>
                  <Link url={item.url}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </CollapsibleList>
        ))}
      </div>
      <div className="footer-bottom">
        <div
          className="copyright"
          dangerouslySetInnerHTML={{ __html: copyright }}
        />
        <ul>
          {legalLinks.map((link, i) => (
            <li key={`legal-link-${i}`}>
              <Link url={link.url}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Image className="half-circle" imageData={images.halfCircle} />
    </Container>
  </footer>
)

FooterTemplate.propTypes = {
  images: PropTypes.object,
  emailLink: PropTypes.object,
  navCategories: PropTypes.array,
  copyright: PropTypes.string,
  legalLinks: PropTypes.array,
}
