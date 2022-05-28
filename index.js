const content = {
	"Viewport navigation": {
		"Select all": "A",
	},
/*	"Liquid Satan": {
		"Mmm, no, very unwise": "Shift + Alt + [",
		"Like I said": "Ctrl + ]",
		"This is not good": "[][]][[]]",
	},
	"No smoking": {
		"How else can I fuck this up": "M E X 2 , M E Shift + Y 2 E",
	},*/
};

window.onload = () => {
	let scrolly = document.getElementById("scrolly-bitch");

	let section_template = document.getElementById("section-template");
	let keybind_template = document.getElementById("keybind-template");

	let sections = Object.keys(content);
	for (i in sections) {
		let section_title = sections[i]; // i hate this
		let section = content[section_title];

		let section_node = section_template.content.cloneNode(true);
		section_node.getElementById("section-title").textContent = section_title;

		let keybinds = Object.keys(section);
		for (k in keybinds) {
			let keybind_label = keybinds[k]; // yep
			let keybind_keys = section[keybind_label];

			let keybind_node = keybind_template.content.cloneNode(true);
			keybind_node.getElementById("label").textContent = keybind_label;
			keybind_node.getElementById("keys").innerHTML = keybind_keys
				.replace(/(^|\s)([^+,\s])/g, "$1<kbd>$2")
				.replace(/([^+,\s])($|\s)/g, "$1</kbd>$2")
				.replace(/,/g, ",<br />");

			section_node.appendChild(keybind_node);
		}

		scrolly.appendChild(section_node);
	}

};
