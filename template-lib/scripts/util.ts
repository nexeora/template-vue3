import fs from "node:fs"
export function write(str: string, fileName: string): void {
    fs.writeFileSync(fileName, str)
    console.log(`已写入 ${fileName}:`, (str.length / 1024).toFixed(2), "kb")
}