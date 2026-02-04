import React from 'react';
import { Layout, Menu, Avatar, Button, Input, Card, List, Typography, Space } from 'antd';
import {
    HomeOutlined,
    CompassOutlined,
    VideoCameraOutlined,
    UserOutlined,
    PlusCircleOutlined,
    SearchOutlined,
    BellOutlined,
    MessageOutlined,
    SettingOutlined
} from '@ant-design/icons';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { designTokens } from '../theme/designTokens';

const { Sider, Content } = Layout;
const { Title, Text } = Typography;

const AppLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { key: '/', icon: <HomeOutlined style={{ fontSize: '24px' }} />, label: '首頁' },
        { key: '/discovery', icon: <CompassOutlined style={{ fontSize: '24px' }} />, label: '發現' },
        { key: '/live', icon: <VideoCameraOutlined style={{ fontSize: '24px' }} />, label: '直播' },
        { key: '/profile', icon: <UserOutlined style={{ fontSize: '24px' }} />, label: '我的' },
        { key: '/settings', icon: <SettingOutlined style={{ fontSize: '24px' }} />, label: '設定' },
    ];

    return (
        <Layout style={{ minHeight: '100vh', background: designTokens.colors.background }}>
            {/* 
        Left Sidebar (Navigation) 
        Fixed width, sticky position
      */}
            <Sider
                width={280}
                style={{
                    background: designTokens.colors.surface,
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    borderRight: `1px solid ${designTokens.colors.border}`,
                    zIndex: 100
                }}
                theme="light"
            >
                <div style={{ padding: '24px 24px 12px', display: 'flex', alignItems: 'center' }}>
                    {/* Logo Placeholder */}
                    <div style={{
                        width: 40,
                        height: 40,
                        background: designTokens.colors.primary,
                        borderRadius: designTokens.borderRadius.sm,
                        marginRight: 12
                    }} />
                    <Title level={3} style={{ margin: 0, color: designTokens.colors.primary }}>派派連萌</Title>
                </div>

                <Menu
                    mode="inline"
                    selectedKeys={[location.pathname]}
                    style={{ borderRight: 0, fontSize: '18px', padding: '12px' }}
                    items={menuItems}
                    onClick={({ key }) => navigate(key)}
                />

                <div style={{ padding: '24px' }}>
                    <Button
                        type="primary"
                        shape="round"
                        size="large"
                        icon={<PlusCircleOutlined />}
                        style={{
                            width: '100%',
                            height: '48px',
                            fontSize: '16px',
                            fontWeight: 600,
                            boxShadow: designTokens.shadows.base
                        }}
                    >
                        發布貼文
                    </Button>
                </div>

                {/* User Profile Snippet at bottom */}
                <div style={{
                    position: 'absolute',
                    bottom: 24,
                    left: 24,
                    right: 24,
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    padding: '12px',
                    borderRadius: designTokens.borderRadius.base,
                    transition: 'background 0.2s',
                }}
                    className="hover:bg-gray-100" // Tailwind utility if available, otherwise inline hover logic needed
                >
                    <Avatar size="large" icon={<UserOutlined />} />
                    <div style={{ marginLeft: 12 }}>
                        <Text strong style={{ display: 'block' }}>用戶名稱</Text>
                        <Text type="secondary" style={{ fontSize: '12px' }}>@username</Text>
                    </div>
                </div>
            </Sider>

            {/* 
        Main Layout Wrapper 
        Pushes content to right of fixed Sider
      */}
            <Layout style={{ marginLeft: 280, flexDirection: 'row' }}>

                {/* 
          Center Content (Feed)
          MaxWidth 600-800px typically
        */}
                <Content style={{
                    flex: 1,
                    maxWidth: '700px',
                    margin: '0 auto',
                    padding: '24px',
                    minHeight: '100vh',
                    borderRight: `1px solid ${designTokens.colors.border}`,
                    background: designTokens.colors.background
                }}>
                    {/* Mobile-like Header for Feed */}
                    <div style={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 90,
                        background: 'rgba(255,255,255,0.8)',
                        backdropFilter: 'blur(10px)',
                        padding: '16px 0',
                        borderBottom: `1px solid ${designTokens.colors.border}`,
                        marginBottom: '24px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Title level={4} style={{ margin: 0 }}>首頁</Title>
                        <Space>
                            <Input
                                prefix={<SearchOutlined />}
                                placeholder="搜尋"
                                style={{ borderRadius: '99px', background: '#f0f2f5', border: 'none' }}
                            />
                        </Space>
                    </div>

                    <Outlet />
                </Content>

                {/* 
          Right Sidebar (Suggestions/Trending)
          Hidden on smaller screens, typically width 300-350px
        */}
                <Sider
                    width={350}
                    theme="light"
                    style={{
                        background: designTokens.colors.background,
                        padding: '24px',
                        height: '100vh',
                        position: 'sticky',
                        top: 0,
                        display: { xs: 'none', lg: 'block' } // Would need media query logic, handling via JS for now
                    }}
                >
                    <Space direction="vertical" size="large" style={{ width: '100%' }}>
                        <Input.Search
                            placeholder="搜尋派派連萌"
                            allowClear
                            size="large"
                            style={{ borderRadius: designTokens.borderRadius.full }}
                        />

                        <Card title="流行趨勢" bordered={false} style={{ borderRadius: designTokens.borderRadius.base, boxShadow: designTokens.shadows.sm }}>
                            <List
                                itemLayout="horizontal"
                                dataSource={['#新年快樂', '#美食探店', '#貓咪日常']}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            title={<a href="#">{item}</a>}
                                            description="1.2萬 貼文"
                                        />
                                    </List.Item>
                                )}
                            />
                        </Card>

                        <Card title="推薦關注" bordered={false} style={{ borderRadius: designTokens.borderRadius.base, boxShadow: designTokens.shadows.sm }}>
                            <List
                                itemLayout="horizontal"
                                dataSource={['攝影大師', '旅遊達人', '美食博主']}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar icon={<UserOutlined />} />}
                                            title={<a href="#">{item}</a>}
                                            description={<Button type="text" size="small" style={{ color: designTokens.colors.primary }}>關注</Button>}
                                        />
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </Space>
                </Sider>

            </Layout>
        </Layout>
    );
};

export default AppLayout;
