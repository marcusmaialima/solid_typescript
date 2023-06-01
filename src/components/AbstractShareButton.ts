import EventHandler from "./EventHandler";

export default abstract class AbstractShareButton {
    className: string;
    eventHandler: EventHandler;

    constructor(eventHandler: EventHandler, className: string) {
        this.className = className;
        this.eventHandler = eventHandler;
    }

    abstract createAction(): any;

    bind() {
        const action = this.createAction();
        this.eventHandler.addEventListenerToClass(this.className, 'click', action);
    }
}