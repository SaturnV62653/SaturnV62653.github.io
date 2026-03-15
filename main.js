function switchTheme() {
    const body = document.body;

    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        body.classList.add('dark');
    }
}