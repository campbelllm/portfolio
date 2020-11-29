import React from 'react';
import './ToggleSwithStyle.css'
import {useHistory} from 'react-router-dom'

export default function Switches() {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: true,
  });
  const [switchState, setSwitchState] = React.useState(false);
  const history = useHistory();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    if (switchState) {
      history.push('/dark');
      setSwitchState(false);
    } else {
      setSwitchState(true);
      history.push('/');
    }
  };

  return (
    <div>
     <label class="switch" checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}>
  <input type="checkbox"/>
  <span class="slider"></span>
</label>
    </div>
  );
}
