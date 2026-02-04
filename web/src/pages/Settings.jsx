import React from 'react';
import { Card, List, Typography, Divider, Button, Space, Avatar } from 'antd';
import {
    UserOutlined,
    LockOutlined,
    SafetyCertificateOutlined,
    ShareAltOutlined,
    BellOutlined,
    GlobalOutlined,
    ClockCircleOutlined,
    FlagOutlined,
    QuestionCircleOutlined,
    FileTextOutlined,
    SwapOutlined,
    LogoutOutlined,
    RightOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { designTokens } from '../theme/designTokens';

const { Title, Text } = Typography;

const Settings = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear user session
        localStorage.removeItem('user');
        // Redirect to login
        navigate('/login');
    };

    const sections = [
        {
            title: '帳戶',
            items: [
                { icon: <UserOutlined />, label: '帳戶', onClick: () => { } },
                { icon: <LockOutlined />, label: '隱私', extra: '個人', onClick: () => { } },
                { icon: <SafetyCertificateOutlined />, label: '安全', onClick: () => { } },
                { icon: <ShareAltOutlined />, label: '分享個人資料', onClick: () => { } },
            ]
        },
        {
            title: '內容與展示',
            items: [
                { icon: <BellOutlined />, label: '通知', onClick: () => { } },
                { icon: <GlobalOutlined />, label: '語言', extra: '中文 (中國)', onClick: () => { } },
                { icon: <ClockCircleOutlined />, label: '花費時間', onClick: () => { } },
            ]
        },
        {
            title: '支持',
            items: [
                { icon: <FlagOutlined />, label: '報告問題', onClick: () => { } },
                { icon: <QuestionCircleOutlined />, label: '幫助中心', onClick: () => { } },
                { icon: <FileTextOutlined />, label: '關於派派連萌', onClick: () => { } },
            ]
        },
        {
            title: '登錄',
            items: [
                { icon: <SwapOutlined />, label: '切換帳戶', onClick: () => { } },
                { icon: <LogoutOutlined />, label: '退出', onClick: handleLogout, danger: true },
            ]
        }
    ];

    return (
        <div style={{ paddingBottom: 40 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
                <Title level={3} style={{ margin: 0 }}>設置</Title>
            </div>

            <Space direction="vertical" size="large" style={{ width: '100%' }}>
                {sections.map((section, index) => (
                    <div key={index}>
                        <Text type="secondary" style={{ display: 'block', marginBottom: 8, marginLeft: 16, fontSize: 13 }}>
                            {section.title}
                        </Text>
                        <Card
                            bordered={false}
                            bodyStyle={{ padding: 0 }}
                            style={{
                                borderRadius: designTokens.borderRadius.lg,
                                overflow: 'hidden',
                                boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                            }}
                        >
                            <List
                                itemLayout="horizontal"
                                dataSource={section.items}
                                renderItem={(item) => (
                                    <List.Item
                                        onClick={item.onClick}
                                        style={{
                                            cursor: 'pointer',
                                            padding: '16px 24px',
                                            transition: 'background 0.2s'
                                        }}
                                        className="hover:bg-gray-50"
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <span style={{ fontSize: 20, color: item.danger ? '#ff4d4f' : '#666', marginRight: 16 }}>
                                                {item.icon}
                                            </span>
                                            <div style={{ flex: 1 }}>
                                                <Text style={{ fontSize: 15, fontWeight: 500, color: item.danger ? '#ff4d4f' : undefined }}>
                                                    {item.label}
                                                </Text>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                {item.extra && <Text type="secondary" style={{ marginRight: 8 }}>{item.extra}</Text>}
                                                <RightOutlined style={{ color: '#ccc', fontSize: 12 }} />
                                            </div>
                                        </div>
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </div>
                ))}
            </Space>

            <div style={{ textAlign: 'center', marginTop: 32 }}>
                <div style={{ width: 40, height: 40, background: '#e6f7ff', borderRadius: 8, margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: designTokens.colors.primary, fontWeight: 'bold' }}>P</span>
                </div>
                <Text strong>派派連萌</Text>
                <br />
                <Text type="secondary" style={{ fontSize: 12 }}>版本 1.01</Text>
            </div>
        </div>
    );
};

export default Settings;
