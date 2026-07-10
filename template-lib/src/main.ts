export function createCounter() {
    let count = 0
    return {
        get value(): number {
            return count
        },
        inc: () => count += 1 
    }
}