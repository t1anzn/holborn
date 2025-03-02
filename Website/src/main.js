// Main Javascript

// Variables
const tabs = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');


// Loop through all tabs
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        console.log(`Clicked tab: ${tab.textContent}`); // Print to console which tab is being clicked

        // Deactivate all tabs and contents
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        // Activate the clicked tab and corresponding content
        tab.classList.add('active');
        const target = document.querySelector(`#${tab.dataset.tab}`); // Select the element with an ID matching the value stored in data-tab attribute and assign it to the 'target' variable
        target.classList.add('active');
    });
});
