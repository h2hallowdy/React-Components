import React, { Component } from 'react';

export default function(WrappedComponent, opacity = 0.5) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isHovered: false
            };
            this.onMouseEnter = this.onMouseEnter.bind(this);
            this.onMouseLeave = this.onMouseLeave.bind(this);
        }

        onMouseEnter() {
            this.setState({
                isHovered: true
            });
        }

        onMouseLeave() {
            this.setState({
                isHovered: false
            });
        }

        render() {
            return(
                <div
                    style={{
                        opacity: this.state.isHovered ? opacity : 1
                    }}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave} 
                >
                    <WrappedComponent {...this.props} />
                </div>
            );
        }
    }
}