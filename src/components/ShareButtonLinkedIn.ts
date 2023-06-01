import EventHandler from "./EventHandler";
import AbstractLinkShareButton from "./AbstractLinkShareButton";

export default class ShareButtonLinkedIn extends AbstractLinkShareButton {
    
    constructor(eventHandler: EventHandler, className: string, url: string) {
        super(eventHandler, className, url);
    }

    createLink(): string {
        return `https://linkedin.com/shareArticle?url=${this.url}`;
    }
}