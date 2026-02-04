import React from 'react';
import { Card, Button, Typography, Space, Tag, Row, Col, Divider } from 'antd';
import { designTokens } from '../theme/designTokens';

const { Title, Text } = Typography;

const ColorBox = ({ color, name }) => (
    <div style={{ textAlign: 'center', marginBottom: 16 }}>
        <div
            style={{
                width: '100%',
                height: 60,
                backgroundColor: color,
                borderRadius: designTokens.borderRadius.sm,
                boxShadow: designTokens.shadows.sm,
                marginBottom: 8,
            }}
        />
        <Text code>{name}</Text>
        <br />
        <Text type="secondary" style={{ fontSize: 12 }}>{color}</Text>
    </div>
);

const StyleGuide = () => {
    return (
        <div style={{ padding: designTokens.spacing.lg }}>
            <Title level={2}>UI Style Guide (派派連萌 Design System)</Title>
            <Text type="secondary">Based on App Visual Identity</Text>

            <Divider orientation="left">1. Colors (色彩體系)</Divider>
            <Row gutter={24}>
                <Col span={4}><ColorBox color={designTokens.colors.primary} name="Primary" /></Col>
                <Col span={4}><ColorBox color={designTokens.colors.primaryHover} name="Primary Hover" /></Col>
                <Col span={4}><ColorBox color={designTokens.colors.secondary} name="Secondary" /></Col>
                <Col span={4}><ColorBox color={designTokens.colors.success} name="Success" /></Col>
                <Col span={4}><ColorBox color={designTokens.colors.warning} name="Warning" /></Col>
                <Col span={4}><ColorBox color={designTokens.colors.error} name="Error" /></Col>
            </Row>
            <Row gutter={24}>
                <Col span={4}><ColorBox color={designTokens.colors.background} name="Background" /></Col>
                <Col span={4}><ColorBox color={designTokens.colors.surface} name="Surface" /></Col>
                <Col span={4}><ColorBox color={designTokens.colors.text.main} name="Text Main" /></Col>
                <Col span={4}><ColorBox color={designTokens.colors.text.secondary} name="Text Sec" /></Col>
            </Row>

            <Divider orientation="left">2. Typography (字體)</Divider>
            <Space direction="vertical">
                <Title>H1 Title (派派連萌)</Title>
                <Title level={2}>H2 Section Title</Title>
                <Title level={3}>H3 Subsection</Title>
                <Text>Body Text: The quick brown fox jumps over the lazy dog. 讓用戶自主選擇感興趣的社交主題標籤。</Text>
                <Text type="secondary">Secondary Text: 實時展示系統通知、好友互動等通知信息。</Text>
            </Space>

            <Divider orientation="left">3. Components (組件預覽)</Divider>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>

                {/* Buttons */}
                <Card title="Buttons" bordered={false} style={{ borderRadius: designTokens.borderRadius.base }}>
                    <Space>
                        <Button type="primary" size="large">Primary Action</Button>
                        <Button>Default Button</Button>
                        <Button type="dashed">Dashed</Button>
                        <Button type="primary" danger>Danger Action</Button>
                    </Space>
                </Card>

                {/* Cards */}
                <Card
                    title="Card Component (App Style)"
                    bordered={false}
                    style={{
                        borderRadius: designTokens.borderRadius.base,
                        boxShadow: designTokens.shadows.base
                    }}
                    extra={<Button type="link">More</Button>}
                >
                    <p>This card replicates the mobile app's container style.</p>
                    <p>Radius: {designTokens.borderRadius.base}</p>
                    <p>Shadow: "Soft Shadow"</p>
                </Card>

                {/* Status Tags */}
                <Card title="Status Tags" bordered={false} style={{ borderRadius: designTokens.borderRadius.base }}>
                    <Space>
                        <Tag color="success">Active / Online</Tag>
                        <Tag color="processing">Processing</Tag>
                        <Tag color="error">Banned / Error</Tag>
                        <Tag color="warning">Pending</Tag>
                        <Tag color="default">Offline</Tag>
                    </Space>
                </Card>
            </Space>
        </div>
    );
};

export default StyleGuide;
