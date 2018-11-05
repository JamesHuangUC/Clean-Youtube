import React from 'react';

const Checkbox = props => {
        return (
            <label className="switch">
                <input
                    type="checkbox"
                    id="dark-light-mode"
                    onChange={props.onChangeDark}
                    defaultChecked={props.isCheck}
                />
                <span className="slider round" />
            </label>
        );
}

export default Checkbox;
