import { LitElement, html } from 'lit-element';
class calendarElement extends LitElement {
    static get properties() {
        return {
            date: { type: Date },
        };
    }

    constructor() {
        super();
        this.date = new Date();
    }
    render() {
        return html`
            <div class="calendar">
                <div class="month-year">
                    <span class="month"> ${this.date.toLocaleString(`en-us`, { month: `long` })}</span>
                    <span class="year">${this.date.toLocaleString(`en-us`, { year: `numeric` })}</span>
                </div>
                <div class="dates">
                    <span class="day">Sun</span>
                    <span class="day">Mon</span>
                    <span class="day">Tue</span>
                    <span class="day">Wed</span>
                    <span class="day">Thu</span>
                    <span class="day">Fri</span>
                    <span class="day">Sat</span>
                    ${this.populateCells().map(
                        date =>
                            html`
                                <span class="date"><button>${date}</button></span>
                            `,
                    )}
                </div>
                <div class="buttons">
                    <button class="previous" @click="${this.previousButtonHandler}">
                        Previous
                    </button>
                    <button class="next" @click="${this.nextButtonHandler}">
                        Next
                    </button>
                </div>
            </div>
        `;
    }

    nextButtonHandler(e) {
        this.date = new Date(this.date.setMonth(this.date.getMonth() + 1));
        console.log(`=========`, this.date.getMonth(), this.date.getFullYear());
    }

    previousButtonHandler(e) {
        this.date = new Date(this.date.setMonth(this.date.getMonth() - 1));
    }

    populateCells() {
        const cells = [];

        // Sunday - Saturday : 0 - 6
        const firstDay = new Date(
            this.date.getFullYear(),
            this.date.getMonth(),
            1,
        ).getDay();
        const lastDate = new Date(
            this.date.getFullYear(),
            this.date.getMonth() + 1,
            0,
        ).getDate();

        for (let i = 0; i < firstDay; i++) {
            cells.push(``);
        }

        for (let i = 0; i < lastDate; i++) {
            cells.push(i + 1);
        }
        return cells;
    }

    createRenderRoot() {
        /**
         * Render template in light DOM. Note that shadow DOM features like
         * encapsulated CSS are unavailable.
         */
        return this;
    }
}

customElements.define(`my-element`, calendarElement);
