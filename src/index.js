import "./style.css";

console.log("Hello webpack")

const arrowFunc = () => {
  return [1, 2]
}

const [a, b] = arrowFunc()

console.log(a, b)
