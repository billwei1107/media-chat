import React, { useState, useEffect } from 'react';
import { Card, Form, Input, Button, Typography, Divider, Space, Row, Col, message } from 'antd';
import { GoogleOutlined, FacebookOutlined, UserOutlined, MailOutlined, LockOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { designTokens } from '../theme/designTokens';

const { Title, Text, Link } = Typography;

const Register = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [countdown, setCountdown] = useState(0);
    const [loading, setLoading] = useState(false);

    // Countdown effect
    useEffect(() => {
        let timer;
        if (countdown > 0) {
            timer = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [countdown]);

    const handleSendCode = async () => {
        try {
            // Validate email field first
            const values = await form.validateFields(['email']);
            const email = values.email;
            setLoading(true);

            // Call Backend API
            const response = await fetch('http://localhost:8080/api/auth/send-code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                message.success('驗證碼已發送至您的信箱！');
                setCountdown(60); // Start 60s countdown
            } else {
                message.error('發送失敗，請稍後再試');
            }
        } catch (error) {
            // Validation failed or API error
            if (error.errorFields) {
                message.warning('請先輸入正確的 Email');
            } else {
                console.error(error);
                message.error('連線錯誤: 請確認後端伺服器已啟動');
            }
        } finally {
            setLoading(false);
        }
    };

    const onFinish = async (values) => {
        try {
            const response = await fetch('http://localhost:8080/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            });

            const data = await response.json();

            if (response.ok) {
                message.success('註冊成功！');
                navigate('/');
            } else {
                message.error(data.error || '註冊失敗');
            }
        } catch (error) {
            message.error('連線錯誤');
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#f0fdf4',
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
                    <Title level={3} style={{ margin: 0 }}>加入派派連萌</Title>
                    <Text type="secondary">創建帳號，開始探索精彩世界</Text>
                </div>

                <Form
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    layout="vertical"
                    size="large"
                >
                    {/* Email with Send Code Button */}
                    <Form.Item label="電子信箱" required style={{ marginBottom: 0 }}>
                        <Row gutter={8}>
                            <Col span={16}>
                                <Form.Item
                                    name="email"
                                    rules={[
                                        { required: true, message: '請輸入Email!' },
                                        { type: 'email', message: '請輸入有效的Email格式!' }
                                    ]}
                                >
                                    <Input prefix={<MailOutlined />} placeholder="example@mail.com" />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Button
                                    block
                                    onClick={handleSendCode}
                                    disabled={countdown > 0}
                                    loading={loading}
                                >
                                    {countdown > 0 ? `${countdown}s` : '發送驗證碼'}
                                </Button>
                            </Col>
                        </Row>
                    </Form.Item>

                    <Form.Item
                        name="code"
                        rules={[{ required: true, message: '請輸入信箱驗證碼!' }]}
                    >
                        <Input prefix={<SafetyCertificateOutlined />} placeholder="輸入 6 位數驗證碼" maxLength={6} />
                    </Form.Item>

                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: '請設定用戶名!' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="用戶名 (ID)" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '請設定密碼!' }]}
                    >
                        <Input.Password prefix={<LockOutlined />} placeholder="密碼" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block shape="round" style={{ fontWeight: 'bold' }}>
                            註冊帳號
                        </Button>
                    </Form.Item>
                </Form>

                <Divider plain><Text type="secondary" style={{ fontSize: 12 }}>或使用社群帳號註冊</Text></Divider>

                <Space direction="vertical" style={{ width: '100%' }}>
                    <Button block icon={<GoogleOutlined />} style={{ color: '#DB4437', borderColor: '#DB4437' }}>Google 註冊</Button>
                    <Button block icon={<FacebookOutlined />} style={{ color: '#4267B2', borderColor: '#4267B2' }}>Facebook 註冊</Button>
                </Space>

                <div style={{ textAlign: 'center', marginTop: 24 }}>
                    <Text>已有帳號？ <Link onClick={() => navigate('/login')}>登入</Link></Text>
                </div>
            </Card>
        </div>
    );
};

export default Register;
