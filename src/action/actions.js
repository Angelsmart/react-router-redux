export const REDUCE = "REDUCE"  ;
export const ADD = 'ADD' ;

export const reduce = (ietm) => {
	return {
		type:"REDUCE",
		payload:ietm
	}
}


export const add = (ietm) => {
	return {
		type:"ADD",
		payload:ietm
	}
}

