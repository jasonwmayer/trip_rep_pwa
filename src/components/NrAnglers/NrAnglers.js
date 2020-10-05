import {Divider, TextField} from "@material-ui/core";
import React , {Component} from "react";
import {connect} from "react-redux";
import mapStateToProps from "../../services/mapStateToProps";

class NrAnglers extends Component {
    render() {
            return (
                <>
                    <Divider/>
                    <div className="number-of-crew-ang-container">
                        <TextField
                            label='Number of Anglers:'
                            className="number-of-input"
                            value={this.props.number_of_anglers ? Number(this.props.number_of_anglers) :""}
                            name="number_of_anglers"
                            type="number"
                            min="0" max="999"
                            onChange={e => this.props.handleInputChange(e)}
                        />
                    </div>
                </>
            )
    }
}

export default connect(
    mapStateToProps
)(NrAnglers);
