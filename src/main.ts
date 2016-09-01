//commonJSという規格でimportとexportが規格化されたらしい。
import { sayHello } from "./greet";

function showHello(divName:string, name:string){
	const elt = document.getElementById(divName);
	elt.innerText = sayHello(name);
}

showHello("greeting","TypeScript");