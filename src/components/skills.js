import React from 'react';
import { Progress, Row, Col } from 'antd';

const Skills = () => {
    return (
        <Row>
            <Col xs={{ span: 12}} lg={{ span: 6, offset: 2 }}>
            <Progress 
                    strokeColor={{
                        '0%': '#04BFBF',
                        '100%': '#F2785C',
                    }}
                    type="circle" 
                    percent={60} 
                    format={() => 'Python'} />
            </Col>
            <Col xs={{ span: 12}} lg={{ span: 6, offset: 2 }}>
            <Progress 
                    strokeColor={{
                        '0%': '#04BFBF',
                        '100%': '#F2785C',
                    }}
                    type="circle" 
                    percent={70} 
                    format={() => 'JS'} />
            </Col>
            <Col xs={{ span: 12}} lg={{ span: 6, offset: 2 }}>
            <Progress 
                    strokeColor={{
                        '0%': '#04BFBF',
                        '100%': '#F2785C',
                    }}
                    type="circle" 
                    percent={50} 
                    format={() => 'Odoo'} />
            </Col>
        </Row>
    );
}

export default Skills;
