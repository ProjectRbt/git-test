const fb = (n:number)=>{
	if(n === 1 || n === 2){
		return 1
	}
	return fb(n-1) + fb(n-2)
}

const value:number = 40
console.log(fb(value))

