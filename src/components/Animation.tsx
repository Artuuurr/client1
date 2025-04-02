export const evenMemberAnimation = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: (custom: number) => ({
		y: 70,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
}

export const oddMemberAnimation = {
	hidden: {
		y: -100,
		opacity: 0,
	},
	visible: (custom: number) => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
}

export const textInRigth = {
	hidden: {
		x: -100,
		opacity: 0,
	},
	visible: (custom: number) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
}
