import path from "path"
import { fileURLToPath } from "url"
import { Jsonjsdb_watcher } from "jsonjsdb_editor"

process.chdir(path.dirname(fileURLToPath(import.meta.url)))

const path = "../../data/"

await Jsonjsdb_watcher.set_db(path + "db")
await Jsonjsdb_watcher.watch(path + "/db_source")
await Jsonjsdb_watcher.update_preview("preview", path + "dataset")
