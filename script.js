const event_title = document.getElementById('event-title');
const event_date = document.getElementById('event-date');
const event_category = document.getElementById('event-category');
const event_description = document.getElementById('event-description');
const add_event_button = document.getElementById('add-event');
const event_list = document.getElementById('event-list');
const clear_events = document.getElementById('clear-events');
const no_event_message = document.getElementById('no-event-message');
const add_sample_events = document.getElementById('sample-events');

var n = 0;

function no_events() {
    if (n == 0) {
        no_event_message.removeAttribute('hidden');
    }
    else {
        no_event_message.setAttribute('hidden', true);
    }}

add_event_button.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const title = event_title.value;
    const date = event_date.value;
    const category = event_category.value;
    const description = event_description.value;

    if (title && date && category && description) {
        const listItem = document.createElement("li");
        listItem.setAttribute("class", "event-item");

        const title_p = document.createElement("span");
        title_p.innerHTML = "<strong>" + title + "</strong>";
        title_p.setAttribute("class", "event-title");

        const deleteButton = document.createElement("button");
        const deleteicon = document.createElement("img");
        deleteicon.src = "download.webp"; // Assuming a delete icon image exists
        deleteicon.alt = "Delete";
        deleteicon.setAttribute("class", "delete-icon");
        deleteButton.appendChild(deleteicon);
        deleteButton.setAttribute("class", "delete-button");

        const date_p = document.createElement("p");
        date_p.innerHTML = "<b>" + date + "</b>";
        date_p.setAttribute("class", "event-date");

        const category_p = document.createElement("span");
        category_p.textContent = category;
        category_p.setAttribute("class", "event-category");

        const description_p = document.createElement("p");
        description_p.textContent = description;
        description_p.setAttribute("class", "event-description");

        listItem.appendChild(title_p);
        listItem.appendChild(deleteButton);
        listItem.appendChild(date_p);
        listItem.appendChild(category_p);
        listItem.appendChild(description_p);

        console.log(listItem);
        event_list.appendChild(listItem);
        n++;

        // Clear form fields
        event_title.value = '';
        event_date.value = '';
        event_category.value = '';
        event_description.value = '';
        no_events();

        }
});

clear_events.addEventListener('click', function() {
    event_list.innerHTML = '';
    n = 0;
    no_events();
});

event_list.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-button') || event.target.classList.contains('delete-icon')) {
        const listItem = event.target.closest('.event-item');
        if (listItem) {
            listItem.remove();
            n--;
            no_events();
        }
    }
});

add_sample_events.addEventListener('click', function() {
    const sample_events = [

        { title: "Team Meeting", date: "2024-06-15", category: "seminar", description: "Quarterly team meeting to discuss project progress." },
        { title: "Conference", date: "2024-07-10", category: "conference", description: "Annual tech conference on AI and Machine Learning." }
    ];

    sample_events.forEach(event => {
        const listItem = document.createElement("li");
        listItem.setAttribute("class", "event-item");

        const title_p = document.createElement("span");
        title_p.innerHTML = "<strong>" + event.title + "</strong>";
        title_p.setAttribute("class", "event-title");

        const deleteButton = document.createElement("button");
        const deleteicon = document.createElement("img");
        deleteicon.src = "download.webp"; // Assuming a delete icon image exists
        deleteicon.alt = "Delete";
        deleteicon.setAttribute("class", "delete-icon");
        deleteButton.appendChild(deleteicon);
        deleteButton.setAttribute("class", "delete-button");

        const date_p = document.createElement("p");
        date_p.innerHTML = "<b>" + event.date + "</b>";
        date_p.setAttribute("class", "event-date");

        const category_p = document.createElement("span");
        category_p.textContent = event.category;
        category_p.setAttribute("class", "event-category");

        const description_p = document.createElement("p");
        description_p.textContent = event.description;
        description_p.setAttribute("class", "event-description");

        listItem.appendChild(title_p);
        listItem.appendChild(deleteButton);
        listItem.appendChild(date_p);
        listItem.appendChild(category_p);
        listItem.appendChild(description_p);

        event_list.appendChild(listItem);
    });
    n += sample_events.length;
    no_events();
});