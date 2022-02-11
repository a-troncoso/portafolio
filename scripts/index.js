const applyMainContent = (templateName) => {
  fetch(`../templates/${templateName}.html`)
    .then((response) => response.text())
    .then((data) => {
      document.querySelector(".main_content").innerHTML = data;
      console.log(data);
    });
};

applyMainContent("aboutMe");
