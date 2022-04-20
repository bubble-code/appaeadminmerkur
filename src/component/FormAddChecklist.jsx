import React, { useState } from 'react';
import { Form, InputGroup, Avatar, Input, Toggle, SelectPicker, ButtonToolbar, Button, Panel } from 'rsuite';
import '../styles/containers.css';

const errorPlacementData = [
  { label: 'bottomStart', value: 'bottomStart' },
  { label: 'bottomEnd', value: 'bottomEnd' },
  { label: 'topStart', value: 'topStart' },
  { label: 'topEnd', value: 'topEnd' },
  { label: 'leftStart', value: 'leftStart' },
  { label: 'rightStart', value: 'rightStart' },
  { label: 'leftEnd', value: 'leftEnd' },
  { label: 'rightEnd', value: 'rightEnd' }
];

const errorStyles = errorVisible => {
  return { display: errorVisible ? 'block' : 'none', color: 'red', marginTop: 6 };
};

const FormAddCheckList = () => {
  const [errorVisible, setErrorVisible] = useState(false);
  const [errorPlacement, setErrorPlacement] = useState('bottomStart');
  const errorMessage = errorVisible ? 'This field is required' : null;

  return (
    <Panel bordered header="Nueva Tarea" shaded >
      <Form>
        <Form.Group controlId={'input-2'}>
          <Form.Control
            name="input-2"
            placeholder="Asunto"
            errorMessage={errorMessage}
            errorPlacement={errorPlacement}
          />
        </Form.Group>
        <Form.Group controlId={'input-1'}>
          <InputGroup inside>
            <Form.Control
              name="input-1"
              placeholder="Prioridad"
              errorMessage={errorMessage}
              errorPlacement={errorPlacement}
            />
          </InputGroup>
        </Form.Group>
        <Form.Group>
          <Form.Control name="input-3" placeholder="Custom error messages" />
          <div style={errorStyles(errorVisible)}>{errorMessage}</div>
        </Form.Group>
        <ButtonToolbar>
          <Button appearance="primary">Submit</Button>
          <Button appearance="default">Cancel</Button>
        </ButtonToolbar>
      </Form>
      <hr />
      <div className={'rs-form-control-wrapper'} style={{ width: 300 }}>
        <Input placeholder="Custom error messages" />
        <Form.ErrorMessage show={errorVisible} placement={errorPlacement}>
          {errorMessage}
        </Form.ErrorMessage>
      </div>
      <hr />
      Show Error: <Toggle onChange={setErrorVisible} checked={errorVisible} />
      <SelectPicker
        value={errorPlacement}
        placeholder="errorPlacement"
        data={errorPlacementData}
        cleanable={false}
        onChange={setErrorPlacement}
      />
    </Panel>
  );
}

export default FormAddCheckList;