const changeThemeBtn = document.querySelector("#change-theme")

const toggleDarkMode = () => {
    document.body.classList.toggle("dark")

}

const loadTheme = () => {
    const darkMode = localStorage.getItem("dark")

    if (darkMode) {
        toggleDarkMode()
    }
}

loadTheme()


changeThemeBtn.addEventListener("change", () => {
    toggleDarkMode()

    // save or remove dark mode
    localStorage.removeItem("dark")

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("dark", 1)
    }
})