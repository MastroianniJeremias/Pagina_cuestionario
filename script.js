

// Elije una sola opcion en checkbox yes-no

const yesCheckbox = document.getElementById('checkbox-two-yes');
const noCheckbox = document.getElementById('checkbox-two-no');

yesCheckbox.addEventListener('change', () => {
    if (yesCheckbox.checked) {
        noCheckbox.checked = false;
    }
});

noCheckbox.addEventListener('change', () => {
    if (noCheckbox.checked) {
        yesCheckbox.checked = false;
    }
});