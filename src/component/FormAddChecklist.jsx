import React, { useState, useRef, forwardRef } from 'react';
import {
  Form, FlexboxGrid, SelectPicker, Input, Schema, ButtonToolbar, Button,
  Panel, DatePicker, InputNumber, CheckboxGroup, Checkbox, RadioGroup, Radio, CheckPicker, Slider, Message, toaster, Row, Grid, Col,
} from 'rsuite';
import { useDispatch } from 'react-redux';
import { createCheckList, lisTareas } from '../app/actions/actions';
import '../styles/containers.css';


const FormAddCheckList = () => {
  const dispatch = useDispatch();
  const comunidades = [
    {
      "label": "Madrid",
      "value": "Madrid",
    },
    {
      "label": "Mallorca",
      "value": "Mallorca",
    },
    {
      "label": "Navarra",
      "value": "Navarra",
    },
    {
      "label": "Cantabria",
      "value": "Cantabria",
    }
  ]
  const priority = [
    {
      "label": "Alta",
      "value": "Alta",
    },
    {
      "label": "Media",
      "value": "Media",
    },
    {
      "label": "Normal",
      "value": "Normal",
    }
  ]
  // const handleInputChange = event => {
  //   console.log(event);
  //   // const { name, value } = event.target;
  //   // setChecklist({ ...checklist, [name]: value })
  // }

  const { ArrayType, NumberType } = Schema.Types;
  const model = Schema.Model({
    skills: ArrayType()
      .minLength(2, 'Please select at least 2 types of Skills.')
      .isRequired('This field is required.'),
    status: ArrayType()
      .minLength(2, 'Please select at least 2 types of Status.')
      .isRequired('This field is required.'),
    level: NumberType().min(5, 'This field must be greater than 5')
  });

  const Field = forwardRef((props, ref) => {
    const { name, message, label, accepter, error, ...rest } = props;
    return (
      <Form.Group controlId={`${name}-10`} ref={ref} className={error ? 'has-error' : ''}>
        <Form.ControlLabel>{label} </Form.ControlLabel>
        <Form.Control name={name} accepter={accepter} errorMessage={error} {...rest} />
        <Form.HelpText>{message}</Form.HelpText>
      </Form.Group>
    );
  });
  const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

  const valueDefault = { comunidad: "", prioridad: "", fecha: new Date(), detalles: "", }
  const formRef = useRef();
  const [formError, setFormError] = useState({});
  const [formValue, setFormValue] = useState(valueDefault);

  const handleSubmit = () => {
    if (!formRef.current) {
      toaster.push(<Message type="error">Error</Message>);
      return;
    }
    // console.log(formValue);
    toaster.push(<Message type="success">Success</Message>);
  };
  // -----------------------------------------------------------------
  const saveChecklist = () => {
    dispatch(createCheckList(formValue));
    dispatch(lisTareas());
  }
  // ------------------------------------------------------------------

  return (
    <Panel bordered header="Nueva Tarea" shaded >
      {/* <FlexboxGrid>
        <FlexboxGrid.Item > */}
      <Form
        ref={formRef}
        onChange={setFormValue}
        onCheck={setFormError}
        formValue={formValue}
        model={model}
      >
        <Grid flux>
          <Row>
            <Col xs={8}>
              <Field name="comunidad" label="Comunidad" accepter={SelectPicker} error={formError.comunidad} data={comunidades} searchable={false} style={{ width: 300, margin: 0 }} />
            </Col>
          </Row>
          <Row>
            <Col xs={8}>
              <Field name="prioridad" label="Prioridad" accepter={SelectPicker} error={formError.prioridad} data={priority} searchable={false} style={{ width: 300, margin: 0 }} />
            </Col>
          </Row>
          <Field
            accepter={DatePicker}
            name="fecha"
            label="Fecha Final"
            errorMessage={formError.createDate}
          />
          <Row>
            <Col xs={8}>
              <Field name="detalles" label="Detalles" error={formError.detalles} accepter={Textarea} style={{ width: 300, margin: 0, Height: 60 }} rows={3} />

              {/* <Form.Group controlId="detalles" ref={formRef} className={formError.detalles ? 'has-error' : ''}>
                <Form.ControlLabel>{ } </Form.ControlLabel>
                <Form.Control />
                <Form.HelpText>{ }</Form.HelpText>
              </Form.Group> */}
              {/* <Input as="textarea" controlId="detalles" label="Detalles" ref={formRef} accepter={Input} error={formError.number} searchable={false} style={{ width: 300, margin: 0 }} rows={3} /> */}


            </Col>
          </Row>
          <Form.Group>
            <Button appearance="primary" onClick={saveChecklist}>
              Submit
            </Button>
          </Form.Group>
        </Grid>
      </Form>
    </Panel>
  );
}



export default FormAddCheckList;