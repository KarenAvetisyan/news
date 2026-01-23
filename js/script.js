document.addEventListener('DOMContentLoaded', function () {
   document.querySelectorAll('.submenu-toggle').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            const parent = this.closest('.has-submenu');
            parent.classList.toggle('open');
        });
    });
})