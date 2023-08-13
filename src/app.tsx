import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import cn from 'classnames';
import * as Icons from './icons';
import styles from './app.module.less';
import './global.less';

const App = () => {
    const [keyword, setKeyword] = useState('');
    const [shadow, setShadow] = useState({ outlineListShadow: false, fillListShadow: false });

    const handleScroll = (e: any) => {
        setShadow({
            fillListShadow: e.target.id === "fill-list" ? e.target.scrollTop > 0 : shadow.fillListShadow,
            outlineListShadow: e.target.id === "outline-list" ? e.target.scrollTop > 0 : shadow.outlineListShadow
        });
    };

    const filledIconList = Object.keys(Icons)
        .filter(name => name.endsWith('Filled'))
        .map(name => ({ name, Icon: (Icons as any)[name] }));
    const outlinedIconList = Object.keys(Icons)
        .filter(name => name.endsWith('Outlined'))
        .map(name => ({ name, Icon: (Icons as any)[name] }));

    return (
        <div className={styles["app"]}>
            <div className={styles["search-box"]}>
                <Icons.SdiSearchOutlined />
                <input value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="输入关键字查找图标" />
            </div>
            <div className={styles["main"]} onScrollCapture={handleScroll}>
                <div id="outline-list" className={styles["outline-list"]}>
                    <div className={cn(styles["header"], { [styles["header-shadow"]]: shadow.outlineListShadow })}>
                        线框风格
                        <span>{`(共 ${outlinedIconList.length} 个图标)`}</span>
                    </div>
                    <div className={styles["icon-list"]}>
                        {outlinedIconList.filter(({ name }) => name.toLowerCase().includes((keyword || '').toLowerCase())).map(({ name, Icon }) => (
                            <div className={styles["icon-item"]} key={name}>
                                <div className={styles["icon"]}>
                                    <Icon />
                                </div>
                                <div className={styles["code"]}>
                                    {name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="fill-list" className={styles["fill-list"]}>
                    <div className={cn(styles["header"], { [styles["header-shadow"]]: shadow.fillListShadow })}>
                        实底风格
                        <span>{`(共 ${filledIconList.length} 个图标)`}</span>
                    </div>
                    <div className={styles["icon-list"]}>
                        {filledIconList.filter(({ name }) => name.toLowerCase().includes((keyword || '').toLowerCase())).map(({ name, Icon }) => (
                            <div className={styles["icon-item"]} key={name}>
                                <div className={styles["icon"]}>
                                    <Icon />
                                </div>
                                <div className={styles["code"]}>
                                    {name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const container = document.getElementById('root') || document.body;
const root = createRoot(container);
root.render(<App />);