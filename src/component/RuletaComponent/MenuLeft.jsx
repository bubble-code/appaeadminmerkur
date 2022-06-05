import React, { useState } from 'react';
import { Menu } from 'antd';
import { MailOutlined, CalendarOutlined, AppstoreOutlined, SettingOutlined, LinkOutlined, } from '@ant-design/icons';


function getItem(label, key, icon, children) {
  return { key, icon, children, label, };
}

const items = [
  getItem('Rouletas Madrid', 'sub1', <MailOutlined />, [
    getItem('Alcobendas', '1'),
    getItem('Alcala 260', '2'),
    getItem('Alcala 610', '3'),
    getItem('Mejorada', '4'),
    getItem('Carabanchel', '5'),
    getItem('Oca 22', '6'),
    getItem('Villanueva', '7'),
  ]),
  getItem('Rouletas Mallorca', 'sub2', <CalendarOutlined />, [
    getItem('Tropicana', 'sub2-1', null, [getItem('10 Estaciones', '8'), getItem('6 Estaciones', '9')]),
    getItem('Fortuna', '10'),
    getItem('Riviera', '11'),
    getItem('Malibu', '12'),
    getItem('Cancun', '13'),
  ]),
  getItem('Rouletas Cantabria', 'sub3', <AppstoreOutlined />, [
    getItem('Santander', '14'),
    getItem('Santoña', '15'),
    getItem('Torrelavega', '16'),
  ]),
  getItem('Rouletas Navarra', 'sub4', <SettingOutlined />, [
    getItem('Alsasua', '17'),
    getItem('Olite', '18'),
    getItem('Tudela', '19'),
    getItem('Mendevaldea', '20'),
  ]),
];
const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];
const MenuLeftRuleta = ({ setSelectedKey }) => {

  const [openKeys, setOpenKeys] = useState([]);
  const onSelectedKey = ({ item, key }) => {
    setSelectedKey(key);
  }
  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256 }} items={items} onSelect={onSelectedKey} />
  )
};

export default MenuLeftRuleta;