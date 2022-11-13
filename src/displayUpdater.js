import { modifyData } from "./components/logic"

export default function updateDisplay(data, setData, key) {
	const newData = [...data]
	modifyData(newData, key)
	setData([...newData])
}