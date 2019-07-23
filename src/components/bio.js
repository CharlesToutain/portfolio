import React from 'react'
import { Link } from 'gatsby'

import { List, Avatar} from "antd"

const Bio = () => (
    <List.Item>
        <List.Item.Meta
        avatar={
            <Avatar
            size={64}
            src = "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-1/p320x320/56973989_2599438840129656_3812302792580661248_n.jpg?_nc_cat=104&_nc_oc=AQl6QoIJtfZddk8K9JfEzRZ7SpuPUxSfVqlvSrHWqbiZER-rTq7PamAE8SMx7pUeOXE&_nc_ht=scontent-cdt1-1.xx&oh=99fde96f316b373a7d5033132c9cbe10&oe=5DECB85A"
            />
        }
        title={<Link to="/about">Charles-Edouard Toutain</Link>}
        description="Dev Python | Dev Javascript | Je finalise mon master en management de projets numériques, master que j'effectue en alternance dans l'entreprise Subteno-It."
        />
    </List.Item>
)
export default Bio