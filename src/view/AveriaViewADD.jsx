import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { setOptions, Page, Input, Textarea, Dropdown, localeEs } from '@mobiscroll/react';

setOptions({
  locale: localeEs,
  theme: 'ios',
  themeVariant: 'light'
});

function AveriaViewADD() {
  return (
    <Page>
      <div className="mbsc-grid">
        <div className="mbsc-row mbsc-justify-content-center">
          <div className="mbsc-col-sm-12 mbsc-col-md-8 mbsc-col-xl-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Por favor introduzca bien todos los datos</div>
              <Dropdown inputStyle="outline" labelStyle="stacked" label='Maquina' >
                <option></option>
                <option value="Opel">Opel</option>
                <option value="Renault">Renault</option>
                <option value="Citroen">Citroen</option>
                <option value="Lotus">Lotus</option>
              </Dropdown>
              <Dropdown inputStyle="outline" labelStyle="stacked" label='Tipo de averia' >
                <option></option>
                <option value="Opel">Opel</option>
                <option value="Renault">Renault</option>
                <option value="Citroen">Citroen</option>
                <option value="Lotus">Lotus</option>
              </Dropdown>
              <Dropdown inputStyle="outline" labelStyle="stacked" label='Prioridad' >                
                <option value="Normal">Normal</option>
                <option value="Alta">Alta</option>
                <option value="Baja">Baja</option>
                <option value="Urgente">Urgente</option>
              </Dropdown>
               <Dropdown inputStyle="outline" labelStyle="stacked" label='Estado de la Maquina' >                
                <option value="Encendida">Encendida</option>
                <option value="Fuera de servicio">Fuera de servicio</option>
              </Dropdown>
              <Input inputStyle="outline" labelStyle="stacked" startIcon="user4" label="Taquillero"></Input>
              <Input inputStyle="underline" labelStyle="stacked" startIcon="money" label="Cantidad de dinero pendiente"></Input>
              <Textarea inputStyle="underline" labelStyle="stacked" startIcon="bubble" label="Detalles de la averia"></Textarea>
              <Dropdown inputStyle="underline" labelStyle="stacked" startIcon="plus" >
                <option>Maquina</option>
                <option value="Opel">Opel</option>
                <option value="Renault">Renault</option>
                <option value="Citroen">Citroen</option>
                <option value="Lotus">Lotus</option>
              </Dropdown>
              {/* <Input inputStyle="underline" labelStyle="stacked" type="file" placeholder="Select file..." label="File upload"></Input> */}
            </div>
          </div>
          {/* <div className="mbsc-col-sm-12 mbsc-col-md-8 mbsc-col-xl-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Underline inputs with inline labels</div>
              <Input inputStyle="underline" labelStyle="inline" startIcon="user4" placeholder="Input with label" label="Name"></Input>
              <Input inputStyle="underline" labelStyle="inline" startIcon="material-email" placeholder="With error styling" error="true" label="Email"></Input>
              <Input inputStyle="underline" labelStyle="inline" startIcon="lock2" passwordToggle="true" error="true" errorMessage="An error occurred" type="password" placeholder="With icons and error message"  label="Password"></Input>
              <Input inputStyle="underline" labelStyle="inline" startIcon="empty" placeholder="Without label"></Input>
              <Textarea inputStyle="underline" labelStyle="inline" startIcon="bubble" placeholder="Textarea with left icon" label="About me"></Textarea>
              <Dropdown inputStyle="underline" labelStyle="inline" startIcon="plus" endIcon="close">
                <option>Select with icons</option>
                <option value="Opel">Opel</option>
                <option value="Renault">Renault</option>
                <option value="Citroen">Citroen</option>
                <option value="Lotus">Lotus</option>
              </Dropdown>
              <Input inputStyle="underline" labelStyle="inline" type="file" placeholder="Select file..." label="File upload"></Input>
            </div>
          </div> */}
          {/* <div className="mbsc-col-sm-12 mbsc-col-md-8 mbsc-col-xl-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Underline inputs with floating labels</div>
              <Input inputStyle="underline" labelStyle="floating" startIcon="user4" placeholder="Input with label" label="Name"></Input>
              <Input inputStyle="underline" labelStyle="floating" startIcon="material-email" placeholder="With error styling" error="true" label="Email"></Input>
              <Input inputStyle="underline" labelStyle="floating" startIcon="lock2" passwordToggle="true" error="true" errorMessage="An error occurred" type="password" placeholder="With icons and error message"  label="Password"></Input>
              <Input inputStyle="underline" labelStyle="floating" startIcon="empty" placeholder="Without label"></Input>
              <Textarea inputStyle="underline" labelStyle="floating" startIcon="bubble" placeholder="Textarea with left icon" label="About me"></Textarea>
              <Dropdown inputStyle="underline" labelStyle="floating" startIcon="plus" endIcon="close">
                <option>Select with icons</option>
                <option value="Opel">Opel</option>
                <option value="Renault">Renault</option>
                <option value="Citroen">Citroen</option>
                <option value="Lotus">Lotus</option>
              </Dropdown>
              <Input inputStyle="underline" labelStyle="floating" type="file" placeholder="Select file..." label="File upload"></Input>
            </div>
          </div> */}
        </div>
        {/* <div className="mbsc-row mbsc-justify-content-center">
          <div className="mbsc-col-sm-12 mbsc-col-md-8 mbsc-col-xl-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Outline inputs with stacked labels</div>
              <Input inputStyle="outline" labelStyle="stacked" startIcon="user4" placeholder="Input with label" label="Name"></Input>
              <Input inputStyle="outline" labelStyle="stacked" startIcon="material-email" placeholder="With error styling" error="true" label="Email"></Input>
              <Input inputStyle="outline" labelStyle="stacked" startIcon="lock2" passwordToggle="true" error="true" errorMessage="An error occurred" type="password" placeholder="With icons and error message" label="Password"></Input>
              <Input inputStyle="outline" labelStyle="stacked" startIcon="empty" placeholder="Without label"></Input>
              <Textarea inputStyle="outline" labelStyle="stacked" startIcon="bubble" placeholder="Textarea with left icon" label="About me"></Textarea>
              <Dropdown inputStyle="outline" labelStyle="stacked" startIcon="plus" endIcon="close">
                <option>Select with icons</option>
                <option value="Opel">Opel</option>
                <option value="Renault">Renault</option>
                <option value="Citroen">Citroen</option>
                <option value="Lotus">Lotus</option>
              </Dropdown>
              <Input inputStyle="outline" labelStyle="stacked" type="file" placeholder="Select file..." label="File upload"></Input>
            </div>
          </div> */}
        {/* <div className="mbsc-col-sm-12 mbsc-col-md-8 mbsc-col-xl-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Outline inputs with inline labels</div>
              <Input inputStyle="outline" labelStyle="inline" startIcon="user4" placeholder="Input with label" label="Name"></Input>
              <Input inputStyle="outline" labelStyle="inline" startIcon="material-email" placeholder="With error styling" error="true" label="Email"></Input>
              <Input inputStyle="outline" labelStyle="inline" startIcon="lock2" passwordToggle="true" error="true" errorMessage="An error occurred" type="password" placeholder="With icons and error message"  label="Password"></Input>
              <Input inputStyle="outline" labelStyle="inline" startIcon="empty" placeholder="Without label"></Input>
              <Textarea inputStyle="outline" labelStyle="inline" startIcon="bubble" placeholder="Textarea with left icon" label="About me"></Textarea>
              <Dropdown inputStyle="outline" labelStyle="inline" startIcon="plus" endIcon="close">
                <option>Select with icons</option>
                <option value="Opel">Opel</option>
                <option value="Renault">Renault</option>
                <option value="Citroen">Citroen</option>
                <option value="Lotus">Lotus</option>
              </Dropdown>
              <Input inputStyle="outline" labelStyle="inline" type="file" placeholder="Select file..." label="File upload"></Input>
            </div>
          </div> */}
        {/* <div className="mbsc-col-sm-12 mbsc-col-md-8 mbsc-col-xl-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Outline inputs with floating labels</div>
              <Input inputStyle="outline" labelStyle="floating" startIcon="user4" placeholder="Input with label" label="Name"></Input>
              <Input inputStyle="outline" labelStyle="floating" startIcon="material-email" placeholder="With error styling" error="true" label="Email"></Input>
              <Input inputStyle="outline" labelStyle="floating" startIcon="lock2" passwordToggle="true" error="true" errorMessage="An error occurred" type="password" placeholder="With icons and error message"  label="Password"></Input>
              <Input inputStyle="outline" labelStyle="floating" startIcon="empty" placeholder="Without label"></Input>
              <Textarea inputStyle="outline" labelStyle="floating" startIcon="bubble" placeholder="Textarea with left icon" label="About me"></Textarea>
              <Dropdown inputStyle="outline" labelStyle="floating" startIcon="plus" endIcon="close">
                <option>Select with icons</option>
                <option value="Opel">Opel</option>
                <option value="Renault">Renault</option>
                <option value="Citroen">Citroen</option>
                <option value="Lotus">Lotus</option>
              </Dropdown>
              <Input inputStyle="outline" labelStyle="floating" type="file" placeholder="Select file..." label="File upload"></Input>
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </Page>
  );
}


export default AveriaViewADD;