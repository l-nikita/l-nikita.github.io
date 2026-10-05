const MAIN_ACCOUNT = 1;
const STUDY_ACCOUNT = 2;

const projects = [
    {
        title: "Uno",
        description: "A modern, networked Uno card game clone.",
        type: MAIN_ACCOUNT,
        tags: ["C++", "CMake", "SDL", "Protobuf"],
        link: "https://github.com/l-nikita/uno",
        image: "https://github.com/l-nikita/uno/raw/main/docs/images/main_menu.png",
    },    
    {
        title: "Noxel Engine",
        description: "A custom game engine prototype in C++ featuring DirectX 11, SDL3 and JoltPhysics. Implemented rendering pipeline, input system and basic physics.",
        type: MAIN_ACCOUNT,
        tags: ["C++", "CMake", "SDL", "DirectX 11"],
        link: "https://github.com/l-nikita/noxel-engine",
        image: "https://github.com/l-nikita/noxel-engine/raw/main/docs/images/overview.png",
    },    
    {
        title: "Noxel Engine (C#)",
        description: "A game engine prototype in C# using .NET 10.",
        type: MAIN_ACCOUNT,
        tags: ["C#", ".NET", "OpenGL"],
        link: "https://github.com/l-nikita/csharp-noxel-engine",
        image: "https://github.com/l-nikita/csharp-noxel-engine/raw/main/docs/images/overview.png",
    },
    {
        title: "KiirLink Server",
        description: "Backend for a URL shortener built with ASP.NET Core minimal APIs. Includes Identity authentication, private and expiring links, favourites, categories and click analytics by device, source and country.",
        type: STUDY_ACCOUNT,
        tags: ["C#", "ASP.NET Core", "EF Core", "SQLite", "Docker"],
        link: "https://github.com/nikita-lit/kiirlink-server",
        icon: "fas fa-server"
    },
    {
        title: "KiirLink Client",
        description: "Cross-platform .NET MAUI app for the KiirLink URL shortener. Create short links and QR codes, organize them with categories and favourites, and view click analytics.",
        type: STUDY_ACCOUNT,
        tags: ["C#", ".NET MAUI", "MVVM"],
        link: "https://github.com/nikita-lit/kiirlink-client",
        image: "https://github.com/nikita-lit/kiirlink-client/raw/main/docs/images/overview.png"
    },
    {
        title: "Language School Info System",
        description: "A web application for managing a language school, developed using ASP.NET and Entity Framework Core.",
        type: STUDY_ACCOUNT,
        tags: ["C#", "ASP.NET", "Bootstrap"],
        link: "https://github.com/nikita-lit/csharp-asp",
        image: "https://github.com/nikita-lit/csharp-asp/raw/main/docs/images/overview.png"
    },
    {
        title: "Car Service",
        description: "A desktop application built using Windows Forms for managing vehicle, owner, and service records using SQLite and Entity Framework Core.",
        type: STUDY_ACCOUNT,
        tags: ["C#", ".NET", "Windows Forms"],
        link: "https://github.com/nikita-lit/csharp-winforms",
        image: "https://github.com/nikita-lit/csharp-winforms/raw/main/docs/images/overview.png"
    },  
    {
        title: "Tic Tac Toe",
        description: "A Tic-Tac-Toe game developed with .NET MAUI, offering a modern UI. It includes customizable settings, statistics tracking, and support for playing against a bot.",
        type: STUDY_ACCOUNT,
        tags: ["C#", ".NET MAUI"],
        link: "https://github.com/nikita-lit/csharp-maui",
        image: "https://github.com/nikita-lit/csharp-maui/raw/main/docs/images/overview.png"
    },    
    {
        title: "PHP Website",
        description: "A website developed in PHP that demonstrates the basics of server-side development: routing, form processing and database interaction.",
        type: STUDY_ACCOUNT,
        tags: ["PHP", "SQL"],
        link: "https://github.com/nikita-lit/php-web",
        icon: "fab fa-php"
    }, 
    {
        title: "C# Basics",
        description: "A set of educational tasks and algorithms in C#. Includes the implementation of basic data structures, working with loops, conditions and functions.",
        type: STUDY_ACCOUNT,
        tags: ["C#", "Algorithms"],
        link: "https://github.com/nikita-lit/csharp-basics"
    },       
    {
        title: "Python Basics",
        description: "A collection of basic algorithms and exercises in Python. Includes the language's core concepts: variables, conditions, loops, functions and simple data structures. Also work with SQLite database.",
        type: STUDY_ACCOUNT,
        tags: ["Python", "Algorithms"],
        link: "https://github.com/nikita-lit/python-basics",
        icon: "fab fa-python"
    },    
];

const personalGrid = document.getElementById('personal-projects-grid');
const studyGrid = document.getElementById('study-projects-grid');

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

    card.className = `group bg-gray-800 border border-gray-700 ${borderClass} transition cursor-pointer shadow-lg hover:shadow-2xl flex flex-col overflow-hidden`;
    
    card.onclick = () => {
        window.location.href = project.link;
    };

    let imageHTML = "";
    if (project.image)
    {
        imageHTML = `
            <img
                src="${project.image}"
                alt="${project.title} Screenshot"
                class="absolute inset-0 w-full h-full object-contain p-4 bg-gray-900 drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
                onerror="this.remove();"
            />
        `;
    }

    card.innerHTML = `
        <div class="relative w-full aspect-video overflow-hidden bg-gray-900 border-b border-gray-700/50 flex items-center justify-center">
            <i class="${project.icon ?? "fas fa-code"} text-6xl ${spanClass} opacity-30"></i>
            ${imageHTML}
        </div>
        <div class="p-6 flex-grow flex flex-col">
            <span class="${spanClass} text-sm font-mono">[ ${typeName} ]</span>
            <h3 class="text-2xl font-bold mt-2 mb-4">${project.title}</h3>
            <p class="text-gray-400 mb-6 flex-grow">${project.description}</p>
            <div class="flex flex-wrap gap-2 mt-auto">
                ${project.tags.map(tag => `<span class="bg-gray-700/60 border border-gray-700 px-3 py-1 rounded text-sm">${tag}</span>`).join('')}
            </div>
        </div>
    `;

    if (project.type == STUDY_ACCOUNT)
        studyGrid.appendChild(card);
    else
        personalGrid.appendChild(card);
});
