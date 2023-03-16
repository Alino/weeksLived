const calculateBtn = document.querySelector("#calculate-btn");
const birthdateInput = document.querySelector("#birthdate");
const checkboxesContainer = document.querySelector("#checkboxes-container");
const h1 = document.querySelector("#heading");

const calculateWeeksLived = () => {
	const birthdate = new Date(birthdateInput.value);
	const now = new Date();

	const millisecondsLived = now.getTime() - birthdate.getTime();
	const weeksLived = Math.floor(millisecondsLived / (1000 * 60 * 60 * 24 * 7));
    const weeksRemaining = (52 * 90) - weeksLived;
    h1.innerText = `You lived: ${weeksLived} weeks and you have ${weeksRemaining} left until 90 years old`;

    

	displayCheckboxes(weeksLived);
};

const displayCheckboxes = (weeksLived) => {
    checkboxesContainer.innerHTML = "";

    const ROW_WIDTH = 52;

    for (let i = 0; i < weeksLived; i++) {
        if (i % ROW_WIDTH === 0) {
            // start a new row
            const newRow = document.createElement("div");
            newRow.classList.add("checkboxes-row");
            const newLabel = document.createElement("label");
            newLabel.innerText = (i / ROW_WIDTH);
            newRow.appendChild(newLabel);
            checkboxesContainer.appendChild(newRow);
        }

        const newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        newCheckbox.disabled = true;
        newCheckbox.checked = true;

        const newLabel = document.createElement("label");
        newLabel.innerText = i;

        const currentRow = checkboxesContainer.lastChild;
        // currentRow.appendChild(newLabel);
        currentRow.appendChild(newCheckbox);
    }

    // display remaining checkboxes until 90 years old
    for (let i = weeksLived; i < ROW_WIDTH * 90; i++) {
        if (i % ROW_WIDTH === 0) {
            // start a new row
            const newRow = document.createElement("div");
            newRow.classList.add("checkboxes-row");
            const newLabel = document.createElement("label");
            newLabel.innerText = (i / ROW_WIDTH);
            newRow.appendChild(newLabel);
            checkboxesContainer.appendChild(newRow);
        }

        const newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        newCheckbox.disabled = true;

        const newLabel = document.createElement("label");
        newLabel.innerText = i;

        const currentRow = checkboxesContainer.lastChild;
        // currentRow.appendChild(newLabel);
        currentRow.appendChild(newCheckbox);
    }

    const rowWidth = checkboxesContainer.querySelector(".checkboxes-row").offsetWidth;
    checkboxesContainer.style.width = `${rowWidth}px`;
};

calculateBtn.addEventListener("click", calculateWeeksLived);

const progressBar = document.querySelector('.progress-bar');

checkboxesContainer.addEventListener('scroll', () => {
    // console.log(checkboxesContainer.scrollTop, checkboxesContainer.scrollHeight)
    const scrolled = checkboxesContainer.scrollTop;
    const maxScrolled = checkboxesContainer.scrollHeight - checkboxesContainer.clientHeight;
    console.log(checkboxesContainer.scrollHeight, checkboxesContainer.clientHeight)
    // console.log(scrolled, maxScrolled)
  const progress = scrolled / maxScrolled;
  progressBar.style.width = `${progress * 100}%`;
});

