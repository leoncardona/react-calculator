import updateDisplay from "./displayUpdater";

const HandleKey = (e, data, setData) => {
	const key = e.key
	switch (key) {
		case "Enter":
			updateDisplay(data, setData, "=")
			break;
		case ".":
		case "0":
		case "1":
		case "2":
		case "3":
		case "5":
		case "6":
		case "7":
		case "8":
		case "9":
		case "+":
		case "-":
		case "*":
		case "/":
			updateDisplay(data, setData, key)
			break;
		default:
			break;
	}
}

export default HandleKey