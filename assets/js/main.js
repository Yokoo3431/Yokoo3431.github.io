/**
 * Yoko 建筑设计作品集 - 交互逻辑
 */

// ============================================
// 项目数据
// ============================================
const projects = [
    {
        id: 1,
        title: "山间茶室",
        category: "built",
        categoryLabel: "建成项目",
        year: "2024",
        location: "浙江 · 安吉",
        type: "商业建筑",
        area: "320㎡",
        featured: true,
        cover: "assets/images/project-01-cover.jpg",
        description: `<p>项目位于安吉竹海深处，场地被茂密的毛竹林环绕。设计意图是创造一个能够让人停下脚步、静心品茶的空间。</p>
        <p>建筑采用当地常见的夯土墙与 timber frame 结构，屋顶覆盖青瓦，与周边民居形成对话。大面积南向玻璃将竹影引入室内，四季变换成为空间中最生动的装饰。</p>
        <p>室内空间围绕一座枯山水庭院组织，茶室、等候区、展陈空间依次展开，形成由闹至静的空间序列。</p>`,
        gallery: [
            "assets/images/project-01-01.jpg",
            "assets/images/project-01-02.jpg",
            "assets/images/project-01-03.jpg",
            "assets/images/project-01-04.jpg"
        ]
    },
    {
        id: 2,
        title: "城市更新 · 老厂房改造",
        category: "built",
        categoryLabel: "建成项目",
        year: "2023",
        location: "江苏 · 南京",
        type: "文化建筑",
        area: "2,800㎡",
        featured: true,
        cover: "assets/images/project-02-cover.jpg",
        description: `<p>这是一座建于1970年代的纺织厂厂房，经过半个世纪的风雨，结构依然坚固，但内部空间已无法满足现代使用需求。</p>
        <p>改造策略是"保留肌理、植入新功能"。原有的锯齿形屋顶被完整保留，成为空间最具识别性的特征；混凝土排架结构经过加固后裸露呈现，与新植入的钢构夹层形成新旧对话。</p>
        <p>功能上，底层设置为社区艺术中心，二层为联合办公，屋顶局部打开形成露天剧场，服务于周边居民。</p>`,
        gallery: [
            "assets/images/project-02-01.jpg",
            "assets/images/project-02-02.jpg",
            "assets/images/project-02-03.jpg"
        ]
    },
    {
        id: 3,
        title: "湖畔书屋",
        category: "built",
        categoryLabel: "建成项目",
        year: "2023",
        location: "江苏 · 苏州",
        type: "公共建筑",
        area: "450㎡",
        featured: false,
        cover: "assets/images/project-03-cover.jpg",
        description: `<p>位于金鸡湖畔的一处小型社区图书馆。场地狭长，一面朝向湖面，一面面向城市街道。</p>
        <p>设计采用"书架即墙体"的策略，环绕的书架墙既界定了空间，又提供了充足的藏书展示面。中央一个通高的中庭引入天光，成为整个建筑的精神核心。</p>`,
        gallery: [
            "assets/images/project-03-01.jpg",
            "assets/images/project-03-02.jpg"
        ]
    },
    {
        id: 4,
        title: "折叠庭院住宅",
        category: "unbuilt",
        categoryLabel: "概念设计",
        year: "2024",
        location: "概念方案",
        type: "住宅",
        area: "380㎡",
        featured: false,
        cover: "assets/images/project-04-cover.jpg",
        description: `<p>为一块不规则三角形场地设计的独栋住宅。设计核心概念是"折叠"——通过连续的折板屋顶，将原本割裂的室内外空间串联起来。</p>
        <p>每个折板对应一个功能区域，高度和开口方向根据私密性需求调整。庭院被包裹在建筑体量的中心，成为家庭的共享核心。</p>`,
        gallery: [
            "assets/images/project-04-01.jpg",
            "assets/images/project-04-02.jpg"
        ]
    },
    {
        id: 5,
        title: "垂直森林公寓",
        category: "unbuilt",
        categoryLabel: "概念设计",
        year: "2023",
        location: "概念方案",
        type: "住宅",
        area: "12,000㎡",
        featured: false,
        cover: "assets/images/project-05-cover.jpg",
        description: `<p>探索高密度住宅中人与自然共存的可能性。每一户都拥有私人阳台花园，层层退台形成立体的绿化系统。</p>
        <p>立面采用参数化设计的种植槽系统，根据朝向和日照条件自动优化植物配置方案。</p>`,
        gallery: [
            "assets/images/project-05-01.jpg",
            "assets/images/project-05-02.jpg"
        ]
    },
    {
        id: 6,
        title: "悬崖观景台",
        category: "competition",
        categoryLabel: "竞赛",
        year: "2024",
        location: "福建 · 武夷山",
        type: "景观建筑",
        area: "150㎡",
        featured: false,
        cover: "assets/images/project-06-cover.jpg",
        description: `<p>武夷山国家公园观景台设计竞赛方案。场地位于一处突出的悬崖边缘，海拔约800米，视野极为开阔。</p>
        <p>设计主张最小干预——一个轻薄的钢构平台从岩体中悬挑而出，表面覆盖镜面不锈钢，映射天空和云海，建筑本身仿佛消失于自然之中。</p>`,
        gallery: [
            "assets/images/project-06-01.jpg",
            "assets/images/project-06-02.jpg"
        ]
    },
    {
        id: 7,
        title: "社区中心",
        category: "built",
        categoryLabel: "建成项目",
        year: "2022",
        location: "江苏 · 南京",
        type: "公共建筑",
        area: "1,200㎡",
        featured: false,
        cover: "assets/images/project-07-cover.jpg",
        description: `<p>为南京某老旧小区配套的社区服务中心。原址是一片废弃的自行车棚。</p>
        <p>建筑分为上下两层：一层对外开放，设置阅览室、老年活动室和社区卫生站；二层为居委会办公和多功能厅。屋顶作为社区菜园，由居民共同维护。</p>`,
        gallery: [
            "assets/images/project-07-01.jpg",
            "assets/images/project-07-02.jpg"
        ]
    },
    {
        id: 8,
        title: "沙漠驿站",
        category: "competition",
        categoryLabel: "竞赛",
        year: "2023",
        location: "内蒙古 · 阿拉善",
        type: "旅游建筑",
        area: "600㎡",
        featured: false,
        cover: "assets/images/project-08-cover.jpg",
        description: `<p>阿拉善沙漠旅游驿站设计竞赛。在极端气候条件下，建筑需要同时应对烈日、风沙和昼夜温差。</p>
        <p>方案采用下沉式庭院组织空间，厚重的夯土墙体提供热惰性，夜间通过屋顶天窗实现自然通风降温。</p>`,
        gallery: [
            "assets/images/project-08-01.jpg",
            "assets/images/project-08-02.jpg"
        ]
    }
];

// ============================================
// DOM 元素
// ============================================
const navbar = document.getElementById('navbar');
const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const projectsGrid = document.getElementById('projectsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectModal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalContent = document.getElementById('modalContent');

// ============================================
// 主题切换
// ============================================
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
}

themeToggle.addEventListener('click', toggleTheme);

// ============================================
// 导航栏滚动效果
// ============================================
function handleScroll() {
    const scrolled = window.scrollY > 50;
    navbar.classList.toggle('scrolled', scrolled);
    
    // 更新导航链接激活状态
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const link = document.querySelector(`.nav-link[href="#${section.id}"]`);
        if (link && rect.top <= 100 && rect.bottom >= 100) {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', handleScroll);

// ============================================
// 移动端菜单
// ============================================
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const spans = menuToggle.querySelectorAll('span');
    if (navLinks.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
    }
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.querySelectorAll('span').forEach(s => {
            s.style.transform = '';
            s.style.opacity = '1';
        });
    });
});

// ============================================
// 渲染项目卡片
// ============================================
function renderProjects(filter = 'all') {
    projectsGrid.innerHTML = '';
    
    const filtered = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category === filter);
    
    filtered.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = `project-card ${project.featured ? 'featured' : ''} reveal`;
        card.style.transitionDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <img src="${project.cover}" alt="${project.title}" class="project-image" loading="lazy">
            <div class="project-overlay">
                <span class="project-category">${project.categoryLabel}</span>
                <h3 class="project-title">${project.title}</h3>
                <span class="project-year">${project.year}</span>
            </div>
        `;
        card.addEventListener('click', () => openModal(project));
        projectsGrid.appendChild(card);
    });
    
    // 触发滚动动画
    setTimeout(() => observeElements(), 100);
}

// ============================================
// 筛选功能
// ============================================
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects(btn.dataset.filter);
    });
});

// ============================================
// 项目详情弹窗
// ============================================
function openModal(project) {
    const galleryHTML = project.gallery.map((img, i) => 
        `<img src="${img}" alt="${project.title} - 图${i + 1}" loading="lazy">`
    ).join('');
    
    modalContent.innerHTML = `
        <div class="modal-hero">
            <img src="${project.cover}" alt="${project.title}">
            <div class="modal-hero-overlay"></div>
        </div>
        <div class="modal-body">
            <span class="modal-category">${project.categoryLabel}</span>
            <h2 class="modal-title">${project.title}</h2>
            <div class="modal-meta">
                <span>${project.year}</span>
                <span>·</span>
                <span>${project.location}</span>
                <span>·</span>
                <span>${project.type}</span>
                <span>·</span>
                <span>${project.area}</span>
            </div>
            <div class="modal-description">
                ${project.description}
            </div>
            <div class="modal-gallery">
                ${galleryHTML}
            </div>
        </div>
    `;
    
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
projectModal.querySelector('.modal-backdrop').addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// ============================================
// 滚动显示动画
// ============================================
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ============================================
// 数字计数动画
// ============================================
function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.count);
                animateValue(entry.target, 0, target, 1500);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(num => observer.observe(num));
}

function animateValue(element, start, end, duration) {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(start + (end - start) * easeProgress);
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// ============================================
// 首屏图片加载
// ============================================
function initHero() {
    const hero = document.querySelector('.hero');
    const heroImage = document.querySelector('.hero-image');
    
    // 模拟图片加载完成
    setTimeout(() => {
        hero.classList.add('loaded');
    }, 100);
}

// ============================================
// 平滑滚动
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ============================================
// 初始化
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initHero();
    renderProjects();
    observeElements();
    animateNumbers();
    handleScroll();
});
