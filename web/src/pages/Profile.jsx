import React from 'react';
import { Row, Col, Avatar, Typography, Button, Space, Tabs, Image, Divider } from 'antd';
import { SettingOutlined, LinkOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { designTokens } from '../theme/designTokens';

const { Title, Text, Paragraph } = Typography;

const ContentGrid = () => (
    <Row gutter={[4, 4]}>
        {Array.from({ length: 9 }).map((_, i) => (
            <Col span={8} key={i}>
                <Image
                    src={`https://picsum.photos/300/300?random=${200 + i}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', aspectRatio: '1/1', borderRadius: 4 }}
                    preview={false}
                />
            </Col>
        ))}
    </Row>
);

const Profile = () => {
    return (
        <div>
            {/* Header */}
            <div style={{ padding: '0 16px 24px' }}>
                <Row gutter={24} align="middle">
                    <Col>
                        <Avatar size={100} src="https://api.dicebear.com/7.x/avataaars/svg?seed=MyUser" style={{ border: `4px solid ${designTokens.colors.surface}` }} />
                    </Col>
                    <Col flex="1">
                        <Space align="start" style={{ width: '100%', justifyContent: 'space-between' }}>
                            <div>
                                <Title level={3} style={{ marginBottom: 4 }}>Bill Wei</Title>
                                <Text type="secondary">@billwei1107</Text>
                            </div>
                            <Space>
                                <Button>編輯資料</Button>
                                <Button icon={<SettingOutlined />} />
                            </Space>
                        </Space>

                        <Space size="large" style={{ margin: '16px 0' }}>
                            <Text><strong>128</strong> 貼文</Text>
                            <Text><strong>2.5k</strong> 粉絲</Text>
                            <Text><strong>180</strong> 關注中</Text>
                        </Space>

                        <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: '更多' }}>
                            熱愛生活，喜歡攝影和程式設計。歡迎關注我的日常！ 📷 💻
                            <br />
                            <Space size="small" style={{ marginTop: 8 }}>
                                <Text type="secondary"><EnvironmentOutlined /> 台北市, 台灣</Text>
                                <a href="#"><LinkOutlined /> billwei.dev</a>
                            </Space>
                        </Paragraph>
                    </Col>
                </Row>
            </div>

            <Divider style={{ margin: 0 }} />

            {/* Content Tabs */}
            <Tabs
                defaultActiveKey="1"
                centered
                size="large"
                items={[
                    { label: '貼文', key: '1', children: <ContentGrid /> },
                    { label: '影片', key: '2', children: <div style={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>暫無影片</div> },
                    { label: '收藏', key: '3', children: <div style={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>私密收藏內容</div> },
                ]}
            />
        </div>
    );
};

export default Profile;
