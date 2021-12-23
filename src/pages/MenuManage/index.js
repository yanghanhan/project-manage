import React, { useState, useEffect } from 'react';
import {Row, Col, Form, Table, Button, Input} from 'antd';

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
};


const MenuManage = ()=>{
    const [form] = Form.useForm();
    console.log('form', form);
    const onSearch = ()=>{
        const params = form.getFieldsValue();
        console.log('params', params);
    }
    const onFinish = (values)=>{
        console.log('values', values);
    }
    return ( 
    <>
        <h1>菜单配置</h1><br></br>
        <Form form={form} onFinish={onFinish}>
            <Row gutter={16}>
                <Col span={6}>
                    <Form.Item
                        name='menuName'
                        label='菜单名称'
                        {...formItemLayout}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        label='菜单地址'
                        name='manuPath'
                        {...formItemLayout}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col>
                    <Button htmlType='reset' >重置</Button>
                    <Button type='primary' htmlType='submit'>搜索</Button>
                </Col>
            </Row>
        </Form>
    </>
    );
       
}

export default MenuManage;
