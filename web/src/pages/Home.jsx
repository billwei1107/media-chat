import React from 'react';
import { Card, Avatar, Space, Button, Typography, Image } from 'antd';
import { HeartOutlined, MessageOutlined, ShareAltOutlined, EllipsisOutlined } from '@ant-design/icons';
import { designTokens } from '../theme/designTokens';

const { Text, Title } = Typography;

const Post = ({ username, content, image }) => {
    return (
        <Card
            bordered={false}
            style={{
                marginBottom: 24,
                borderRadius: designTokens.borderRadius.base,
                boxShadow: designTokens.shadows.sm
            }}
            bodyStyle={{ padding: '0' }}
        >
            <div style={{ padding: '16px', display: 'flex', justifyContent: 'space-between' }}>
                <Space>
                    <Avatar size="large" src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`} />
                    <div>
                        <Text strong style={{ display: 'block' }}>{username}</Text>
                        <Text type="secondary" style={{ fontSize: '12px' }}>2小時前</Text>
                    </div>
                </Space>
                <Button type="text" icon={<EllipsisOutlined />} />
            </div>

            <div style={{ padding: '0 16px 12px' }}>
                <Text style={{ fontSize: '15px' }}>{content}</Text>
            </div>

            {image && (
                <div style={{ width: '100%', overflow: 'hidden' }}>
                    <Image src={image} style={{ objectFit: 'cover', width: '100%', maxHeight: '500px' }} />
                </div>
            )}

            <div style={{ padding: '12px 16px', display: 'flex', justifyContent: 'space-around', borderTop: `1px solid ${designTokens.colors.border}` }}>
                <Button type="text" icon={<HeartOutlined key="like" />}>123</Button>
                <Button type="text" icon={<MessageOutlined key="comment" />}>45</Button>
                <Button type="text" icon={<ShareAltOutlined key="share" />}>分享</Button>
            </div>
        </Card>
    );
};

const Home = () => {
    return (
        <div>
            <Post
                username="Alice"
                content="今天天氣真好！去公園散步了 🌞"
                image="https://images.unsplash.com/photo-1596326168574-e3cc8740c061?auto=format&fit=crop&w=800&q=80"
            />
            <Post
                username="Bob"
                content="剛學會做的一道菜，大家覺得如何？ 🍳 #美食 #烹飪"
                image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
            />
            <Post
                username="Charlie"
                content="分享一張剛拍的風景照 ~"
            />
        </div>
    );
};

export default Home;
