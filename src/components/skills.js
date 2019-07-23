import React from 'react';
import { Progress, Divider} from 'antd';

const Skills = () => {
    return (
        <div>
            <Divider/>
            <h3>JS</h3>
            <Progress percent={30} />
            <h3>JS</h3>
            <Progress percent={50} status="active" />
            <Progress percent={100} />
        </div>
    );
}

export default Skills;
