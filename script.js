document.addEventListener('DOMContentLoaded', function() {
    // 工具数据
    const tools = [
        {
            id: 1,
            name: "n8n",
            description: "开源工作流程自动化工具，支持自托管，提供超过170个应用程序的集成，帮助用户将复杂流程转化为无缝的自动化工作流。",
            url: "https://n8n.io/",
            icon: "fas fa-cogs",
            category: "workflow"
        },
        {
            id: 2,
            name: "Cookup AI",
            description: "致力于发现各种用例的AI应用程序，帮助用户找到适合其需求的AI工具。",
            url: "https://www.cookup.ai/",
            icon: "fas fa-search",
            category: "productivity"
        },
        {
            id: 3,
            name: "Rezi.ai",
            description: "利用领先的AI技术，自动化创建可雇佣简历的各个方面，包括写作、编辑、格式化和优化。",
            url: "https://www.rezi.ai/",
            icon: "fas fa-file-alt",
            category: "content"
        },
        {
            id: 4,
            name: "excelformulabot",
            description: "利用人工智能，将文本指令快速转换为Excel公式，帮助用户在几秒钟内精通Excel。",
            url: "https://excelformulabot.com/",
            icon: "fas fa-table",
            category: "productivity"
        },
        {
            id: 5,
            name: "Chatbase",
            description: "允许用户上传PDF文件，并生成基于GPT的聊天机器人链接，能够回答文件中的任何问题。",
            url: "https://www.chatbase.co/",
            icon: "fas fa-robot",
            category: "content"
        },
        {
            id: 6,
            name: "Reclaim.ai",
            description: "为团队的优先事项创建智能时间表，通过智能、灵活和自适应的时间编排，帮助用户节省高达40%的工作时间。",
            url: "https://www.reclaim.ai/",
            icon: "fas fa-clock",
            category: "productivity"
        },
        {
            id: 7,
            name: "eCommerce ChatGPT Prompts",
            description: "为电子商务商店和营销活动提供现成的提示，生成超过200万个预构建的电子商务提示，满足各种营销需求。",
            url: "https://ecommercegpt.ai/",
            icon: "fas fa-shopping-cart",
            category: "prompt"
        },
        {
            id: 8,
            name: "PromptExtend",
            description: "AI工具，帮助用户从种子提示创建多个增强的AI艺术提示，生成随机提示符。",
            url: "https://www.promptextend.com/",
            icon: "fas fa-paint-brush",
            category: "prompt"
        },
        {
            id: 9,
            name: "GPT Cheat Sheet",
            description: "收集了最受欢迎的ChatGPT提示、第三方软件产品和一般提示，帮助用户更好地使用ChatGPT。",
            url: "https://gptcheatsheet.ai/",
            icon: "fas fa-list-alt",
            category: "prompt"
        },
        {
            id: 10,
            name: "100+ AI Prompts",
            description: "提供关于ChatGPT、Dall-e、Midjourney和Stable Diffusion的提示，供用户使用或从中获得灵感。",
            url: "https://100plusai.com/",
            icon: "fas fa-lightbulb",
            category: "prompt"
        },
        {
            id: 11,
            name: "NeutronField",
            description: "专业策划的AI文本到图像提示市场，用户可以展示并销售他们的AI提示，或从其他提示工程师处购买现成的提示。",
            url: "https://www.neutronfield.com/",
            icon: "fas fa-store",
            category: "prompt"
        },
        {
            id: 12,
            name: "PromptBase",
            description: "平台，用户可以在此查找和销售可与各种AI语言模型（如DALL·E、GPT-3、Midjourney和Stable Diffusion）一起使用的提示。",
            url: "https://www.promptbase.com/",
            icon: "fas fa-database",
            category: "prompt"
        },
        {
            id: 13,
            name: "Awesome ChatGPT Prompts",
            description: "提供了一系列提示，可与OpenAI训练的ChatGPT模型一起使用，以生成类似人类的文本响应。",
            url: "https://awesome-chatgpt-prompts.com/",
            icon: "fas fa-comment-dots",
            category: "prompt"
        },
        {
            id: 14,
            name: "ShowGPT",
            description: "收集和策划最好的ChatGPT提示，用户可以添加更多提示，投票选出最喜欢的提示，并发现最佳使用方法。",
            url: "https://www.showgpt.ai/",
            icon: "fas fa-star",
            category: "prompt"
        },
        {
            id: 15,
            name: "FlowGPT",
            description: "优化工作流程的平台，分享、发现和学习最有用的ChatGPT提示。",
            url: "https://www.flowgpt.com/",
            icon: "fas fa-project-diagram",
            category: "workflow"
        },
        {
            id: 16,
            name: "SaaS Prompts",
            description: "为SaaS创始人、企业家和营销人员提供500多个可操作的现成ChatGPT和AI提示，帮助他们发展业务。",
            url: "https://www.saasprompts.com/",
            icon: "fas fa-rocket",
            category: "prompt"
        },
        {
            id: 17,
            name: "3DFY.ai",
            description: "利用生成式人工智能从文本中创建高质量3D模型，满足大规模生成3D内容的需求。",
            url: "https://www.3dfy.ai/",
            icon: "fas fa-cube",
            category: "content"
        },
        {
            id: 18,
            name: "AI工具集官网",
            description: "收录了国内外数百个AI工具，包括AI写作工具、AI图像生成、AI视频制作等，帮助用户找到所需的AI工具。",
            url: "https://ai-bot.cn/",
            icon: "fas fa-toolbox",
            category: "productivity"
        }
    ];

    const toolsContainer = document.getElementById('tools-container');
    const searchInput = document.getElementById('search-input');
    const categoryButtons = document.querySelectorAll('.category-btn');

    // 渲染工具卡片
    function renderTools(toolsToRender) {
        toolsContainer.innerHTML = '';
        
        if (toolsToRender.length === 0) {
            toolsContainer.innerHTML = '<div class="no-results">没有找到匹配的工具</div>';
            return;
        }
        
        toolsToRender.forEach(tool => {
            const toolCard = document.createElement('div');
            toolCard.className = 'tool-card';
            toolCard.dataset.category = tool.category;
            
            toolCard.innerHTML = `
                <div class="tool-content">
                    <div class="tool-icon">
                        <i class="${tool.icon}"></i>
                    </div>
                    <h3 class="tool-title">${tool.name}</h3>
                    <p class="tool-description">${tool.description}</p>
                    <a href="${tool.url}" class="tool-link" target="_blank">访问网站</a>
                </div>
            `;
            
            toolsContainer.appendChild(toolCard);
        });
    }

    // 初始渲染所有工具
    renderTools(tools);

    // 搜索功能
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const activeCategory = document.querySelector('.category-btn.active').dataset.category;
        
        let filteredTools = tools;
        
        if (activeCategory !== 'all') {
            filteredTools = filteredTools.filter(tool => tool.category === activeCategory);
        }
        
        if (searchTerm) {
            filteredTools = filteredTools.filter(tool => 
                tool.name.toLowerCase().includes(searchTerm) || 
                tool.description.toLowerCase().includes(searchTerm)
            );
        }
        
        renderTools(filteredTools);
    });

    // 分类筛选功能
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.dataset.category;
            const searchTerm = searchInput.value.toLowerCase();
            
            let filteredTools = tools;
            
            if (category !== 'all') {
                filteredTools = filteredTools.filter(tool => tool.category === category);
            }
            
            if (searchTerm) {
                filteredTools = filteredTools.filter(tool => 
                    tool.name.toLowerCase().includes(searchTerm) || 
                    tool.description.toLowerCase().includes(searchTerm)
                );
            }
            
            renderTools(filteredTools);
        });
    });

    // 添加滚动动画效果
    const animateOnScroll = () => {
        const cards = document.querySelectorAll('.tool-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    };

    // 初始化卡片动画
    setTimeout(animateOnScroll, 500);

    // 添加视差效果
    document.addEventListener('mousemove', (e) => {
        const planet = document.querySelector('.planet');
        const satellites = document.querySelectorAll('.satellite');
        
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        
        planet.style.transform = `translate(-50%, -50%) translate(${x * 20}px, ${y * 20}px)`;
        
        satellites.forEach((satellite, index) => {
            const factor = (index + 1) * 5;
            satellite.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
        });
    });
});