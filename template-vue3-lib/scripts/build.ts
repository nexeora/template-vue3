//import fs from 'node:fs'
import 'jake'

//import { write } from "./util"

directory("build")



const buildTask = task("build task", ["build"])

buildTask.invoke()

