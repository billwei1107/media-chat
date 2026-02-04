import React from 'react';
import { Input, Tabs, List, Card, Tag, Typography, Row, Col, Statistic, Image } from 'antd';
import { FireOutlined, SearchOutlined, RiseOutlined } from '@ant-design/icons';
import { designTokens } from '../theme/designTokens';

const { Title, Text } = Typography;

const TrendingTopics = () => (
    <Card title={<Space><RiseOutlined style={{ color: designTokens.colors.error }} /> <span>熱門話題</span></Space>} bordered={false} style={{ borderRadius: designTokens.borderRadius.base, marginBottom: 24 }}>
        <Space size={[0, 8]} wrap>
            {['#新年快樂', '#2026世界盃', '#貓咪大戰爭', '#科技新聞', '#美食地圖', '#週末去哪玩', '#攝影技巧'].map((tag) => (
                <Tag key={tag} color="default" style={{ padding: '4px 12px', fontSize: '14px', borderRadius: '16px', cursor: 'pointer' }}>
                    {tag}
                </Tag>
            ))}
        </Space>
    </Card>
);

const VideoGrid = () => {
    // Mock Data
    const videos = Array.from({ length: 8 }).map((_, i) => ({
        id: i,
        title: `熱門影片標題 #${i + 1}`,
        author: `創作者 ${i + 1}`,
        cover: `https://picsum.photos/400/225?random=${i}`,
        views: '1.2萬'
    }));

    return (
        <Row gutter={[16, 16]}>
            {videos.map(v => (
                <Col xs={24} sm={12} md={8} lg={6} key={v.id}>
                    <Card
                        hoverable
                        cover={<img alt={v.title} src={v.cover} style={{ borderRadius: `${designTokens.borderRadius.base} ${designTokens.borderRadius.base} 0 0` }} />}
                        bordered={false}
                        bodyStyle={{ padding: '12px' }}
                        style={{ borderRadius: designTokens.borderRadius.base }}
                    >
                        <Card.Meta
                            title={v.title}
                            description={<Space><Text type="secondary">{v.author}</Text> <Text type="secondary">• {v.views}次觀看</Text></Space>}
                        />
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

const Discovery = () => {
    return (
        <div>
            <div style={{ marginBottom: 24, textAlign: 'center', padding: '20px 0' }}>
                <Input.Search
                    placeholder="搜尋用戶、視頻、話題..."
                    enterButton
                    size="large"
                    style={{ maxWidth: 600 }}
                />
            </div>

            <TrendingTopics />

            <Tabs
                defaultActiveKey="1"
                items={[
                    { label: <span><FireOutlined /> 推薦</span>, key: '1', children: <VideoGrid /> },
                    { label: '直播', key: '2', children: <div style={{ padding: 20, textAlign: 'center' }}>直播內容列表 (開發中)</div> },
                    { label: '用戶', key: '3', children: <div style={{ padding: 20, textAlign: 'center' }}>用戶搜尋結果 (開發中)</div> },
                ]}
                size="large"
            />
        </div>
    );
};

import { Space } from 'antd'; // Fixed import

export default Discovery;
