import React from 'react';
import { Card, Col, Row, Statistic } from 'antd';
import { UserOutlined, LikeOutlined } from '@ant-design/icons';

const Dashboard = () => {
    return (
        <div>
            <h2 style={{ marginBottom: 24 }}>儀表板</h2>
            <Row gutter={16}>
                <Col span={6}>
                    <Card bordered={false}>
                        <Statistic
                            title="總用戶數"
                            value={112893}
                            prefix={<UserOutlined />}
                            valueStyle={{ color: '#f97316' }}
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card bordered={false}>
                        <Statistic
                            title="今日活躍"
                            value={893}
                            precision={0}
                            valueStyle={{ color: '#3f8600' }}
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card bordered={false}>
                        <Statistic
                            title="待審核內容"
                            value={56}
                            prefix={<LikeOutlined />}
                            valueStyle={{ color: '#cf1322' }}
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
