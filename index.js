const MAIN_ACCOUNT = 1;
const STUDY_ACCOUNT = 2;

const projects = [
    {
        title: "Uno",
        description: "A modern, networked Uno card game clone.",
        type: MAIN_ACCOUNT,
        tags: ["C++", "CMake", "SDL", "Protobuf"],
        link: "https://github.com/l-nikita/uno",
        image: "https://github.com/l-nikita/uno/blob/main/docs/images/main_menu.png?raw=true",
    },    
    {
        title: "Noxel Engine",
        description: "A game engine featuring C++ 23, DirectX 11, Vulkan, SDL3, EnTT and JoltPhysics.",
        type: MAIN_ACCOUNT,
        tags: ["C++", "CMake", "SDL", "Protobuf", "EnTT", "DirectX 11"],
        link: "https://github.com/l-nikita/noxel-engine",
        image: "https://github.com/l-nikita/noxel-engine/raw/main/docs/images/overview.png",
    },    
    {
        title: "Noxel Engine (C#)",
        description: "An experimental game engine prototype in C# using .NET 10.",
        type: MAIN_ACCOUNT,
        tags: ["C#", ".NET", "OpenGL"],
        link: "https://github.com/l-nikita/csharp-noxel-engine",
        image: "https://github.com/l-nikita/csharp-noxel-engine/blob/main/docs/images/overview.png?raw=true",
    },
    {
        title: "Language School Info System",
        description: "A web application for managing a language school, developed using ASP.NET and Entity Framework Core.",
        type: STUDY_ACCOUNT,
        tags: ["C#", "ASP.NET", "Bootstrap", "Web"],
        link: "https://github.com/nikita-lit/csharp-asp",
        image: "https://github.com/user-attachments/assets/3be5c8f7-c78e-44f0-a3b6-d49df763ba11"
    },
    {
        title: "Windows Forms - Car Service",
        description: "A desktop application built using Windows Forms. The project implements graphical interface elements, event handling and using of Entity Framework Core with SQLite as database.",
        type: STUDY_ACCOUNT,
        tags: ["C#", ".NET", "Windows Forms"],
        link: "https://github.com/nikita-lit/csharp-winforms",
        image: "https://github.com/user-attachments/assets/1e53f9fd-5489-4651-a9ad-84d207316f74"
    },  
    {
        title: "MAUI Tutorial project",
        description: "A tutorial project built using .NET MAUI for cross-platform application development. Includes basic interface elements, navigation between pages and working with data.",
        type: STUDY_ACCOUNT,
        tags: ["C#", ".NET MAUI"],
        link: "https://github.com/nikita-lit/csharp-maui"
    },    
    {
        title: "PHP Website",
        description: "A website developed in PHP that demonstrates the basics of server-side development: routing, form processing and database interaction.",
        type: STUDY_ACCOUNT,
        tags: ["PHP", "Web"],
        link: "https://github.com/nikita-lit/php-web"
    }, 
    {
        title: "Python Basics",
        description: "A collection of basic algorithms and exercises in Python. Covers the language's core concepts: variables, conditions, loops, functions and simple data structures. Also work with SQLite database.",
        type: STUDY_ACCOUNT,
        tags: ["Python", "Algorithms"],
        link: "https://github.com/nikita-lit/python-basics"
    },    
];

const projectsGrid = document.getElementById('projects-grid');

projects.forEach(project => {
    const card = document.createElement('div');

    let typeName = "Personal Project";
    let spanClass = "text-blue-400";
    let borderClass = "hover:border-blue-500";

    if (project.type == STUDY_ACCOUNT)
    {
        typeName = "Study Project";
        spanClass = "text-green-400";
        borderClass = "hover:border-green-500";
    }

    card.className = `bg-gray-800 rounded-xl border border-gray-700 ${borderClass} transition cursor-pointer shadow-lg hover:shadow-2xl flex flex-col overflow-hidden`;
    
    card.onclick = () => {
        window.location.href = project.link;
    };

    let imageHTML = "";
    if (project.image) 
    {
        imageHTML = `
            <div class="w-100 overflow-hidden border-b border-gray-700/50">
                <img 
                    src="${project.image}" 
                    alt="${project.title} Screenshot" 
                    class="w-full object-contain transition-transform duration-300 hover:scale-105"
                    onerror="this.parentElement.style.display='none';"
                />
            </div>
        `;
    }

    card.innerHTML = `
        ${imageHTML}
        <div class="p-8 flex-grow flex flex-col">
            <span class="${spanClass} text-sm font-mono">[ ${typeName} ]</span>
            <h3 class="text-2xl font-bold mt-2 mb-4">${project.title}</h3>
            <p class="text-gray-400 mb-6 flex-grow">${project.description}</p>
            <div class="flex flex-wrap gap-2 mt-auto">
                ${project.tags.map(tag => `<span class="bg-gray-700/60 px-3 py-1 rounded text-sm">${tag}</span>`).join('')}
            </div>
        </div>
    `;

    projectsGrid.appendChild(card);
});