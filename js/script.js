const menuStructure = [
  {
    category: "Overview",
    items: [
      {
        icon: "fa-tachometer-alt",
        label: "Dashboard",
        content: "Welcome to your dashboard!",
      },
      {
        icon: "fa-question-circle",
        label: "New Question",
        content: "Create a new question here.",
      },
      {
        icon: "fa-book",
        label: "Question Bank",
        content: "Access your question bank.",
      },
    ],
  },
  {
    category: "Package",
    items: [
      {
        icon: "fa-box-open",
        label: "Ready Question",
        content: "Access ready-made questions.",
      },
    ],
  },
  {
    category: "Management",
    items: [
      {
        icon: "fa-clipboard",
        label: "My Questions",
        content: "Manage your questions.",
      },
      {
        icon: "fa-clipboard",
        label: "My Exam",
        content: "Manage your exams.",
      },
      {
        icon: "fa-user-graduate",
        label: "Our Students",
        content: "Manage your students.",
      },
    ],
  },
  {
    category: "Appearances",
    items: [
      {
        icon: "fa-school",
        label: "My Institute",
        content: "Manage your institute settings.",
      },
    ],
  },
  {
    category: "OMR Evaluator",
    items: [
      {
        icon: "fa-clipboard-check",
        label: "OMR Tutorial",
        content: "Learn how to use OMR.",
      },
      {
        icon: "fa-file-alt",
        label: "OMR Generator",
        content: "Generate OMR sheets.",
      },
      {
        icon: "fa-key",
        label: "OMR Token",
        content: "Manage OMR tokens.",
      },
      {
        icon: "fa-clipboard-check",
        label: "OMR Evaluator",
        content: "Evaluate OMR sheets.",
      },
    ],
  },
  {
    category: "Support",
    items: [
      {
        icon: "fa-envelope",
        label: "Contact",
        content: "Get in touch with us.",
      },
      {
        icon: "fa-exclamation-triangle",
        label: "Report/Feedback",
        content: "Submit a report or feedback.",
      },
    ],
  },
];

let activeMenuItem = "Dashboard";
let isDarkMode = false;
let isLoggedIn = false;

function renderSidebar() {
  const sidebarNav = document.getElementById("sidebarNav");
  sidebarNav.innerHTML = menuStructure
    .map(
      (category) => `
          <div class="mb-6">
              <h2 class="text-lg font-semibold mb-2 pb-2 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white">
                  ${category.category}
              </h2>
              <ul class="space-y-2">
                  ${category.items
                    .map(
                      (item) => `
                      <li>
                          <button 
                              class="w-full text-left px-4 py-2 rounded-md transition-colors duration-200 ${
                                activeMenuItem === item.label
                                  ? "bg-[#083D55] text-white"
                                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                              }"
                              onclick="setActiveMenuItem('${item.label}')"
                          >
                              <i class="fas ${item.icon} mr-2"></i> ${
                        item.label
                      }
                          </button>
                      </li>
                  `
                    )
                    .join("")}
              </ul>
          </div>
      `
    )
    .join("");
}

function setActiveMenuItem(label) {
  activeMenuItem = label;
  renderSidebar();
  renderMainContent();
  document.getElementById("pageTitle").textContent = label;
  if (window.innerWidth < 768) {
    document.getElementById("sidebar").classList.add("hidden");
  }
}

function renderMainContent() {
  const mainContent = document.getElementById("mainContent");
  if (activeMenuItem === "Dashboard") {
    mainContent.innerHTML = `
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  ${menuStructure[0].items
                    .map(
                      (item) => `
                      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                          <button class="w-full text-left px-4 py-2 rounded-md transition-colors duration-200 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                              <i class="fas ${item.icon} mr-2"></i>
                              ${item.label}
                          </button>
                      </div>
                  `
                    )
                    .join("")}
              </div>
          `;
  } else {
    const content = menuStructure
      .flatMap((category) => category.items)
      .find((item) => item.label === activeMenuItem)?.content;
    mainContent.innerHTML = `
              <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <p class="text-gray-800 dark:text-white">${content}</p>
              </div>
          `;
  }
}

function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  document.documentElement.classList.toggle("dark", isDarkMode);
  renderUserMenu();
}

function toggleUserMenu() {
  const userMenu = document.getElementById("userMenu");
  userMenu.classList.toggle("hidden");
}

function renderUserMenu() {
  const userMenu = document.getElementById("userMenu");
  userMenu.innerHTML = isLoggedIn
    ? `
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
              <i class="fas fa-user mr-2"></i>
              My Profile
          </a>
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
              <i class="fas fa-cog mr-2"></i>
              Settings
          </a>
          <div class="border-t border-gray-200 dark:border-gray-700"></div>
          <div class="flex items-center justify-between px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
              <span>
                  <i class="fas ${
                    isDarkMode ? "fa-sun" : "fa-moon"
                  } mr-2"></i>
                  ${isDarkMode ? "Light" : "Dark"} Mode
              </span>
              <button
                  class="w-10 h-5 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center transition-colors duration-200 focus:outline-none ${
                    isDarkMode ? "bg-blue-600" : "bg-gray-300"
                  }"
                  onclick="toggleDarkMode()"
              >
                  <span
                      class="w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-200 ${
                        isDarkMode ? "translate-x-5" : "translate-x-1"
                      }"
                  ></span>
              </button>
          </div>
          <div class="border-t border-gray-200 dark:border-gray-700"></div>
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700" onclick="handleLogout()">
              <i class="fas fa-sign-out-alt mr-2"></i>
              Logout
          </a>
      `
    : `
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700" onclick="handleLogin()">
              <i class="fas fa-sign-in-alt mr-2"></i>
              Login
          </a>
      `;
}

function handleLogin() {
  isLoggedIn = true;
  renderUserMenu();
  toggleUserMenu();
}

function handleLogout() {
  isLoggedIn = false;
  setActiveMenuItem("Dashboard");
  renderUserMenu();

  toggleUserMenu();
}

// Event Listeners
document
  .getElementById("openSidebarBtn")
  .addEventListener("click", () => {
    document.getElementById("sidebar").classList.remove("hidden");
  });

document
  .getElementById("closeSidebarBtn")
  .addEventListener("click", () => {
    document.getElementById("sidebar").classList.add("hidden");
  });

document
  .getElementById("userMenuBtn")
  .addEventListener("click", toggleUserMenu);

// Initial render
renderSidebar();
renderMainContent();
renderUserMenu();