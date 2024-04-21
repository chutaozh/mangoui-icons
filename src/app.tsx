import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { createPortal } from 'react-dom';
import cn from 'classnames';
import * as Icons from './icons';
import styles from './app.module.less';
import './global.less';

let timer: any = null;

const App = () => {
    const [keyword, setKeyword] = useState('');
    const [shadow, setShadow] = useState({ outlineListShadow: false, fillListShadow: false });
    const [message, setMessage] = useState<{ show: boolean; content: any }>({ show: false, content: null });

    const handleScroll = (e: any) => {
        setShadow({
            fillListShadow: e.target.id === "fill-list" ? e.target.scrollTop > 0 : shadow.fillListShadow,
            outlineListShadow: e.target.id === "outline-list" ? e.target.scrollTop > 0 : shadow.outlineListShadow
        });
    };

    const handleClick = (name: string) => {
        const _name = `<${name} />`;
        navigator.clipboard?.writeText(_name).then(res => {
            clearTimeout(timer);
            setMessage({
                show: true,
                content: (<>
                    <Icons.CheckCircleFilled style={{ color: 'green', marginRight: 10, fontSize: 18 }} />
                    <span>已复制：</span>
                    <span style={{ fontSize: 13 }}>{_name}</span>
                </>)
            });
            timer = setTimeout(() => {
                setMessage({ show: false, content: null });
            }, 2 * 1000);
        });
    };

    const filledIconList = Object.keys(Icons)
        .filter(name => name.endsWith('Filled'))
        .map(name => ({ name, Icon: (Icons as any)[name] }))
        .sort((a, b) => a.name.localeCompare(b.name));
    const outlinedIconList = Object.keys(Icons)
        .filter(name => name.endsWith('Outlined'))
        .map(name => ({ name, Icon: (Icons as any)[name] }))
        .sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className={styles["app"]}>
            <div className={styles["search-box"]}>
                <Icons.SearchOutlined />
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
                            <div
                                key={name}
                                className={styles["icon-item"]}
                                onClick={() => handleClick(name)}
                            >
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
                            <div
                                key={name}
                                className={styles["icon-item"]}
                                onClick={() => handleClick(name)}
                            >
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
            {createPortal((<div className={cn(styles["message"], { [styles["show"]]: message.show })}>
                {message.content}
            </div>), document.body)}
        </div>
    );
};

const container = document.getElementById('root') || document.body;
const root = createRoot(container);
root.render(<App />);