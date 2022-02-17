export default function useDate(date?: Date) {
	const now = (date?: string, count?: number): string => {
		let result: Date = date ? new Date(date) : new Date()
		if (count) {
			const time: number = Date.now() + (3600 * 24 * count * 1000)
			result = new Date(time)
		}

		return result.toISOString().split('T')[0];
	}

	return { now }
}