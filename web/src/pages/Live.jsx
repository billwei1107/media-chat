import React from 'react';
import { Row, Col, Card, Avatar, Typography, Badge, Button, Space } from 'antd';
import { UserOutlined, EyeOutlined } from '@ant-design/icons';
import { designTokens } from '../theme/designTokens';

const { Title, Text } = Typography;

const LiveCard = ({ streamer, title, viewers, cover }) => (
    <Card
        hoverable
        bordered={false}
        style={{ borderRadius: designTokens.borderRadius.base, overflow: 'hidden' }}
        bodyStyle={{ padding: 12 }}
        cover={
            <div style={{ position: 'relative' }}>
                <img alt={title} src={cover} style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: 8, left: 8 }}>
                    <Badge count="LIVE" style={{ backgroundColor: designTokens.colors.error }} />
                </div>
                <div style={{ position: 'absolute', bottom: 8, left: 8, backgroundColor: 'rgba(0,0,0,0.6)', padding: '2px 8px', borderRadius: 4 }}>
                    <Text style={{ color: 'white', fontSize: 12 }}><EyeOutlined /> {viewers}</Text>
                </div>
            </div>
        }
    >
        <Card.Meta
            avatar={<Avatar src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${streamer}`} />}
            title={title}
            description={<Text type="secondary">{streamer}</Text>}
        />
    </Card>
);

const Live = () => {
    // Mock Data
    const lives = Array.from({ length: 6 }).map((_, i) => ({
        id: i,
        streamer: `主播 ${i + 1}`,
        title: `歡樂直播間 #${i + 1} 歡迎點歌！`,
        viewers: Math.floor(Math.random() * 5000 + 100),
        cover: `https://picsum.photos/400/225?random=${100 + i}`
    }));

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <Title level={3} style={{ margin: 0 }}>正在直播</Title>
                <Button type="primary" shape="round">我要開播</Button>
            </div>

            <Row gutter={[24, 24]}>
                {lives.map(live => (
                    <Col xs={24} sm={12} lg={8} key={live.id}>
                        <LiveCard {...live} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Live;
