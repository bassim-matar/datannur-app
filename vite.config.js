import FullReload from "vite-plugin-full-reload"
import { defineConfig } from "vite"
import { Jsonjsdb_watcher } from "jsonjsdb_editor"

await Jsonjsdb_watcher.set_db("data/db")
await Jsonjsdb_watcher.watch("data/db_source")
await Jsonjsdb_watcher.update_preview("preview", "data/dataset")

export default defineConfig({
  base: "",
  server: { port: 8080, origin: "", open: true },
  build: {
    outDir: ".",
  },
  plugins: [
    FullReload(Jsonjsdb_watcher.get_db_meta_file_path()),
  ],
})
