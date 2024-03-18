const showForm = () => {
    document.querySelector(".formWrapper").classList.remove("none");
};

const handleClickOnTheBlur = (event) => {
    if (event.target.className === "formWrapper") {
        document.querySelector(".formWrapper").classList.add("none");
    }
};

const handleFormSubmit = (event) => {
    event.preventDefault();
    const data = {
        title: event.target.title.value,
        Subtitle: event.target.Subtitle.value,
        expType: event.target.expType.value,
        expDescription: event.target.expDescription.value,
    };

    if (data.expType === "work") {
        const parent = document.querySelector(".work_exp")
        const child = document.querySelector(".exp")
        const newChild = child.cloneNode(true)
        newChild.querySelector(".medium").textContent = data.title
        newChild.querySelector(".altText small").textContent = data.Subtitle
        newChild.querySelector(".x-small").textContent = data.expDescription

        parent.appendChild(newChild);
    }else if(data.expType === "edukation"){
        const parent = document.querySelector(".edukation")
        const child = document.querySelector(".edu")
        const newChild = child.cloneNode(true)
        newChild.querySelector(".medium").textContent = data.title
        newChild.querySelector(".altText small").textContent = data.Subtitle
        parent.appendChild(newChild);

    }else{
        console.error("Unknown type")
    }

    event.target.title.value = ""
    event.target.Subtitle.value = ""
    event.target.expType.value = "work"
    event.target.expDescription.value = ""

    document.querySelector(".formWrapper").classList.add("none");
};