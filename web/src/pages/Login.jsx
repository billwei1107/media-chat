import React from 'react';
import { Card, Form, Input, Button, Typography, Divider, Space } from 'antd';
import { GoogleOutlined, FacebookOutlined, WechatOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { designTokens } from '../theme/designTokens';

const { Title, Text, Link } = Typography;

const Login = () => {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            });

            const data = await response.json();

            if (response.ok) {
                // message.success('登入成功！');
                // Save user info (Mock token or real data)
                localStorage.setItem('user', JSON.stringify(data.user));
                navigate('/');
            } else {
                // message.error(data.error || '登入失敗');
                // Use alert for now or import message from antd if not present
                console.error(data.error);
                alert(data.error || '登入失敗');
            }
        } catch (error) {
            console.error(error);
            alert('連線錯誤');
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#f0fdf4', // Very light green bg
            backgroundImage: `radial-gradient(${designTokens.colors.primary} 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
        }}>
            <Card
                bordered={false}
                style={{
                    width: 400,
                    borderRadius: designTokens.borderRadius.lg,
                    boxShadow: designTokens.shadows.lg
                }}
            >
                <div style={{ textAlign: 'center', marginBottom: 24 }}>
                    <div style={{
                        width: 60,
                        height: 60,
                        background: designTokens.colors.primary,
                        borderRadius: designTokens.borderRadius.base,
                        margin: '0 auto 16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {/* Placeholder Logo Icon */}
                        <span style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>P</span>
                    </div>
                    <Title level={3} style={{ margin: 0 }}>歡迎回到派派連萌</Title>
                    <Text type="secondary">登入以繼續您的社交旅程</Text>
                </div>

                <Form
                    name="login"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    layout="vertical"
                    size="large"
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: '請輸入帳號或Email!' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="帳號 / Email / 手機號碼" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '請輸入密碼!' }]}
                    >
                        <Input.Password prefix={<LockOutlined />} placeholder="密碼" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block shape="round" style={{ fontWeight: 'bold' }}>
                            立即登入
                        </Button>
                    </Form.Item>

                    <div style={{ textAlign: 'end', marginTop: -10, marginBottom: 24 }}>
                        <Link href="#">忘記密碼？</Link>
                    </div>
                </Form>

                <Divider plain><Text type="secondary" style={{ fontSize: 12 }}>或使用社群帳號登入</Text></Divider>

                <Space direction="vertical" style={{ width: '100%' }}>
                    <Button block icon={<GoogleOutlined />} style={{ color: '#DB4437', borderColor: '#DB4437' }}>Google 登入</Button>
                    <Button block icon={<FacebookOutlined />} style={{ color: '#4267B2', borderColor: '#4267B2' }}>Facebook 登入</Button>
                    {/* <Button block icon={<WechatOutlined />} style={{ color: '#07C160', borderColor: '#07C160' }}>WeChat 登入</Button> */}
                </Space>

                <div style={{ textAlign: 'center', marginTop: 24 }}>
                    <Text>還沒有帳號？ <Link onClick={() => navigate('/register')}>立即註冊</Link></Text>
                </div>
            </Card>
        </div>
    );
};

export default Login;
