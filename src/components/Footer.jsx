import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faFacebook  } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Footer(){
    return(
        <footer className="footerIcons">
            <FontAwesomeIcon icon={faFacebook} size="2x" className="icons"> </FontAwesomeIcon>
            <FontAwesomeIcon icon={faInstagram} size="2x" className="icons"> </FontAwesomeIcon>
            <FontAwesomeIcon icon={faTwitter} size="2x" className="icons"> </FontAwesomeIcon>
            <FontAwesomeIcon icon={faGithub} size="2x" className="icons"> </FontAwesomeIcon>
        </footer>
    )
}