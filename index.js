const content = {
	"Viewport navigation": {
		"Select all": "A",
		"Select loop": "Alt",
		"Viewport shading": "Z",
		"Front": "Num1",
		"Right": "Num3",
		"Top": "Num7",
		"Opposite": "Num9",
		"Ortho/Perspective": "Num5",
		"Select mode: Vertex": "1",
		"Select mode: Edge": "2",
		"Select mode: Face": "3",
	},
	"Tools": {
		"Select": "Shift + Space B",
		"Measure": "Shift + Space M",
	},
	"Object": {
		"Add object": "Shift + A",
	},
	"Edit": {
		"Fill": "F",
		"Merge": "M",
		"Connect Vertex Path": "J",
		"Bevel": "Ctrl + B",
	},
	"Transform": {
		"Move": "G",
		"Rotate": "R",
		"Scale": "S",
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

	for (const [section_title, section] of Object.entries(content)) {
		let section_node = section_template.content.cloneNode(true);
		section_node.getElementById("section-title").textContent = section_title;

		for(const [keybind_label, keybind_keys] of Object.entries(section)) {
			let keybind_node = keybind_template.content.cloneNode(true);
			keybind_node.getElementById("label").textContent = keybind_label;
			keybind_node.getElementById("keys").innerHTML = keybind_keys
				.replace(/[^+,\s]+/g, "<kbd>$&</kbd>")
				.replace(/,/g, ",<br />");

			// firstElementChild because the top-level here is just the DocumentFragment
			section_node.firstElementChild.appendChild(keybind_node);
		}

		scrolly.appendChild(section_node);
	}

};
