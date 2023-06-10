import React, {Component} from "react";

class Footer extends Component {
    getCopyrightString() {
        const currentYear = new Date().getFullYear();
        return currentYear === this.props.initialYear
            ? this.props.initialYear
            : `${this.props.initialYear}-${currentYear}`;
    }

    render() {
        return (
            <footer>
                <p>
                    <small>
                        Source Code &copy; <time id="copyright-current-year">{this.getCopyrightString()}</time> Todd Brentlinger, Santa Cruz, CA, USA. All Rights Reserved.
                    </small>
                </p>
            </footer>
        );
    }
}

export default Footer;
