import React, { useEffect } from 'react';
import { Button, Checkbox, Form, Input, Typography } from 'antd';
import { useUser } from '../Providers/users';
import { ILogin } from '../Providers/users/context';

const { Title } = Typography;

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

const Login = () => {
    const { loginUser, UserLogin } = useUser();

    useEffect(() => {
        if (UserLogin != null) {
            console.log(UserLogin);
        }
    }, [UserLogin]);

    const onFinish = (values: ILogin) => {
        console.log('Success:', values);
        if (loginUser) {
            loginUser(values);
        }
    };

    return (
        <>
            <Title> Grim Movies</Title>

            <Form
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600, minHeight: '100vh' }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="userNameOrEmailAddress"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 8, span: 16 }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default Login;
