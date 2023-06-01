import "./style.css";
import AbstractShareButton from "./components/AbstractShareButton";
import ShareButtonTwitter from "./components/ShareButtonTwitter";
import ShareButtonFacebook from "./components/ShareButtonFacebook";
import ShareButtonLinkedIn from "./components/ShareButtonLinkedIn";
import ShareButtonPrint from "./components/ShareButtonPrint";

import DOMEventHandler from "./components/DOMEventHandler";
import MockEventHandler from "./components/MockEventHandler";

const eventHandler = new DOMEventHandler();

const url = "https://youtube.com/@RodrigoBranas"
const twitter: AbstractShareButton = new ShareButtonTwitter(eventHandler, ".btn-twitter", url);
twitter.bind();
const facebook: AbstractShareButton = new ShareButtonFacebook(eventHandler, ".btn-facebook", url);
facebook.bind();
const linkedIn: AbstractShareButton = new ShareButtonLinkedIn(eventHandler, ".btn-linkedin", url);
linkedIn.bind();
const print: AbstractShareButton = new ShareButtonPrint(eventHandler, ".btn-print");
print.bind();
