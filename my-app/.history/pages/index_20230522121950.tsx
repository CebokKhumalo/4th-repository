import React, { useEffect } from 'react';
import { Button, Checkbox, Form, Input, Typography, Layout, Space } from 'antd';
import { useUser } from '../Providers/users';
import { ILogin } from '../Providers/users/context';

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
};

const contentStyle: React.CSSProperties = {};

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
        <Space>
            <Layout>
                <Title style={headerStyle} type="success">
                    {' '}
                    Grim Movies
                </Title>
            </Layout>
            <br />
            <Layout>
                <Form
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={contentStyle}
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
            </Layout>
        </Space>
    );
};

export default Login;
/* 

<Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout>
      <Header style={headerStyle}>Header</Header>
      <Content style={contentStyle}>Content</Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
    <Layout>
      <Header style={headerStyle}>Header</Header>
      <Layout>
        <Sider style={siderStyle}>Sider</Sider>
        <Content style={contentStyle}>Content</Content>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
    <Layout>
      <Header style={headerStyle}>Header</Header>
      <Layout>
        <Content style={contentStyle}>Content</Content>
        <Sider style={siderStyle}>Sider</Sider>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
    <Layout>
      <Sider style={siderStyle}>Sider</Sider>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>Content</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>
  </Space>
*/
