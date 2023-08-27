// Image and social info and email
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faMailBulk} from "@fortawesome/free-solid-svg-icons"
import picture from "../assets/zayn_wj.png"
let linkedIn = "https://www.linkedin.com/in/daryl-mcafee-1b42991b6/"
let email = "mailto:daryl.mcafee@gmail.com"

export default function Info(){
    return(
        <>
        <img src={picture} className="profilePhoto"/>
        <h1 className="name"> Daryl McAfee </h1>
        <h3 className="title"> Frontend Developer </h3>
        <h4 className="portfolio"> Insert Portfolio Link </h4>
        <div className="buttons">
            <a href={email} target="_blank"> <button className="infoButton"> <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon> Email </button> </a>
            <a href={linkedIn} target="_blank"> <button className="infoButton"> <FontAwesomeIcon icon={faLinkedin}> </FontAwesomeIcon>  LinkedIn </button> </a>
        </div>
        </>
    )
}