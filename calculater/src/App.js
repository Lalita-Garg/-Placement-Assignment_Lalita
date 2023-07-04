import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, ButtonGroup, NavItem, Navbar, ButtonToggle, Form, Input, FormGroup, InputGroup } from 'reactstrap';
import './App.css';


function App() {
  const [value, setValue] = useState("");
  return (
    <div className="app">
      <div className='app_calculater'>
        <FormGroup >
          <Form>
            <Input  type='textarea'  value={value} className='input-value'/>
            <div className='input-btn-group'>
              <Input type='button' color='primary' className='input-btn' value={"AC"} onClick={e => setValue("")}/>
              <Input type='button' color='primary' className='input-btn' value={"DEL"} onClick={e => setValue(value.slice(0,-1))}/>
              <Input type='button' color='primary' className='input-btn' value={"."} onClick={e => setValue(value + e.target.value)}/>
              <Input type='button' color='primary' className='input-btn' value={"/"} onClick={e => setValue(value + e.target.value)}/>
            </div>
            <div className='input-btn-group'>
              <Input type='button' color='primary' className='input-btn' value={"7"}  onClick={e => setValue(value + e.target.value)} />
              <Input type='button' color='primary' className='input-btn' value={"8"} onClick={e => setValue(value + e.target.value)}/>
              <Input type='button' color='primary' className='input-btn' value={"9"} onClick={e => setValue(value + e.target.value)}/>
              <Input type='button' color='primary' className='input-btn' value={"*"} onClick={e => setValue(value + e.target.value)}/>
            </div>
            <div className='input-btn-group'>
              <Input type='button' color='primary' className='input-btn' value={"4"} onClick={e => setValue(value + e.target.value)}/>
              <Input type='button' color='primary' className='input-btn' value={'5'} onClick={e => setValue(value + e.target.value)}/>
              <Input type='button' color='primary' className='input-btn' value={'6'} onClick={e => setValue(value + e.target.value)}/>
              <Input type='button' color='primary' className='input-btn' value={"+"} onClick={e => setValue(value + e.target.value)}/>
            </div>
            <div className='input-btn-group'>
              <Input type='button' color='primary' className='input-btn' value={"1"} onClick={e => setValue(value + e.target.value)}/>
              <Input type='button' color='primary' className='input-btn' value={"2"} onClick={e => setValue(value + e.target.value)}/>
              <Input type='button' color='primary' className='input-btn' value={"3"} onClick={e => setValue(value + e.target.value)}/>
              <Input type='button' color='primary' className='input-btn' value={"-"} onClick={e => setValue(value + e.target.value)}/>
            </div>
            <div className='input-btn-group' style={{justifyContent:'left'}}>
              <Input type='button' color='primary' className='input-btn' value={"0"} style={{marginRight:25}} onClick={e => setValue(value + e.target.value)}/>
              <Input type='button' color='primary' className='input-btn' value={"="} onClick={e => setValue(eval(value))}/>

            </div>

          </Form>
        </FormGroup>

      </div>

    </div>
  );
}

export default App;
