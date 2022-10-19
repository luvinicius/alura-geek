export default class MessageUtils {
    constructor(containerSelector = "ul.messages") {
        this.containerSelector = containerSelector;
    }
    get __container() {
        if (document) {
            return document.querySelector(this.containerSelector);
        } else {
            return null;
        }
    }

    addMessage(text, className = "message--error") {
        const container = this.__container;
  
        if (container) {
            const li = document.createElement("li");
            li.className = `message ${className}`;
            const content = document.createTextNode(text);
            li.appendChild(content);
            container.appendChild(li);
            li.onclick = (ev) => container.removeChild(li);
        }
    }
    addError(text) {
        this.addMessage(text, "message--error");
    }
    addSuccess(text) {
        this.addMessage(text, "message--success");
    }
    addInfo(text) {
        this.addMessage(text, "message--info");
    }
    addWarn(text) {
        this.addMessage(text, "message--warn");
    }
}