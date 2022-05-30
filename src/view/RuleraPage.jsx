import React, { useState } from 'react';
import { Form, Row, Col, Button, Input, PageHeader, Card } from 'antd';
import 'antd/dist/antd.css';
import { PlusCircleFilled } from '@ant-design/icons'

const style = React.CSSProperties = { padding: '8px ,0' };

const RultaPage = () => {
  const [stakeValues, setStakeValues] = useState({});
  function handleChange(e) {
    const { key, value } = e.target;
    setStakeValues({ ...stakeValues, [key]: value });
  }

  return (
    <Col xs={{ span: 24 }} sm={{ span: 18 }} md={{ span: 18 }} lg={{ span: 18 }} xl={{ span: 24 }}>
      <PageHeader className='title-header' title="Roulette Statistics" />
      <Row gutter={14}>
        <Col span={3} className="gutter-row" style={style}>
          <label> Staket</label>
          <Form labelCol={{ span: 1 }} layout="horizontal" initialValues={{ size: "small" }} prefix='Apuestas'>
            <Form.Item name={'St1'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St2'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St3'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St4'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St5'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St6'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St7'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St8'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
          </Form>
        </Col>
        <Col span={3} className="gutter-row" style={style}>
          <label> Win</label>
          <Form labelCol={{ span: 1 }} layout="horizontal" initialValues={{ size: "small" }} prefix='Apuestas'>
            <Form.Item name={'St1'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St2'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St3'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St4'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St5'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St6'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St7'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St8'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
          </Form>
        </Col>
        <Col span={3} className="gutter-row" style={style}>
          <label> Dif</label>
          <Form labelCol={{ span: 1 }} layout="horizontal" initialValues={{ size: "small" }} prefix='Apuestas'>
            <Form.Item name={'St1'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St2'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St3'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St4'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St5'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St6'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St7'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St8'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
          </Form>
        </Col>
        <Col span={3} className="gutter-row" style={style}>
          <label> In</label>
          <Form labelCol={{ span: 1 }} layout="horizontal" initialValues={{ size: "small" }} prefix='Apuestas'>
            <Form.Item name={'St1'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St2'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St3'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St4'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St5'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St6'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St7'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St8'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
          </Form>
        </Col>
        <Col span={3} className="gutter-row" style={style}>
          <label> Out</label>
          <Form labelCol={{ span: 1 }} layout="horizontal" initialValues={{ size: "small" }} prefix='Apuestas'>
            <Form.Item name={'St1'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St2'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St3'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St4'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St5'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St6'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St7'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St8'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
          </Form>
        </Col>
        <Col span={3} className="gutter-row" style={style}>
          <label> Profit</label>
          <Form labelCol={{ span: 1 }} layout="horizontal" initialValues={{ size: "small" }} prefix='Apuestas'>
            <Form.Item name={'St1'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered readOnly/>
            </Form.Item>
            <Form.Item name={'St2'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St3'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St4'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St5'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St6'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St7'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
            <Form.Item name={'St8'} rules={[{ required: true, message: 'This field is required' }]} style={{ marginBottom: '8px' }}>
              <Input type={'number'} placeholder="St1" bordered />
            </Form.Item>
          </Form>
        </Col>
        <Col xs={24} sm={24} md={7} lg={5} xl={{ span:4 }}>
          <Button type='primary' htmlType='submit' block>
            <PlusCircleFilled />
            Add Todo
          </Button>
        </Col>
      </Row>
    </Col>
  );
}

export default RultaPage;