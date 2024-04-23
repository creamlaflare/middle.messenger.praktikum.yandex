import Block from "../../tools/Block";

class ErrorLine extends Block {
  render(): string {
    return (`
            <div class="input__text-error">{{errorText}}</div>
        `);
  }
}

export default ErrorLine;