export function modifyData(data, key) {
	let { number, lastNumber, currentOperation, isOperating } = data[0]
	const operate = () => {
		const a = Number(number), b = Number(lastNumber)
		let result = 0
		switch (currentOperation) {
			case "/":
				result = b / a
				break;
			case "*":
				result = b * a
				break;
			case "-":
				result = b - a
				break;
			case "+":
				result = b + a
				break;
			default:
				result = a
				break;
		}
		return result.toString()
	}
	switch (key) {
		case "AC":
			number = "0"
			isOperating = false
			lastNumber = null
			currentOperation = null
			break;
		case "%":
			number = (number / 100).toString()
			break;
		case "+/-":
			if (number.includes("-")) {
				number = number.substring(1)
			} else if (number !== "0") {
				number = "-" + number
			}
			break;
		case ".":
			if (!number.includes("."))
				number += "."
			break;
		case "/":
		case "*":
		case "-":
		case "+":
			isOperating = true
			if (isOperating && lastNumber != null) {
				number = operate()
			}
			lastNumber = number
			currentOperation = key
			break;
		case "=":
			if (currentOperation != null) {
				number = operate()
				isOperating = false
				lastNumber = null
				currentOperation = null
			}
			break;
		default:
			if (number === "0") {
				number = ""
			}
			if (isOperating) {
				number = key
				isOperating = false
			}
			else {
				number += key
			}
			break;
	}
	data[0] = { number, lastNumber, currentOperation, isOperating }
}