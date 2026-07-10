//import fs from 'node:fs'
import 'jake'

//import { write } from "./util"

directory("build")



const buildTask = task("prebuild task", ["build"])

buildTask.invoke()

