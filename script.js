// 网名数据库
const nameDatabase = {
    ancient: [
        '青衫故人', '墨染流年', '浮生若梦', '半盏流年', '浅若清风',
        '陌上花开', '染指年华', '墨韵浅月', '浮生未歇', '繁华落尽',
        '烟敛寒林', '断桥残雪', '潇湘夜雨', '孤帆远影', '明月清风',
        '踏雪寻梅', '紫陌红尘', '青衣白衫', '流年似锦', '弦断听音'
    ],
    modern: [
        '城市漂泊者', '深夜思考者', '追梦人', '时光旅行者', '都市探险家',
        '数字游民', '咖啡爱好者', '音乐收藏家', '摄影记录者', '书籍守护者',
        '科技追求者', '美食探索家', '旅行故事家', '艺术创作者', '生活观察者',
        '梦想实践者', '未来规划师', '心灵治愈者', '创意设计师', '自由写作者'
    ],
    cute: [
        '奶糖味的猫', '软萌小兔子', '可爱小云朵', '甜甜小蛋糕', '棉花糖宝宝',
        '萌系小怪兽', '爱心小天使', '彩虹棒棒糖', '星星眨眼睛', '月亮小尾巴',
        '小熊抱蜂蜜', '小鹿乱撞撞', '小猫踩奶糖', '小狐狸撒娇', '小熊猫打滚',
        '小松鼠囤粮', '小企鹅摇摆', '小海豚跳跃', '小浣熊洗爪', '小刺猬抱果'
    ],
    cool: [
        '暗夜行者', '冷锋过境', '烈焰狂龙', '冰封王座', '闪电侠影',
        '独孤求败', '纵横四海', '剑指苍穹', '王者归来', '傲视群雄',
        '极限挑战', '速度与激情', '黑色旋风', '致命诱惑', '绝对零度',
        '雷霆万钧', '星火燎原', '破茧成蝶', '凤凰涅槃', '浴火重生'
    ],
    literary: [
        '诗和远方', '纸短情长', '岁月如歌', '墨香如故', '书香门第',
        '琴棋书画', '风花雪月', '云淡风轻', '花开花落', '潮起潮落',
        '日出日落', '月缺月圆', '四季轮回', '时光荏苒', '岁月静好',
        '宁静致远', '淡泊明志', '心如止水', '波澜不惊', '安之若素'
    ]
};

// 获取所有网名
function getAllNames() {
    return Object.values(nameDatabase).flat();
}

// 随机生成指定数量的网名
function generateNames(style = 'all', count = 10) {
    let names = [];
    
    if (style === 'all') {
        names = getAllNames();
    } else if (nameDatabase[style]) {
        names = nameDatabase[style];
    }
    
    // 随机排序
    const shuffled = [...names].sort(() => 0.5 - Math.random());
    // 返回前count个
    return shuffled.slice(0, count);
}

// 显示生成的网名
function displayNames(names) {
    const nameList = document.getElementById('nameList');
    nameList.innerHTML = '';
    
    names.forEach(name => {
        const nameItem = document.createElement('div');
        nameItem.className = 'name-item';
        nameItem.textContent = name;
        nameItem.title = '点击复制';
        
        // 添加点击复制功能
        nameItem.addEventListener('click', () => {
            copyToClipboard(name);
            nameItem.textContent = '已复制！';
            setTimeout(() => {
                nameItem.textContent = name;
            }, 1000);
        });
        
        nameList.appendChild(nameItem);
    });
}

// 复制到剪贴板
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('已复制到剪贴板:', text);
    }).catch(err => {
        console.error('复制失败:', err);
    });
}

// 初始化页面
function init() {
    const generateBtn = document.getElementById('generateBtn');
    const styleSelect = document.getElementById('style');
    
    // 初始生成一批网名
    displayNames(generateNames());
    
    // 生成按钮点击事件
    generateBtn.addEventListener('click', () => {
        const selectedStyle = styleSelect.value;
        const newNames = generateNames(selectedStyle);
        displayNames(newNames);
    });
    
    // 风格选择变化事件
    styleSelect.addEventListener('change', () => {
        const selectedStyle = styleSelect.value;
        const newNames = generateNames(selectedStyle);
        displayNames(newNames);
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);